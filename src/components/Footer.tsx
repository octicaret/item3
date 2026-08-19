import React from 'react';
import { ShieldCheck, Lock, Headphones, CreditCard } from 'lucide-react';
import { PlatformIcon } from './PlatformIcon';
import { mainLogoBase64 } from '../assets/logos';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#212332] text-gray-400 text-xs border-t border-white/5 pt-12 pb-8 px-4 mt-16 select-none">
      <div className="max-w-7xl mx-auto">
        {/* Trust Badges Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-10 border-b border-white/5 mb-10">
          <div className="flex items-center space-x-3 bg-[#181b2a] p-4 rounded-2xl border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-[#667AFA]/15 text-[#667AFA] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs">%100 Güvenli Alışveriş</h4>
              <p className="text-[11px] text-gray-400">Havuz sistemi ile paranız %100 güvende</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-[#141724] p-4 rounded-2xl border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-[#5865F2]/15 text-[#5865F2] flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs">256-bit SSL Şifreleme</h4>
              <p className="text-[11px] text-gray-400">Ödemeleriniz uçtan uca korumalı</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-[#141724] p-4 rounded-2xl border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-[#ec4899]/15 text-[#ec4899] flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs">7/24 Canlı Destek</h4>
              <p className="text-[11px] text-gray-400">Destek ekibimiz her an yanınızda</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-[#141724] p-4 rounded-2xl border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs">Anında Teslimat</h4>
              <p className="text-[11px] text-gray-400">Otomatik stok sistemi ile 0 sn teslim</p>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <a href="/">
                <img
                  src={mainLogoBase64}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/logo.png';
                  }}
                  alt="Logo"
                  className="h-11 w-auto object-contain bg-transparent border-none drop-shadow-md"
                />
              </a>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Türkiye'nin en gelişmiş ve güvenilir oyuncu pazarı. Valorant VP, PUBG UC, Discord Boost,
              oyun hesapları ve CD-Key ürünlerini güvenle alıp satabilirsiniz.
            </p>
          </div>

          {/* Column 1 */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Kurumsal
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kullanıcı Sözleşmesi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Banka Hesaplarımız</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Hızlı Erişim
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <PlatformIcon name="Valorant" className="w-3.5 h-3.5" />
                  <span>Valorant VP Satın Al</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <PlatformIcon name="PUBG" className="w-3.5 h-3.5" />
                  <span>PUBG UC Satın Al</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <PlatformIcon name="Discord" className="w-3.5 h-3.5" />
                  <span>Discord Boost Paketleri</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <PlatformIcon name="Roblox" className="w-3.5 h-3.5" />
                  <span>Roblox Robux</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <PlatformIcon name="CS2" className="w-3.5 h-3.5" />
                  <span>CS2 Hesap İlanları</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Destek & Yardım
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Destek Merkezi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sıkça Sorulan Sorular</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nasıl İlan Eklenir?</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Güvenlik İpuçları</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Canlı Destek Hattı</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights & Payment Icons */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-500 text-center md:text-left">
            © 2026 itemsatis.com - Tüm Hakları Saklıdır. Türkiye'nin Lider Oyuncu Pazaryeri.
          </p>

          <div className="flex items-center space-x-3 text-gray-400 font-bold text-[10px]">
            <span className="bg-[#141724] px-2.5 py-1 rounded border border-white/5">Visa</span>
            <span className="bg-[#141724] px-2.5 py-1 rounded border border-white/5">Mastercard</span>
            <span className="bg-[#141724] px-2.5 py-1 rounded border border-white/5">Troy</span>
            <span className="bg-[#141724] px-2.5 py-1 rounded border border-white/5 text-[#5865F2]">Papara</span>
            <span className="bg-[#141724] px-2.5 py-1 rounded border border-white/5 text-emerald-400">PayTR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
