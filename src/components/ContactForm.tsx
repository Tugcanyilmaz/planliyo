import { useState } from 'react';
import { Mail, Phone, Building2, User, Send } from 'lucide-react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('loading');
  setErrorMessage('');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Planliyo <onboarding@resend.dev>',
        to: 'tugcanyilmaz@hotmail.com',
        subject: `Yeni mesaj: ${formData.name}`,
        html: `
          <p><strong>Gönderen:</strong> ${formData.name} (${formData.email})</p>
          <p><strong>Telefon:</strong> ${formData.phone}</p>
          <p><strong>İşletme Türü:</strong> ${formData.businessType}</p>
          <p><strong>Mesaj:</strong><br>${formData.message}</p>
        `,
      }),
    });

    if (!response.ok) throw new Error('Mesaj gönderilemedi');
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', businessType: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  } catch (error) {
    setStatus('error');
    setErrorMessage(error instanceof Error ? error.message : 'Bir hata oluştu');
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Hemen Başlayın
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Formu doldurun, size özel bir demo ayarlayalım. Planliyo'nun işletmeniz için neler yapabileceğini görelim.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Telefon Desteği</h3>
                  <p className="text-gray-600">7/24 teknik destek hattımızdan bize ulaşabilirsiniz</p>
                  <a href="tel:+908501234567" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    0850 123 45 67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">E-posta</h3>
                  <p className="text-gray-600">Sorularınız için bize e-posta gönderin</p>
                  <a href="mailto:destek@planliyo.com" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    destek@planliyo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Ofis</h3>
                  <p className="text-gray-600">İstanbul, Türkiye</p>
                  <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Ad Soyad *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  E-posta *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Telefon *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="0555 123 45 67"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-semibold text-gray-900 mb-2">
                  İşletme Türü *
                </label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none"
                  >
                    <option value="">Seçiniz</option>
                    <option value="kuafor">Kuaför</option>
                    <option value="berber">Berber</option>
                    <option value="guzellik">Güzellik Merkezi</option>
                    <option value="diyetisyen">Diyetisyen</option>
                    <option value="klinik">Klinik</option>
                    <option value="veteriner">Veteriner</option>
                    <option value="pilates">Pilates Stüdyosu</option>
                    <option value="reformer">Reformer Stüdyosu</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="İhtiyaçlarınız hakkında bize biraz bilgi verin..."
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
                  Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
                  {errorMessage || 'Bir hata oluştu. Lütfen tekrar deneyin.'}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all hover:scale-[1.02] shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  'Gönderiliyor...'
                ) : (
                  <>
                    Mesaj Gönder
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                Formu göndererek{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                  Gizlilik Politikası
                </a>
                'nı kabul etmiş olursunuz.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
