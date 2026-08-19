import React, { useState } from 'react';
import { ListFilter } from 'lucide-react';
import { PlatformIcon } from './PlatformIcon';

interface MobileCategoryGridProps {
  onSelectCategory?: (catId: string) => void;
  selectedTag?: string;
  setSelectedTag?: (tag: string) => void;
}

export const MobileCategoryGrid: React.FC<MobileCategoryGridProps> = ({
  onSelectCategory,
  selectedTag = 'all',
  setSelectedTag,
}) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const mainCategories = [
    {
      id: 'item-skin',
      name: 'Item & Skin',
      // Crossed swords visual illustration
      icon: (
        <div className="w-12 h-12 rounded-xl bg-indigo-900/60 flex items-center justify-center p-2 border border-indigo-500/20 shadow-md">
          <svg viewBox="0 0 64 64" className="w-8 h-8 drop-shadow">
            {/* Crossed lavender swords with gold hilts */}
            <path
              d="M12 52L24 40M16 48L12 44M20 52L16 56"
              stroke="#fbbf24"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M24 40L48 16C50 14 54 14 54 14C54 14 54 18 52 20L28 44"
              fill="#a78bfa"
              stroke="#818cf8"
              strokeWidth="2"
            />
            <circle cx="42" cy="22" r="1.5" fill="#1e1b4b" />
            <circle cx="36" cy="28" r="1.5" fill="#1e1b4b" />
            <path d="M38 27Q40 29 42 27" stroke="#1e1b4b" strokeWidth="1" fill="none" />

            <path
              d="M52 52L40 40M48 48L52 44M44 52L48 56"
              stroke="#fbbf24"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M40 40L16 16C14 14 10 14 10 14C10 14 10 18 12 20L36 44"
              fill="#a78bfa"
              stroke="#818cf8"
              strokeWidth="2"
            />
          </svg>
        </div>
      ),
    },
    {
      id: 'id-yukleme',
      name: 'ID Yükleme ...',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#facc15] flex items-center justify-center p-2 shadow-md">
          <svg viewBox="0 0 32 32" className="w-7 h-7 text-[#1e202e]">
            <rect x="4" y="6" width="24" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path d="M16 20V11M12 14L16 10L20 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ),
    },
    {
      id: 'epin',
      name: 'Epin',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center p-2 border border-white/10 shadow-md">
          <svg viewBox="0 0 32 32" className="w-7 h-7 text-white">
            <path
              d="M8 12C6 12 4 14 4 17C4 20 6.5 23 8.5 23C9.8 23 10.5 22 11.5 21C12.5 20 13.5 20 16 20C18.5 20 19.5 20 20.5 21C21.5 22 22.2 23 23.5 23C25.5 23 28 20 28 17C28 14 26 12 24 12C20 12 18 13 16 13C14 13 12 12 8 12Z"
              fill="#f8fafc"
            />
            <path d="M10 15V19M8 17H12" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
            <circle cx="21" cy="16" r="1" fill="#ef4444" />
            <circle cx="23" cy="18" r="1" fill="#3b82f6" />
            <circle cx="19" cy="18" r="1" fill="#10b981" />
            <circle cx="21" cy="20" r="1" fill="#f59e0b" />
          </svg>
        </div>
      ),
    },
    {
      id: 'boost',
      name: 'Boost Hizm...',
      icon: (
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-500 via-amber-400 to-indigo-600 flex items-center justify-center p-2 shadow-md">
          <svg viewBox="0 0 32 32" className="w-7 h-7 text-white drop-shadow">
            <path
              d="M16 4C16 4 22 8 22 16C22 20 19 23 16 26C13 23 10 20 10 16C10 8 16 4 16 4Z"
              fill="#ffffff"
            />
            <circle cx="16" cy="14" r="2" fill="#3b82f6" />
            <path d="M12 21L8 25M20 21L24 25" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      ),
    },
  ];

  const filterChips = [
    { id: 'all', label: 'Tümü', isAll: true },
    { id: 'instagram', label: 'Instagram', icon: 'Instagram' },
    { id: 'discord', label: 'Discord', icon: 'Discord' },
    { id: 'steam', label: 'Steam', icon: 'Steam' },
    { id: 'roblox', label: 'Roblox', icon: 'Roblox' },
    { id: 'efootball', label: 'eFootball Pe...', icon: 'Football' },
  ];

  return (
    <div className="w-full bg-[#272a3c] rounded-2xl p-3 border border-white/10 shadow-lg select-none my-2">
      {/* Top 4 Main Category Cards */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {mainCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory && onSelectCategory(cat.id)}
            className="flex flex-col items-center justify-between p-1.5 rounded-xl hover:bg-white/5 transition-all group cursor-pointer"
          >
            <div className="group-hover:scale-105 transition-transform duration-200">
              {cat.icon}
            </div>
            <span className="text-[11px] font-semibold text-white mt-1.5 text-center leading-tight truncate w-full">
              {cat.name}
            </span>
          </button>
        ))}
      </div>

      {/* Bottom Filter Chips / Pill Buttons */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
        {filterChips.map((chip) => {
          const isSelected = activeFilter === chip.id;
          return (
            <button
              key={chip.id}
              onClick={() => {
                setActiveFilter(chip.id);
                if (setSelectedTag) setSelectedTag(chip.id);
              }}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-[#5865F2] text-white border-[#5865F2] shadow-md shadow-[#5865F2]/30'
                  : 'bg-[#1c1e2b] text-gray-200 border-[#5865F2]/30 hover:border-[#5865F2] hover:bg-[#232637]'
              }`}
            >
              {chip.isAll ? (
                <ListFilter className="w-3.5 h-3.5 text-white" />
              ) : (
                <PlatformIcon name={chip.icon} className="w-3.5 h-3.5 rounded-full shrink-0" />
              )}
              <span className="truncate max-w-[90px]">{chip.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
