import React from 'react';
import { Home, Store, LayoutGrid, Headphones, Wallet } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  return (
    <div className="flex md:hidden fixed bottom-0 left-0 w-full h-[68px] bg-[#212332] border-t border-white/5 z-40 items-center justify-around px-2 text-gray-400">
      <button className="flex flex-col items-center justify-center space-y-1.5 w-16 h-full text-white">
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-medium">Ana Sayfa</span>
      </button>
      
      <button className="flex flex-col items-center justify-center space-y-1.5 w-16 h-full hover:text-white transition-colors">
        <Store className="w-5 h-5" />
        <span className="text-[10px] font-medium">İlan Pazarı</span>
      </button>

      <button className="flex flex-col items-center justify-center space-y-1.5 w-16 h-full hover:text-white transition-colors">
        <LayoutGrid className="w-5 h-5" />
        <span className="text-[10px] font-medium">Kategoriler</span>
      </button>

      <button className="flex flex-col items-center justify-center space-y-1.5 w-16 h-full hover:text-white transition-colors">
        <Headphones className="w-5 h-5" />
        <span className="text-[10px] font-medium">Destek</span>
      </button>

      <button className="flex flex-col items-center justify-center space-y-1.5 w-16 h-full hover:text-white transition-colors">
        <Wallet className="w-5 h-5" />
        <span className="text-[10px] font-medium">Cüzdan</span>
      </button>
    </div>
  );
};
