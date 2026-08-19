import React, { useState } from 'react';
import {
  Menu,
  Store,
  Flame,
  Gift,
  ShieldCheck,
  Key,
  Zap,
  CreditCard,
  Users,
  Plus,
  ChevronDown,
} from 'lucide-react';
import { PlatformIcon } from './PlatformIcon';

interface NavigationProps {
  onOpenAddListing: () => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenAddListing,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'Tüm Kategoriler', icon: Menu },
    { id: 'valorant', name: 'Valorant VP & Hesap', platform: 'Valorant' },
    { id: 'pubg', name: 'PUBG Mobile UC', platform: 'PUBG' },
    { id: 'discord', name: 'Discord Nitro & Boost', platform: 'Discord' },
    { id: 'cs2', name: 'CS2 Hesap & İtem', platform: 'CS2' },
    { id: 'roblox', name: 'Roblox Robux & Hesap', platform: 'Roblox' },
    { id: 'lol', name: 'League of Legends RP', platform: 'League of Legends' },
  ];

  return (
    <>
      <nav className="hidden md:block bg-[#1f2335]/70 backdrop-blur-md border-b border-white/5 py-1.5 px-3 lg:px-4 select-none relative z-30 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1 lg:gap-2">
          {/* Navigation Items */}
          <div className="flex items-center gap-1 md:gap-1.5 lg:gap-2 shrink min-w-0 flex-1 justify-start">
            {/* Main Categories Dropdown button */}
            <div className="relative shrink-0">
              <button
                onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
                className="flex items-center space-x-1 bg-[#667AFA]/20 hover:bg-[#667AFA]/30 text-[#667AFA] px-2 py-1.5 md:px-2 md:py-1.5 lg:px-3 lg:py-2 rounded-xl text-[10px] md:text-[11px] lg:text-xs xl:text-sm font-extrabold transition-colors border border-[#667AFA]/30 whitespace-nowrap"
              >
                <Menu className="w-3.5 h-3.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-current shrink-0" />
                <span>Kategoriler</span>
                <ChevronDown className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 shrink-0" />
              </button>

              {/* Dropdown menu */}
              {isCategoryMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#1c2033] border border-white/10 rounded-xl shadow-2xl py-2 z-50">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setIsCategoryMenuOpen(false);
                        }}
                        className="w-full flex items-center space-x-2.5 px-4 py-2 hover:bg-[#667AFA] text-gray-200 hover:text-white transition-colors text-xs text-left font-semibold"
                      >
                        {cat.platform ? (
                          <PlatformIcon name={cat.platform} className="w-4 h-4" />
                        ) : Icon ? (
                          <Icon className="w-4 h-4 text-current" />
                        ) : null}
                        <span>{cat.name}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="#marketplace"
              className="flex items-center space-x-1 text-gray-300 hover:text-white px-1.5 py-1.5 md:px-1.5 md:py-1.5 lg:px-2.5 lg:py-2 rounded-xl text-[10px] md:text-[11px] lg:text-xs xl:text-sm font-bold hover:bg-white/5 transition-colors whitespace-nowrap shrink-0"
            >
              <Store className="w-3.5 h-3.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-current shrink-0" />
              <span>İlan Pazarı</span>
            </a>

            <a
              href="#deals"
              className="flex items-center space-x-1 text-gray-300 hover:text-white px-1.5 py-1.5 md:px-1.5 md:py-1.5 lg:px-2.5 lg:py-2 rounded-xl text-[10px] md:text-[11px] lg:text-xs xl:text-sm font-bold hover:bg-white/5 transition-colors whitespace-nowrap shrink-0"
            >
              <Flame className="w-3.5 h-3.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-current shrink-0" />
              <span>Haftanın Fırsatları</span>
            </a>

            <a
              href="#giveaways"
              className="flex items-center space-x-1 text-[#facc15] hover:text-yellow-300 px-1.5 py-1.5 md:px-1.5 md:py-1.5 lg:px-2.5 lg:py-2 rounded-xl text-[10px] md:text-[11px] lg:text-xs xl:text-sm font-extrabold hover:bg-yellow-400/10 transition-colors whitespace-nowrap shrink-0"
            >
              <Gift className="w-3.5 h-3.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-current shrink-0" />
              <span>Çekilişler</span>
              <span className="bg-[#facc15] text-[#141724] text-[8px] md:text-[9px] font-extrabold px-1 py-0.2 rounded-full uppercase ml-0.5">
                YENİ
              </span>
            </a>

            <a
              href="#stores"
              className="flex items-center space-x-1 text-gray-300 hover:text-white px-1.5 py-1.5 md:px-1.5 md:py-1.5 lg:px-2.5 lg:py-2 rounded-xl text-[10px] md:text-[11px] lg:text-xs xl:text-sm font-bold hover:bg-white/5 transition-colors whitespace-nowrap shrink-0"
            >
              <ShieldCheck className="w-3.5 h-3.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-current shrink-0" />
              <span>Mağazalar</span>
            </a>

            <a
              href="#cdkey"
              className="flex items-center space-x-1 text-gray-300 hover:text-white px-1.5 py-1.5 md:px-1.5 md:py-1.5 lg:px-2.5 lg:py-2 rounded-xl text-[10px] md:text-[11px] lg:text-xs xl:text-sm font-bold hover:bg-white/5 transition-colors whitespace-nowrap shrink-0"
            >
              <Key className="w-3.5 h-3.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-current shrink-0" />
              <span>CD-Key</span>
            </a>

            <a
              href="#topup"
              className="flex items-center space-x-1 text-gray-300 hover:text-white px-1.5 py-1.5 md:px-1.5 md:py-1.5 lg:px-2.5 lg:py-2 rounded-xl text-[10px] md:text-[11px] lg:text-xs xl:text-sm font-bold hover:bg-white/5 transition-colors whitespace-nowrap shrink-0"
            >
              <Zap className="w-3.5 h-3.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-current shrink-0" />
              <span>Top Up</span>
            </a>

            <a
              href="#giftcards"
              className="flex items-center space-x-1 text-gray-300 hover:text-white px-1.5 py-1.5 md:px-1.5 md:py-1.5 lg:px-2.5 lg:py-2 rounded-xl text-[10px] md:text-[11px] lg:text-xs xl:text-sm font-bold hover:bg-white/5 transition-colors whitespace-nowrap shrink-0"
            >
              <CreditCard className="w-3.5 h-3.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-current shrink-0" />
              <span>Hediye Kartları</span>
            </a>

            <a
              href="#community"
              className="flex items-center space-x-1 text-gray-300 hover:text-white px-1.5 py-1.5 md:px-1.5 md:py-1.5 lg:px-2.5 lg:py-2 rounded-xl text-[10px] md:text-[11px] lg:text-xs xl:text-sm font-bold hover:bg-white/5 transition-colors whitespace-nowrap shrink-0"
            >
              <Users className="w-3.5 h-3.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-current shrink-0" />
              <span>Topluluk</span>
            </a>
          </div>

          {/* Right CTA Button "+ İlan Ekle" */}
          <button
            onClick={onOpenAddListing}
            className="bg-[#667AFA] hover:bg-[#5264e0] text-white font-bold px-2.5 py-1.5 md:px-3 md:py-1.5 lg:px-4 lg:py-2 rounded-xl flex items-center space-x-1 shadow-lg shadow-[#667AFA]/25 hover:scale-105 active:scale-95 transition-all shrink-0 text-[10px] md:text-[11px] lg:text-xs xl:text-sm whitespace-nowrap ml-1"
          >
            <Plus className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-[3] shrink-0" />
            <span>İlan Ekle</span>
          </button>
        </div>
      </nav>
    </>
  );
};
