"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  // ESC tuşu ile modal kapatma
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowVideo(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

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

        {/* Dashboard Preview - Optimize Edilmiş */}
        <div className="mt-16 relative animate-slide-up animation-delay-400">
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
            <div className="bg-gray-50 p-8 aspect-video flex items-center justify-center">
              <img
                src="/dashboard-preview.png"
                alt="Planliyo Uygulama Görseli"
                className="rounded-xl shadow-md w-full h-full object-cover"
              />
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
                src="https://ahlfqbudhqvyoytickfl.supabase.co/storage/v1/object/public/Video/RandevuPlanla.mp4"
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
