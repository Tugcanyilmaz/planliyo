// ✅ src/app/api/contact/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, businessType, message } = body;

    // Gönderilecek e-posta içeriği
    const htmlContent = `
      <h2>Yeni İletişim Formu Mesajı</h2>
      <p><strong>Ad Soyad:</strong> ${name}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>İşletme Türü:</strong> ${businessType}</p>
      <p><strong>Mesaj:</strong> ${message || "(boş)"}</p>
    `;

    await resend.emails.send({
      from: "Planliyo <onboarding@resend.dev>", // Resend’de doğrulanan adres olmalı
      to: process.env.CONTACT_RECEIVER_EMAIL as string,
      subject: "Yeni İletişim Formu Mesajı",
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Contact API Error:", error);
    return NextResponse.json(
      { error: "Mesaj gönderilemedi. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
