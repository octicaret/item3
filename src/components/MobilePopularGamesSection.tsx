import React from 'react';
import { Flame, ChevronRight, Zap, ShieldCheck } from 'lucide-react';
import { PlatformIcon } from './PlatformIcon';

interface MobilePopularGamesSectionProps {
  onSelectCategory?: (category: string) => void;
}

export const MobilePopularGamesSection: React.FC<MobilePopularGamesSectionProps> = ({
  onSelectCategory,
}) => {
  const popularGames = [
    {
      id: 'valorant',
      name: 'Valorant VP & Hesap',
      platform: 'Valorant',
      listingCount: '1.450+ İlan',
      discount: '%15 İNDİRİM',
      bgGradient: 'from-rose-600/30 via-slate-900 to-[#1c1f2e]',
      accentColor: 'text-rose-400',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      tag: 'OTOMATİK',
    },
    {
      id: 'pubg',
      name: 'PUBG Mobile UC & RP',
      platform: 'PUBG',
      listingCount: '2.180+ İlan',
      discount: '%20 İNDİRİM',
      bgGradient: 'from-amber-600/30 via-slate-900 to-[#1c1f2e]',
      accentColor: 'text-amber-400',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      tag: 'ANINDA',
    },
    {
      id: 'knight',
      name: 'Knight Online GB',
      platform: 'Knight Online',
      listingCount: '890+ İlan',
      discount: 'EN UYGUN',
      bgGradient: 'from-blue-600/30 via-slate-900 to-[#1c1f2e]',
      accentColor: 'text-blue-400',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      tag: 'GÜVENLİ',
    },
    {
      id: 'roblox',
      name: 'Roblox Robux & Kod',
      platform: 'Roblox',
      listingCount: '1.120+ İlan',
      discount: '%12 İNDİRİM',
      bgGradient: 'from-red-600/30 via-slate-900 to-[#1c1f2e]',
      accentColor: 'text-red-400',
      badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
      tag: 'KOD TESLİM',
    },
    {
      id: 'lol',
      name: 'LoL RP & Unranked',
      platform: 'League of Legends',
      listingCount: '3.400+ İlan',
      discount: '%25 İNDİRİM',
      bgGradient: 'from-cyan-600/30 via-slate-900 to-[#1c1f2e]',
      accentColor: 'text-cyan-400',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      tag: 'TR SUNUCU',
    },
    {
      id: 'discord',
      name: 'Discord Nitro & Boost',
      platform: 'Discord',
      listingCount: '750+ İlan',
      discount: 'ÖZEL FİYAT',
      bgGradient: 'from-indigo-600/30 via-slate-900 to-[#1c1f2e]',
      accentColor: 'text-indigo-400',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      tag: 'GARANTİLİ',
    },
  ];

  return (
    <div className="w-full select-none my-4 block md:hidden">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-6 bg-[#667AFA] rounded-full"></div>
          <div>
            <h2 className="text-base font-black text-white tracking-tight flex items-center gap-1.5">
              POPÜLER OYUN PAZARLARI
              <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
            </h2>
          </div>
        </div>

        <button className="text-[11px] font-bold text-[#667AFA] hover:underline flex items-center gap-1">
          Tüm Pazarlar →
        </button>
      </div>

      {/* Grid of Mobile Game Cards */}
      <div className="grid grid-cols-2 gap-2.5">
        {popularGames.map((game) => (
          <div
            key={game.id}
            onClick={() => onSelectCategory && onSelectCategory(game.id)}
            className={`bg-gradient-to-b ${game.bgGradient} border border-white/10 rounded-2xl p-3 flex flex-col justify-between shadow-lg active:scale-[0.98] transition-all cursor-pointer relative overflow-hidden group`}
          >
            {/* Top row badge */}
            <div className="flex items-center justify-between mb-2">
              <PlatformIcon name={game.platform} className="w-6 h-6 rounded-lg shrink-0 shadow" />
              <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full border ${game.badgeColor}`}>
                {game.tag}
              </span>
            </div>

            {/* Title & Count */}
            <div className="mb-2">
              <h3 className="text-white font-black text-xs leading-tight mb-1 group-hover:text-[#667AFA] transition-colors">
                {game.name}
              </h3>
              <p className="text-[10px] text-gray-400 font-medium">
                {game.listingCount}
              </p>
            </div>

            {/* Bottom Row: Discount & Arrow */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <span className={`text-[10px] font-black ${game.accentColor}`}>
                {game.discount}
              </span>
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#667AFA] transition-colors">
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
