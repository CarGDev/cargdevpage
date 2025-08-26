import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file in project root
const envPath = path.resolve(process.cwd(), '.env');
console.log('🔍 Loading .env file from:', envPath);
console.log('🔍 Current working directory:', process.cwd());
dotenv.config({ path: envPath });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  const isDevelopment = process.env.NODE_ENV === 'development';
  console.log('🔍 Environment detection:', { 
    NODE_ENV: process.env.NODE_ENV, 
    appEnv: app.get("env"),
    isDevelopment 
  });
  
  if (isDevelopment) {
    console.log('🚀 Setting up Vite development server');
    await setupVite(app, server);
  } else {
    console.log('🏗️  Setting up production static file serving');
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  console.log("🔍 Environment variables at server startup:");
  console.log("  PORT:", process.env.PORT);
  console.log("  SMTP_HOST:", process.env.SMTP_HOST);
  console.log("  SMTP_USER:", process.env.SMTP_USER);
  console.log("  EMAIL_FROM:", process.env.EMAIL_FROM);
  console.log("  EMAIL_TO:", process.env.EMAIL_TO);
  console.log("  OPTIONS_SECURE:", process.env.OPTIONS_SECURE);
  console.log("  MAIL_TRANSPORT:", process.env.MAIL_TRANSPORT);
  console.log("Starting server on port:", port);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
