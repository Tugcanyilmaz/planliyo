import { Calendar, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Planliyo</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              İşletmenizin randevu yönetimini kolaylaştıran, modern ve kullanıcı dostu SaaS çözümü.
            </p>
            <div className="flex gap-4">
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Ürün</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">Özellikler</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Fiyatlandırma</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Demo</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Entegrasyonlar</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">API</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Şirket</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">Hakkımızda</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Kariyer</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">İletişim</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Basın Kiti</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Destek</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">Yardım Merkezi</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Dokümantasyon</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Sıkça Sorulan Sorular</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Video Eğitimler</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Topluluk</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Planliyo. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-white transition-colors">Kullanım Koşulları</a>
              <a href="#" className="hover:text-white transition-colors">KVKK</a>
              <a href="#" className="hover:text-white transition-colors">Çerez Politikası</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

