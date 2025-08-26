import type { Express } from "express";
import { createServer, type Server } from "http";
import { sendContactFormEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: 'Name, email, and message are required' 
        });
      }
      
      // Send email
      await sendContactFormEmail({ name, email, subject, message });
      
      res.json({ message: 'Contact form submitted successfully' });
    } catch (error) {
      console.error('Contact form error:', error);
      
      // Don't crash the server, just return an error response
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ 
        message: 'Failed to submit contact form',
        error: process.env.NODE_ENV === 'development' ? errorMessage : 'Internal server error'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
