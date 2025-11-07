import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS ayarları
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, businessType, message } = req.body;

    if (!name || !email || !phone || !businessType) {
      return res.status(400).json({ error: 'Tüm zorunlu alanları doldurun' });
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

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('E-posta hatası:', error);
    return res.status(500).json({ error: 'E-posta gönderilemedi' });
  }
}
