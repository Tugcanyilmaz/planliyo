import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ayşe Yılmaz',
    role: 'Salon Sahibi',
    business: 'Elegant Kuaför',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: 'Planliyo sayesinde randevu karmaşası tamamen son buldu. Müşterilerim artık 7/24 online randevu alabiliyor. İş yükümüz %40 azaldı, müşteri memnuniyetimiz arttı. Kesinlikle tavsiye ediyorum!'
  },
  {
    name: 'Mehmet Kaya',
    role: 'Kurucu',
    business: 'FitLife Pilates Stüdyosu',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: 'Grup derslerimiz ve kişisel seanslarımız için mükemmel bir çözüm. WhatsApp bildirimleri özellikle çok işimize yarıyor. Müşterilerimizle iletişim çok kolay.'
  },
  {
    name: 'Murat Şahin',
    role: 'Diyetisyen',
    business: 'Sağlıklı Yaşam Danışmanlık',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: 'Online danışmanlık verdiğim için esnek bir randevu sistemi gerekiyordu. Planliyo tam ihtiyacım olan şeyi sundu. Raporlama özellikleri sayesinde işlerimi çok daha iyi takip edebiliyorum.'
  },
  {
    name: 'Can Öztürk',
    role: 'İşletme Sahibi',
    business: 'Can Maccass Barber',
    image: 'https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: '3 şubemizi tek platformdan yönetiyoruz. Çalışan yönetimi ve raporlama özellikleri harika. Artık hangi şubede ne olup bittiğini anlık görebiliyorum. Gerçekten profesyonel bir sistem.'
  },
  {
    name: 'Elif Arslan',
    role: 'Veteriner Hekim',
    business: 'PatiDost Veteriner Kliniği',
    image: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: 'Acil vakalar ve rutin kontroller için farklı randevu tipleri oluşturabiliyoruz. WhatsApp sayesinde no-show oranımız çok düştü. Teknik destek ekibi de çok yardımcı oluyor.'
  },
  {
    name: 'Burak Şahin',
    role: 'Kurucu Ortak',
    business: 'Glow Beauty Center',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: 'Estetik ve güzellik hizmetlerimiz için detaylı randevu yönetimi gerekiyordu. Planliyo\'nun sunduğu özelleştirme seçenekleri harika. Müşteri veritabanı yönetimi de çok kullanışlı.'
  }
];

function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Binlerce işletme sahibi Planliyo ile randevu yönetimini kolaylaştırdı
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <Quote className="w-10 h-10 text-blue-200 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-100"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg border border-gray-200">
            <div className="flex -space-x-3">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <img
                  key={index}
                  src={testimonial.image}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900">500+ mutlu müşteri</div>
              <div className="text-sm text-gray-600">Planliyo ailesine katıldı</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

