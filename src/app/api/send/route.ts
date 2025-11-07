import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, businessType, message } = body;

    // Basit validasyon
    if (!name || !email || !phone || !businessType) {
      return NextResponse.json(
        { error: 'Tüm zorunlu alanları doldurun' },
        { status: 400 }
      );
    }

    // E-posta gönder
    const data = await resend.emails.send({
      from: 'Planliyo <onboarding@resend.dev>',
      to: 'tugcanyilmaz@hotmail.com', // 👈 Doğruladığınız e-posta
      subject: `Yeni İletişim Formu: ${name}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>İşletme Türü:</strong> ${businessType}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message || 'Mesaj yazılmamış'}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('E-posta gönderim hatası:', error);
    return NextResponse.json(
      { error: 'E-posta gönderilemedi' },
      { status: 500 }
    );
  }
}
