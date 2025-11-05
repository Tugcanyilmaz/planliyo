import { Calendar, ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Planliyo</span>
          </div>
          <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Hemen Başla
          </button>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Yüzlerce işletmenin tercihi
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
            Randevularınızı
            <span className="text-blue-600 block mt-2">Otomatik Yönetin</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed animate-slide-up animation-delay-100">
            Kuaförler, berberler, güzellik merkezleri, klinikler ve daha fazlası için
            <span className="font-semibold text-gray-900"> modern randevu yönetim sistemi</span>
          </p>

          {/* "Ücretsiz Dene" butonu kaldırıldı, sadece "Demo İzle" kaldı */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-200">
            <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all border-2 border-gray-200 hover:border-gray-300">
              Demo İzle
            </button>
          </div>

          {/* Alt bilgi kısmından "Kredi kartı gerekmez" kaldırıldı */}
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-600 animate-fade-in animation-delay-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Kurulum 2 dakika
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              7/24 destek
            </div>
          </div>
        </div>

        <div className="mt-20 relative animate-slide-up animation-delay-400">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-transparent h-32 bottom-0"></div>
          <div className="rounded-2xl shadow-2xl overflow-hidden border border-gray-200 bg-white">
            <div className="bg-gray-800 px-6 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-sm text-gray-400">Planliyo Dashboard</div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 aspect-video flex items-center justify-center">
              <div className="text-gray-400 text-lg">Dashboard Preview</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}

export default Hero;
