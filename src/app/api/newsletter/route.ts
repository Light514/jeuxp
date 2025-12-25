import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Add to Resend audience (or just send confirmation)
    // For now, send a confirmation email
    await resend.emails.send({
      from: "JeuXP <noreply@jeuxp.com>",
      to: email,
      subject: "Bienvenue dans l'univers JeuXP!",
      html: `
        <h2>Merci de vous être inscrit!</h2>
        <p>Vous recevrez nos dernières nouvelles et offres exclusives.</p>
        <p>À bientôt dans l'arène!</p>
        <hr />
        <p style="color: #666; font-size: 12px;">JeuXP - Le premier centre de défis cyberpunk à Montréal</p>
      `,
    });

    // Also notify the team
    await resend.emails.send({
      from: "JeuXP <noreply@jeuxp.com>",
      to: process.env.CONTACT_EMAIL || "contact@jeuxp.com",
      subject: "Nouvelle inscription newsletter",
      html: `<p>Nouvel abonné: ${email}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
