import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, businessName, phone, message } = body;

    // Validation
    if (!name || !email || !businessName || !message) {
      return NextResponse.json(
        {
          error:
            "Please fill in all required fields (Name, Email, Business Name, Message).",
        },
        { status: 400 }
      );
    }

    const payload = {
      name,
      email,
      businessName,
      phone: phone || "Not provided",
      message,
      submittedAt: new Date().toISOString(),
      source: "Ceratics Website Contact Form",
    };

    console.log("[Ceratics Contact Form Submission]", payload);

    // Optional: Forward to custom webhook (e.g. Zapier, Make, Slack, Discord, or CRM)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (webhookErr) {
        console.error("[Webhook Forwarding Error]", webhookErr);
        // Do not fail the user's submission if webhook has a temporary glitch
      }
    }

    // Optional: Send email via Resend API if key is provided
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL || "hello@ceratics.com";
    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Ceratics Inquiries <inquiries@ceratics.com>",
            to: [notificationEmail],
            subject: `New Lead: ${name} (${businessName})`,
            html: `
              <h2>New Inquiry via Ceratics Contact Form</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Business:</strong> ${businessName}</p>
              <p><strong>Phone:</strong> ${phone || "None"}</p>
              <p><strong>Message:</strong></p>
              <p style="background: #f4f4f4; padding: 12px; border-radius: 6px;">${message}</p>
              <p><em>Submitted at: ${payload.submittedAt}</em></p>
            `,
          }),
        });
      } catch (emailErr) {
        console.error("[Email Notification Error]", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you for reaching out! We received your message and will respond within 4 business hours.",
    });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      {
        error:
          "An unexpected error occurred while processing your request. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}
