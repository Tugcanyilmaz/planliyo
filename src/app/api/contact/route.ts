import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, businessType, message } = await req.json();

    if (!name || !email || !phone || !businessType) {
      return NextResponse.json({ error: "Eksik bilgi var." }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Planliyo <onboarding@resend.dev>", // domainin varsa örn: "iletisim@planliyo.com"
      to: "tugcanyilmaz@hotmail.com", // mesajların düşeceği adres
      subject: `Yeni Mesaj: ${name}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>İşletme Türü:</strong> ${businessType}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message || "(mesaj girilmemiş)"}</p>
      `,
    });

    console.log("Mail gönderildi:", data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Hatası:", error);
    return NextResponse.json({ error: "Mesaj gönderilemedi." }, { status: 500 });
  }
}
