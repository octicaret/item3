import React from 'react';
import { Sword, Smartphone, Gamepad2, Zap } from 'lucide-react';
import { mainCategoriesData } from '../data/mockData';
import { PlatformIcon } from './PlatformIcon';

interface CategoryGridProps {
  onSelectCategory: (catId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const getCategoryIcon = (catName: string, iconName: string) => {
    if (
      catName.includes('Valorant') ||
      catName.includes('Roblox') ||
      catName.includes('League')
    ) {
      return <PlatformIcon name={catName} className="w-6 h-6" />;
    }

    switch (iconName) {
      case 'Sword':
        return <Sword className="w-6 h-6 text-amber-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-emerald-400" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-6 h-6 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#5865F2]" />;
      default:
        return <PlatformIcon name={catName} className="w-6 h-6" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 my-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {mainCategoriesData.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="relative group bg-[#1c2033]/90 hover:bg-[#252b45] border border-white/5 hover:border-[#8b5cf6]/50 rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-[#8b5cf6]/10"
          >
            {/* Badge if exists */}
            {cat.badge && (
              <span
                className={`absolute -top-2 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider text-white shadow-sm ${
                  cat.badge === 'HOT'
                    ? 'bg-gradient-to-r from-red-500 to-rose-600'
                    : 'bg-gradient-to-r from-[#5865F2] to-indigo-600'
                }`}
              >
                {cat.badge}
              </span>
            )}

            {/* Icon Container */}
            <div className="w-12 h-12 rounded-xl bg-[#141724] group-hover:bg-[#8b5cf6]/20 flex items-center justify-center mb-2.5 transition-colors border border-white/5">
              {getCategoryIcon(cat.name, cat.iconName)}
            </div>

            {/* Name */}
            <span className="text-white font-semibold text-xs group-hover:text-[#8b5cf6] transition-colors line-clamp-1">
              {cat.name}
            </span>

            {/* Sub text count */}
            {cat.count && (
              <span className="text-[10px] text-gray-400 mt-1 font-medium">
                {cat.count} İlan
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
