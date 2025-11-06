"use client";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Modal açıldığında odaklanma ve ESC tuşu ile kapatma
  useEffect(() => {
    if (showVideo) {
      // Modal açıldığında body scroll'u kapat
      document.body.style.overflow = "hidden";
      // Kapatma butonuna odaklan
      closeButtonRef.current?.focus();

      // ESC tuşu ile kapatma
      const handleEsc = (e) => {
        if (e.key === "Escape") {
          setShowVideo(false);
        }
      };
      window.addEventListener("keydown", handleEsc);

      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [showVideo]);

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  // Modal dışına tıklandığında kapatma
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseVideo();
    }
  };

  return (
    <section className="text-center py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 leading-tight">
          Planliyo ile online randevularını kolayca yönet
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Kuaför, güzellik merkezi, klinik, diyetisyen, veteriner, pilates ve
          reformer stüdyoları için online randevu sistemi.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setShowVideo(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            aria-label="Demo videosunu izle"
          >
            🎥 Demo İzle
          </button>
        </div>

        {/* Video Modal */}
        {showVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 animate-fadeIn"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-title"
          >
            <div className="relative w-full max-w-4xl animate-slideUp">
              <div className="relative bg-black rounded-xl shadow-2xl overflow-hidden">
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  className="w-full"
                  aria-label="Planliyo demo videosu"
                >
                  <source
                    src="https://ahlfqbudhqvyoytickfl.supabase.co/storage/v1/object/public/Video/RandevuPlanla.mp4"
                    type="video/mp4"
                  />
                  Tarayıcınız video etiketini desteklemiyor.
                </video>
                
                <button
                  ref={closeButtonRef}
                  onClick={handleCloseVideo}
                  className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-all duration-200 shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Videoyu kapat"
                >
                  <span className="text-xl leading-none">✖</span>
                </button>
              </div>
              
              <p className="text-white text-center mt-4 text-sm opacity-75">
                ESC tuşuna basarak veya dışarıya tıklayarak kapatabilirsiniz
              </p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
