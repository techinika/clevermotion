import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, org, email, whatsapp, service } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Get admin email from environment variable
    const adminEmail = process.env.ADMIN_EMAIL;
    
    // Get SMTP configuration from environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromEmail = process.env.SMTP_FROM || smtpUser;

    // If SMTP is not configured, log the contact and return success (for development)
    if (!smtpHost || !smtpUser || !smtpPass || !adminEmail) {
      console.log("Contact form submission (SMTP not configured):", {
        name,
        org,
        email,
        whatsapp,
        service,
      });
      return NextResponse.json(
        { message: "Contact form submitted successfully" },
        { status: 200 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort || "587"),
      secure: smtpPort === "465",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Compose email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #E50914; color: #080a0f; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #666; }
          .value { color: #333; }
          .footer { text-align: center; margin-top: 20px; color: #888; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin:0;">🎬 New Project Inquiry</h2>
            <p style="margin:5px 0 0 0;">From Cllevermotion Website</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Organization:</div>
              <div class="value">${org || "Not provided"}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${email}</div>
            </div>
            <div class="field">
              <div class="label">WhatsApp:</div>
              <div class="value">${whatsapp || "Not provided"}</div>
            </div>
            <div class="field">
              <div class="label">Service Interested In:</div>
              <div class="value">${service || "Not specified"}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the contact form on cllevermotion.com</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: `"Cllevermotion Website" <${fromEmail}>`,
      to: adminEmail,
      subject: `🎬 New Project Inquiry from ${name}${org ? ` - ${org}` : ""}`,
      html: emailHtml,
    });

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}