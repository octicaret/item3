import React, { useState } from 'react';
import { HelpCircle, Rocket, Info, X } from 'lucide-react';

export const VitrinInfoBanner: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 my-6">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1e293b] via-[#1e1b4b] to-[#1e293b] border border-[#5865F2]/30 p-5 md:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Subtle Glow & Background Deco */}
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#5865F2]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#8b5cf6]/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Left Content */}
          <div className="flex items-center space-x-4 z-10">
            {/* Astronaut Rocket Mascot Icon Container */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#5865F2] to-[#8b5cf6] p-0.5 shrink-0 shadow-lg shadow-[#5865F2]/30">
              <div className="w-full h-full bg-[#141724] rounded-[14px] flex items-center justify-center">
                <Rocket className="w-7 h-7 text-[#38bdf8] animate-pulse" />
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-[#38bdf8] uppercase tracking-wider flex items-center">
                  <Info className="w-3.5 h-3.5 mr-1" /> Vitrin İlanları Hakkında
                </span>
              </div>
              <p className="text-gray-200 text-xs md:text-sm font-medium mt-1 leading-relaxed max-w-3xl">
                Binlerce vitrin ilanını kategori ayrımı olmadan görüntülüyorsunuz. Yukarıdan kategori
                seçimi yaparak istediğiniz kategorideki vitrin ilanları görüntüleyebilirsiniz.
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <button
            onClick={() => setShowModal(true)}
            className="z-10 bg-[#38bdf8]/15 hover:bg-[#38bdf8]/25 text-[#38bdf8] border border-[#38bdf8]/40 font-semibold px-4 py-2.5 rounded-xl text-xs flex items-center space-x-2 transition-all hover:scale-105 shrink-0"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Vitrin İlanı Nedir?</span>
          </button>
        </div>
      </div>

      {/* Info Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#1c2033] border border-white/10 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#5865F2]/20 text-[#5865F2] flex items-center justify-center">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-lg">Vitrin İlanı Nedir?</h3>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Vitrin İlanları, itemsatis üzerinde satıcıların ürünlerini ana sayfada ve arama
              sonuçlarının en üstünde öne çıkarmasını sağlayan premium reklam özelliğidir.
            </p>

            <ul className="text-xs text-gray-400 space-y-2 mb-6">
              <li className="flex items-center text-emerald-400">
                ✓ En yüksek ziyaretçi etkileşimi ve hızlı satış imkanı
              </li>
              <li className="flex items-center text-emerald-400">
                ✓ Doğrulanmış ve onaylı kurumsal mağaza güvencesi
              </li>
              <li className="flex items-center text-emerald-400">
                ✓ Otomatik teslimat veya 7/24 anında satıcı iletişimi
              </li>
            </ul>

            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-[#667AFA] hover:bg-[#5264e0] text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
            >
              Anladım, Kapat
            </button>
          </div>
        </div>
      )}
    </>
  );
};
