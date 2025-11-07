import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, message } = body;

    // ⚠️ Güvenlik için basit kontrol
    if (!name || !message) {
      return Response.json({ success: false, error: "Eksik bilgi" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Website Form <onboarding@resend.dev>",
      to: "tugcanyilmaz@hotmail.com", // 👈 Buraya KENDİ e-postanızı yazın
      subject: `Yeni mesaj: ${name}`,
      html: `
        <h2>Yeni mesaj geldi</h2>
        <p><strong>Gönderen:</strong> ${name}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: "Gönderim hatası" }, { status: 500 });
  }
}
