import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, businessType, message } = body;

    if (!name || !email || !phone || !businessType) {
      return NextResponse.json(
        { error: 'Tüm zorunlu alanları doldurun' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Planliyo <onboarding@resend.dev>',
      to: 'tugcanyilmaz@hotmail.com',
      subject: `Yeni İletişim: ${name}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>İşletme Türü:</strong> ${businessType}</p>
        ${message ? `<p><strong>Mesaj:</strong></p><p>${message}</p>` : ''}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('E-posta hatası:', error);
    return NextResponse.json(
      { error: 'E-posta gönderilemedi' },
      { status: 500 }
    );
  }
}
```

---

### 3️⃣ Kaydedin

1. Aşağıdaki **"Commit message"** kısmına yazın:
```
   Backend API route eklendi
