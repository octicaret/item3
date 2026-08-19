import React from 'react';
import { Sparkles, Store, Key } from 'lucide-react';
import { PlatformIcon } from './PlatformIcon';

interface QuickFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  activeSlideImage?: string;
}

export const QuickFilters: React.FC<QuickFiltersProps> = ({
  activeFilter,
  setActiveFilter,
  activeSlideImage = "https://cdn.itemsatis.com/uploads/slider/full/valorant-points-1899.png",
}) => {
  const filters = [
    { id: 'newest', label: 'En Yeniler', icon: Sparkles },
    { id: 'marketplace', label: 'İlan Pazarı', icon: Store },
    { id: 'valorant', label: 'Valorant', platform: 'Valorant' },
    { id: 'pubg', label: 'PUBG Mobile', platform: 'PUBG' },
    { id: 'roblox', label: 'Roblox', platform: 'Roblox' },
    { id: 'lol', label: 'League of Legends', platform: 'League of Legends' },
    { id: 'cs2', label: 'Counter Strike 2', platform: 'CS2' },
    { id: 'cdkey', label: 'CD-Key', icon: Key },
  ];

  return (
    <div className="relative py-4 md:py-3 px-4 overflow-x-auto md:overflow-hidden select-none border-b border-white/5 md:bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto flex items-center gap-3 md:gap-1.5 lg:gap-2">
        {filters.map((f) => {
          const Icon = f.icon;
          const isActive = activeFilter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`flex items-center justify-center space-x-2.5 md:space-x-1 lg:space-x-1.5 px-6 py-3 md:px-1.5 lg:px-2.5 md:py-3.5 lg:py-4 rounded-2xl md:rounded-full text-sm md:text-[9.5px] lg:text-[11px] xl:text-[12px] font-extrabold whitespace-nowrap transition-all border shadow-md md:flex-1 md:min-w-0 hover:scale-105 active:scale-95 ${
                isActive
                  ? 'bg-[#667AFA] md:bg-[#667AFA] text-white border-[#667AFA] shadow-lg shadow-[#667AFA]/40 md:scale-105'
                  : 'bg-[#1c2033]/90 md:bg-[#1c2033]/60 md:backdrop-blur-md hover:bg-[#252b45] md:hover:bg-[#252b45]/80 text-gray-200 border-white/10 md:border-white/5 hover:border-white/20'
              }`}
            >
              {f.platform ? (
                <PlatformIcon name={f.platform} className="w-5 h-5 md:w-3.5 lg:w-4 md:h-3.5 lg:h-4 shrink-0" />
              ) : Icon ? (
                <Icon className={`w-5 h-5 md:w-3.5 lg:w-4 md:h-3.5 lg:h-4 shrink-0 text-current`} />
              ) : null}
              <span className="inline-block truncate">{f.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
