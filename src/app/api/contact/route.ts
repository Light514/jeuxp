import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  eventType: string;
  participants: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body: ContactFormData = await request.json();
    const { name, email, eventType, participants, message } = body;

    // Basic validation
    if (!name || !email || !eventType || !participants) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const eventTypeLabels: Record<string, string> = {
      birthday: "Fête d'anniversaire",
      corporate: "Événement corporatif",
      school: "Sortie scolaire",
      private: "Réservation privée",
    };

    await resend.emails.send({
      from: "JeuXP <noreply@jeuxp.com>",
      to: process.env.CONTACT_EMAIL || "contact@jeuxp.com",
      replyTo: email,
      subject: `Nouvelle demande: ${eventTypeLabels[eventType] || eventType}`,
      html: `
        <h2>Nouvelle demande de réservation</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type d'événement:</strong> ${eventTypeLabels[eventType] || eventType}</p>
        <p><strong>Nombre de participants:</strong> ${participants}</p>
        ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ""}
        <hr />
        <p style="color: #666; font-size: 12px;">Envoyé depuis le formulaire de contact JeuXP</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
