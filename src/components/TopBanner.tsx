import React from 'react';

export const TopBanner: React.FC = () => {
  return (
    <div className="w-full bg-[#0b0d14] overflow-hidden select-none block border-b border-white/10">
      {/* Desktop Top Banner */}
      <img
        src="https://i.ibb.co/Rpb1zCBv/Whats-App-Image-2026-08-04-at-21-42-29.jpg"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = '/images/top_banner.jpg';
        }}
        alt="Top Campaign Banner"
        className="hidden md:block w-full h-auto max-h-52 object-cover shadow-md"
      />

      {/* Mobile-Only Top Banner */}
      <img
        src="https://i.ibb.co/jZ8Dxm3v/Whats-App-Image-2026-08-05-at-11-20-05.jpg"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = '/images/top_banner.jpg';
        }}
        alt="Mobile Campaign Banner"
        className="block md:hidden w-full h-auto max-h-36 object-cover shadow-md"
      />
    </div>
  );
};

