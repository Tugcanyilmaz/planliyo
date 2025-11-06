import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Eksik bilgi var." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Planliyo <onboarding@resend.dev>", // istersen domainin varsa burayı değiştir
      to: "tugcanyilmaz@hotmail.com", // mesajın düşmesini istediğin e-posta
      subject: `Yeni mesaj: ${name}`,
      html: `
        <p><strong>Gönderen:</strong> ${name} (${email})</p>
        <p><strong>Mesaj:</strong><br>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Mesaj gönderilemedi." }, { status: 500 });
  }
}
