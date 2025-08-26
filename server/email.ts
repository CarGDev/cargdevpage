import nodemailer from 'nodemailer';

// Function to create transporter with current environment variables
async function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '465');
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.OPTIONS_SECURE === 'true';
  const transport = process.env.MAIL_TRANSPORT || 'smtp';

  if (!host || !user || !pass) {
    throw new Error(`Missing SMTP configuration: SMTP_HOST=${host}, SMTP_USER=${user}, SMTP_PASS=${pass ? '[SET]' : '[NOT SET]'}`);
  }

  console.log(`📧 Creating ${transport} transporter: ${user}@${host}:${port} (secure: ${secure})`);

  // Create transporter based on configuration
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  try {
    // Verify connection configuration
    await transporter.verify();
    console.log(`✅ ${transport.toUpperCase()} connection verified`);
    return transporter;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.log(`❌ ${transport.toUpperCase()} connection failed:`, errorMessage);
    throw new Error(`${transport.toUpperCase()} connection failed: ${errorMessage}`);
  }
}

export interface EmailData {
  subject: string;
  text: string;
  html?: string;
}

export async function sendEmail(data: EmailData): Promise<void> {
  const { subject, text, html } = data;
  
  const to = process.env.EMAIL_TO;
  const from = process.env.EMAIL_FROM;
  
  if (!to || !from) {
    throw new Error('EMAIL_TO and EMAIL_FROM environment variables are required');
  }
  
  const mailOptions = {
    from,
    to,
    subject,
    text,
    ...(html && { html }),
  };

  try {
    const transporter = await createTransporter();
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");
  } catch (err) {
    console.error("❌ Error sending email", err);
    
    // Log the email content as a fallback when SMTP fails
    console.log("📧 Email fallback logging:");
    console.log("  To:", to);
    console.log("  From:", from);
    console.log("  Subject:", subject);
    console.log("  Text:", text);
    if (html) console.log("  HTML:", html);
    
    // Don't throw the error, just log it
    console.log("⚠️  Email delivery failed, but content was logged");
  }
}

export async function sendContactFormEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<void> {
  const { name, email, subject, message } = formData;
  console.log("📧 Preparing to send contact form email:", formData);
  
  const emailSubject = `New Contact Form Submission: ${subject}`;
  const text = `
New contact form submission:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}

This email was sent from the Carlos Gutierrez portfolio contact form.
  `.trim();
  
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
    <hr>
    <p><em>This email was sent from the Carlos Gutierrez portfolio contact form.</em></p>
  `;

  return sendEmail({ subject: emailSubject, text, html });
}
