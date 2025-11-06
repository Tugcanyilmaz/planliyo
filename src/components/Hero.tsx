"use client";
import { useState } from "react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="text-center py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900">
          Planliyo ile online randevularını kolayca yönet
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Kuaför, güzellik merkezi, klinik, diyetisyen, veteriner, pilates ve
          reformer stüdyoları için online randevu sistemi.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setShowVideo(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            🎥 Demo İzle
          </button>
        </div>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative w-11/12 md:w-3/4 lg:w-1/2">
              <video
                controls
                autoPlay
                className="w-full rounded-xl shadow-lg border border-gray-700"
              >
                <source
                  src="https://ahlfqbudhqvyoytickfl.supabase.co/storage/v1/object/public/Video/RandevuPlanla.mp4"
                  type="video/mp4"
                />
                Tarayıcınız video etiketini desteklemiyor.
              </video>
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-2 right-2 bg-white text-gray-800 rounded-full p-2 hover:bg-gray-200 transition"
              >
                ✖
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
