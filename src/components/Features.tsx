import { Calendar, Clock, MessageSquare, BarChart3, Smartphone, Shield } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Online Randevu Sistemi',
    description: 'Müşterileriniz 7/24 online randevu alabilir. Telefon trafiği ve karışıklığına son verin.'
  },
  {
    icon: Clock,
    title: 'Otomatik Hatırlatmalar',
    description: 'SMS ve e-posta ile otomatik randevu hatırlatmaları gönderin. No-show oranlarını %70 azaltın.'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Entegrasyonu',
    description: 'Müşterilerinizle WhatsApp üzerinden iletişim kurun. Randevu onayları ve bildirimler gönderin.'
  },
  {
    icon: BarChart3,
    title: 'Detaylı Raporlar',
    description: 'İşletmenizin performansını takip edin. Gelir, müşteri ve randevu analizleri görüntüleyin.'
  },
  {
    icon: Smartphone,
    title: 'Mobil Uygulama',
    description: 'iOS ve Android uygulamaları ile her yerden işletmenizi yönetin. Anlık bildirimler alın.'
  },
  {
    icon: Shield,
    title: 'KVKK Uyumlu',
    description: 'Müşteri verileriniz güvende. KVKK ve GDPR uyumlu altyapı ile tam güvenlik.'
  }
];

function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            İşletmenizi Bir Üst Seviyeye Taşıyın
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Planliyo ile randevu yönetimi çok kolay. Tüm işlemlerinizi tek platformdan yönetin ve işletmenizi büyütün.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 sm:p-16 text-center shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Her Sektör İçin Özel Çözümler
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Kuaför, berber, güzellik merkezi, diyetisyen, klinik, veteriner, pilates ve reformer stüdyosu...
            Hangi sektörde olursanız olun, Planliyo size özel çözümler sunar.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-white">
            {['Kuaför', 'Berber', 'Güzellik Merkezi', 'Diyetisyen', 'Klinik', 'Veteriner', 'Pilates', 'Reformer'].map((sector) => (
              <span key={sector} className="px-6 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

