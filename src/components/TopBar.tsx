import React, { useState } from 'react';
import { Megaphone, ChevronDown, Globe } from 'lucide-react';
import { announcementsData } from '../data/mockData';

interface CurrencyOption {
  code: string;
  symbol: string;
  flag: string;
  label: string;
}

const currencyOptions: CurrencyOption[] = [
  { code: 'TRY', symbol: '₺', flag: '🇹🇷', label: 'TRY (₺)' },
  { code: 'USD', symbol: '$', flag: '🇺🇸', label: 'USD ($)' },
  { code: 'EUR', symbol: '€', flag: '🇪🇺', label: 'EUR (€)' },
  { code: 'GBP', symbol: '£', flag: '🇬🇧', label: 'GBP (£)' },
  { code: 'AZN', symbol: '₼', flag: '🇦🇿', label: 'AZN (₼)' },
  { code: 'RUB', symbol: '₽', flag: '🇷🇺', label: 'RUB (₽)' },
];

export const TopBar: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyOption>(currencyOptions[0]);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

  const currentAnnouncement = announcementsData[currentIdx];

  return (
    <div className="hidden md:block bg-[#0e111b] text-[#9ba3af] text-xs py-2 px-4 border-b border-white/5 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Social Media Icons */}
        <div className="flex items-center space-x-3">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Discord"
            className="hover:text-white transition-colors p-1"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition-colors p-1"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            aria-label="X Twitter"
            className="hover:text-white transition-colors p-1"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="hover:text-white transition-colors p-1"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

        {/* Center: Announcement ticker */}
        <div className="flex items-center space-x-2 text-center overflow-hidden max-w-xl">
          <span className="bg-[#5865F2]/20 text-[#5865F2] px-2 py-0.5 rounded font-semibold text-[11px] flex items-center shrink-0">
            <Megaphone className="w-3 h-3 mr-1" /> Duyurular
          </span>
          <span className="truncate">
            {currentAnnouncement.text}{' '}
            <a
              href={currentAnnouncement.linkUrl}
              className="text-white font-medium underline hover:text-[#5865F2] transition-colors ml-1"
            >
              Tıklayın
            </a>
          </span>
        </div>

        {/* Right Links & Currency Selector */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              Alım İlanları
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Blog
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Yayıncılar
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Destek Merkezi
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Kurumsal
            </a>
          </div>

          {/* Currency dropdown with official flags */}
          <div className="relative">
            <button
              onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
              className="flex items-center space-x-2 bg-[#181b2a] hover:bg-[#202538] text-white px-3 py-1.5 rounded-lg border border-white/10 transition-colors text-xs font-medium shadow-sm"
            >
              <span className="text-sm leading-none shrink-0">{selectedCurrency.flag}</span>
              <span>{selectedCurrency.label}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            </button>

            {isCurrencyOpen && (
              <div className="absolute right-0 mt-1.5 w-36 bg-[#181b2a] border border-white/10 rounded-xl shadow-2xl py-1.5 z-50 overflow-hidden backdrop-blur-md">
                {currencyOptions.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => {
                      setSelectedCurrency(c);
                      setIsCurrencyOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                      selectedCurrency.code === c.code
                        ? 'bg-[#667AFA] text-white font-bold'
                        : 'hover:bg-[#252b45] text-gray-200'
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span className="text-sm">{c.flag}</span>
                      <span>{c.label}</span>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
