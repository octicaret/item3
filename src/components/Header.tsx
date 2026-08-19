import React, { useState } from 'react';
import { Search, User, ShoppingCart, Bell, Sparkles, Menu, X, Globe, MessageSquare, Wallet } from 'lucide-react';
import { PlatformIcon } from './PlatformIcon';
import { mainLogoBase64 } from '../assets/logos';

interface HeaderProps {
  onProfileClick: () => void;
  onOpenAddListing: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onNavigateHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onProfileClick,
  onOpenAddListing,
  searchQuery,
  setSearchQuery,
  onNavigateHome,
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const quickSuggestions = [
    'Valorant VP',
    'PUBG UC',
    'Discord Boost',
    'Roblox Robux',
    'CS2 Seçkin',
    'LoL RP',
  ];

  return (
    <header className="bg-[#212332] border-b border-white/5 py-2.5 md:py-3.5 px-3 md:px-4 sticky top-0 z-40 backdrop-blur-md bg-opacity-95 select-none">
      <div className="max-w-7xl mx-auto">
        {/* ================= MOBILE VIEW (< md) ================= */}
        <div className="block md:hidden">
          {/* Top Row: Menu & Chat Icon (Left), Logo (Center), Notifications & Avatar (Right) */}
          <div className="flex items-center justify-between gap-2">
            {/* Left Icons: Menu & Chat Button */}
            <div className="flex items-center space-x-2 shrink-0">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Open Mobile Menu"
                className="p-1.5 text-gray-300 hover:text-white bg-[#1c2033] rounded-lg border border-white/5 active:scale-95 transition-all"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* Standard Chat Button on Left side */}
              <button
                aria-label="Messages & Chat"
                className="p-2 bg-[#1c2033] hover:bg-[#252b45] text-gray-200 hover:text-white rounded-lg border border-white/10 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-[#667AFA]" />
              </button>
            </div>

            {/* Center Logo */}
            <div className="flex-1 flex justify-center items-center">
              <a 
                href="/" 
                onClick={(e) => {
                  if (onNavigateHome) {
                    e.preventDefault();
                    onNavigateHome();
                  }
                }}
                className="flex items-center space-x-1.5"
              >
                <img
                  src={mainLogoBase64}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/logo.png';
                  }}
                  alt="itemsatış"
                  className="h-8 w-auto object-contain drop-shadow-md"
                />
              </a>
            </div>

            {/* Right Icons: Notifications & User Avatar */}
            <div className="flex items-center space-x-2 shrink-0">
              <button
                aria-label="Notifications"
                className="relative p-1.5 text-gray-300 hover:text-white bg-[#1c2033] rounded-lg border border-white/5 active:scale-95 transition-all"
              >
                <Bell className="w-5 h-5" />
                <span className="hidden md:flex absolute -top-1 -right-1 bg-[#667AFA] text-white text-[9px] font-extrabold w-4 h-4 rounded-full items-center justify-center border border-[#212332]">
                  4
                </span>
              </button>

              <button
                onClick={onProfileClick}
                aria-label="User Profile"
                className="w-8 h-8 rounded-full bg-transparent border border-white/20 overflow-hidden flex items-center justify-center text-gray-200 active:scale-95 transition-all shadow-md"
              >
                <img src="https://i.ibb.co/QjbzzqBM/hinduuu.png" className="w-full h-full object-cover" alt="Profilim" />
              </button>
            </div>
          </div>

          {/* Bottom Row: Mobile Search Bar */}
          <div className="mt-2.5 relative">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                placeholder="Buraya tıklayarak arama yap..."
                className="w-full bg-[#1c2033] text-white text-xs placeholder-gray-400 pl-9 pr-3 py-2 rounded-xl border border-white/10 focus:border-[#667AFA] focus:outline-none transition-all shadow-inner"
              />
            </div>

            {/* Mobile Search Suggestions */}
            {isSearchFocused && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#1c2033] border border-white/10 rounded-xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Popüler Aramalar</span>
                  <span className="text-[#667AFA] flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Trendler
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {quickSuggestions.map((item) => (
                    <button
                      key={item}
                      onClick={() => setSearchQuery(item)}
                      className="bg-[#262c44] hover:bg-[#667AFA] text-gray-200 hover:text-white text-[11px] px-2 py-1 rounded-lg transition-colors border border-white/5 flex items-center space-x-1"
                    >
                      <PlatformIcon name={item} className="w-3 h-3" />
                      <span>{item}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ================= DESKTOP VIEW (>= md) ================= */}
        <div className="hidden md:flex items-center justify-between gap-4">
          {/* Left Chat Button & Logo Section */}
          <div className="flex items-center space-x-3 shrink-0">
            {/* Desktop Site Logo */}
            <a 
              href="/" 
              onClick={(e) => {
                if (onNavigateHome) {
                  e.preventDefault();
                  onNavigateHome();
                }
              }}
              className="flex items-center space-x-2 group"
            >
              <img
                src={mainLogoBase64}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/logo.png';
                }}
                alt="itemsatış"
                className="h-9 md:h-12 w-auto object-contain bg-transparent border-none drop-shadow-md group-hover:scale-105 transition-transform"
              />
            </a>

            {/* Language Selector next to Logo */}
            <button className="flex items-center space-x-1.5 bg-[#1c2033] hover:bg-[#252b45] px-2.5 py-1.5 rounded-xl border border-white/10 text-xs text-gray-300 transition-colors shadow-sm cursor-pointer">
              <span className="font-semibold text-[11px] text-gray-200">TR / EN</span>
            </button>
          </div>

          {/* Center Search Input */}
          <div className="flex-1 max-w-xl xl:max-w-2xl relative">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                placeholder="Valorant, PUBG Mobile, Knight Online veya İlan arayın..."
                className="w-full bg-[#1c2033] hover:bg-[#22273d] focus:bg-[#22273d] text-white text-sm placeholder-gray-400 pl-4 pr-12 py-2.5 md:py-3 rounded-xl border border-white/10 focus:border-[#667AFA] focus:outline-none focus:ring-2 focus:ring-[#667AFA]/30 transition-all shadow-inner"
              />
              <button
                aria-label="Search"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#667AFA] hover:bg-[#5264e0] text-white px-3.5 rounded-lg flex items-center justify-center transition-colors shadow-md shadow-[#667AFA]/30"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Search suggestions dropdown */}
            {isSearchFocused && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#1c2033] border border-white/10 rounded-xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Popüler Aramalar</span>
                  <span className="text-[#667AFA] flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Canlı Trendler
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {quickSuggestions.map((item) => (
                    <button
                      key={item}
                      onClick={() => setSearchQuery(item)}
                      className="bg-[#262c44] hover:bg-[#667AFA] text-gray-200 hover:text-white text-xs px-2.5 py-1.5 rounded-lg transition-colors border border-white/5 flex items-center space-x-1.5"
                    >
                      <PlatformIcon name={item} className="w-3.5 h-3.5" />
                      <span>{item}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right User Actions */}
          <div className="flex items-start gap-5 shrink-0 pt-1">
            {/* Wallet Button */}
            <button
              aria-label="Cüzdanım"
              title="Cüzdanım"
              className="flex flex-col items-center justify-center gap-1.5 text-gray-400 hover:text-white transition-colors group"
            >
              <Wallet className="w-6 h-6" />
              <span className="text-[10px] font-bold bg-[#1c2033] border border-white/10 px-1.5 py-0.5 rounded-md text-white shadow-sm whitespace-nowrap leading-none">
                0.00 ₺
              </span>
            </button>

            {/* Chats Button */}
            <button
              aria-label="Sohbetlerim"
              title="Sohbetlerim"
              className="flex relative text-gray-400 hover:text-white transition-all hover:scale-110 mt-0.5"
            >
              <MessageSquare className="w-6 h-6" />
            </button>

            {/* Notifications */}
            <button
              aria-label="Bildirimler"
              title="Bildirimler"
              className="flex relative text-gray-400 hover:text-white transition-all hover:scale-110 mt-0.5"
            >
              <Bell className="w-6 h-6" />
            </button>

            {/* Profile Button */}
            <button
              onClick={onProfileClick}
              aria-label="Profilim"
              title="Profilim"
              className="flex items-center justify-center text-gray-400 hover:text-white transition-all hover:scale-110"
            >
              <div className="w-7 h-7 rounded-full overflow-hidden border border-white/20 shadow-md bg-transparent">
                <img src="https://i.ibb.co/QjbzzqBM/hinduuu.png" className="w-full h-full object-cover" alt="Profilim" />
              </div>
            </button>

            {/* Cart Button */}
            <button
              aria-label="Sepet"
              title="Sepet"
              className="flex items-center justify-center text-gray-400 hover:text-white transition-all hover:scale-110 mt-0.5"
            >
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Over Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[102px] bg-[#141724]/95 backdrop-blur-xl z-50 p-4 border-t border-white/10 overflow-y-auto animate-in slide-in-from-top-2">
          <div className="space-y-3">
            <button
              onClick={onOpenAddListing}
              className="w-full bg-[#667AFA] hover:bg-[#5264e0] text-white font-bold py-3 rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-[#667AFA]/30"
            >
              <span>+ İlan Ekle</span>
            </button>

            <button
              onClick={onProfileClick}
              className="w-full bg-[#1c2033] text-white font-semibold py-3 rounded-xl border border-white/10 flex items-center justify-center space-x-2"
            >
              <img src="https://i.ibb.co/QjbzzqBM/hinduuu.png" className="w-5 h-5 rounded-full object-cover bg-transparent shadow-md" alt="Profilim" />
              <span>Profilim</span>
            </button>

            <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs text-gray-300">
              <span className="flex items-center space-x-1.5">
                <Globe className="w-4 h-4 text-[#667AFA]" />
                <span>Dil / Language</span>
              </span>
              <span className="font-bold text-white bg-[#1c2033] px-2.5 py-1 rounded-lg border border-white/10">
                TR / EN
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

