"use client";

import { useState, useEffect } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dashboard görselleri
  const dashboardImages = [
    "/dashboard-preview-1.png",
    "/dashboard-preview-2.png",
    "/dashboard-preview-3.png",
    "/dashboard-preview-4.png"
  ];

  // Otomatik kaydırma
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dashboardImages.length);
    }, 4000); // 4 saniyede bir değişir

    return () => clearInterval(interval);
  }, [dashboardImages.length]);

  // ESC tuşu ile modal kapatma
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowVideo(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dashboardImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dashboardImages.length) % dashboardImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Üst Menü */}
      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Planliyo</span>
          </div>
        </div>
      </nav>

      {/* HERO Bölümü */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pb-32">
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

          {/* Demo İzle Butonu */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-200">
            <button
              onClick={() => setShowVideo(true)}
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all border-2 border-gray-200 hover:border-gray-300 flex items-center gap-2 shadow-md"
            >
              🎥 Demo İzle
            </button>
          </div>

          {/* Alt Özellikler */}
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-600 animate-fade-in animation-delay-300">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Kurulum 2 dakika
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
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

        {/* Dashboard Preview - Kaydırmalı Slider */}
        <div className="mt-16 relative animate-slide-up animation-delay-400 max-w-5xl mx-auto">
          
          
          <div className="rounded-2xl shadow-2xl overflow-hidden border border-gray-200 bg-white">
            {/* Browser Bar */}
            <div className="bg-gray-800 px-6 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-sm text-gray-400">Planliyo Dashboard</div>
            </div>

            {/* Slider Container */}
            <div className="relative bg-gray-50 aspect-video p-4 sm:p-8">
              {/* Görseller */}
              <div className="relative w-full h-full overflow-hidden">
                {dashboardImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide
                        ? "opacity-100 translate-x-0"
                        : index < currentSlide
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                    }`}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={image}
                        alt={`Planliyo Dashboard ${index + 1}`}
                        className="rounded-lg shadow-lg w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Sol Ok */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-20 group"
                aria-label="Önceki"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-blue-600 transition" />
              </button>

              {/* Sağ Ok */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-20 group"
                aria-label="Sonraki"
              >
                <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-blue-600 transition" />
              </button>

              {/* Nokta İndikatörleri */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {dashboardImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all ${
                      index === currentSlide
                        ? "w-8 bg-blue-600"
                        : "w-2 bg-gray-400 hover:bg-gray-600"
                    } h-2 rounded-full`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <video
              controls
              autoPlay
              className="w-full h-auto rounded-xl shadow-lg border border-gray-700 max-h-[90vh]"
            >
              <source
                src="https://jomoyqfgmpduhapvnwoy.supabase.co/storage/v1/object/public/video/RandevuPlanla.mp4"
                type="video/mp4"
              />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 bg-white text-gray-800 rounded-full p-2 hover:bg-gray-200 transition"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
