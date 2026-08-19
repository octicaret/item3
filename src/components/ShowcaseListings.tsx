import React, { useState } from 'react';
import { Star, CheckCircle, ShoppingCart, Eye, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { ShowcaseListing } from '../types';
import { PlatformIcon } from './PlatformIcon';

interface ShowcaseListingsProps {
  listings: ShowcaseListing[];
  onSelectListing: (listing: ShowcaseListing) => void;
}

export const ShowcaseListings: React.FC<ShowcaseListingsProps> = ({
  listings,
  onSelectListing,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-8 bg-emerald-500 rounded-full"></div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              VİTRİN İLANLARI
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                ÖNE ÇIKANLAR
              </span>
            </h2>
            <p className="text-gray-400 text-xs mt-0.5">
              En güvenilir mağazalardan onaylı ve hızlı teslimatlı ilanlar
            </p>
          </div>
        </div>

        <button className="text-xs font-semibold text-[#667AFA] hover:text-[#8b9eff] flex items-center space-x-1 group">
          <span>Tüm İlanları Gör ({listings.length})</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {listings.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectListing(item)}
            className="group bg-[#1c2033] hover:bg-[#232840] border border-white/5 hover:border-[#667AFA]/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#667AFA]/15 cursor-pointer relative"
          >
            {/* Top Showcase Badge (Green Header Bar) */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[10px] font-black uppercase tracking-wider py-1 px-3 text-center flex items-center justify-center space-x-1">
              <Sparkles className="w-3 h-3 text-yellow-300" />
              <span>{item.badge}</span>
            </div>

            {/* Image Banner */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#141724]">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Platform icon badge */}
              <span className="absolute top-2 left-2 bg-black/75 backdrop-blur-md text-white border border-white/10 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-md">
                <PlatformIcon name={item.category} className="w-3 h-3" />
                <span>{item.category}</span>
              </span>

              {item.isHot && (
                <span className="absolute top-2 right-2 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                  HOT
                </span>
              )}

              {item.deliveryType && (
                <span className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-[9px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Zap className="w-2.5 h-2.5" />
                  {item.deliveryType}
                </span>
              )}
            </div>

            {/* Card Content */}
            <div className="p-3.5 flex-1 flex flex-col justify-between">
              <div>
                {/* Seller Info */}
                <div className="flex items-center space-x-2 mb-2">
                  <img
                    src={item.seller.avatar}
                    alt={item.seller.name}
                    className="w-5 h-5 rounded-full border border-white/20 object-cover"
                  />
                  <span className="text-gray-300 font-semibold text-xs truncate max-w-[90px]">
                    {item.seller.name}
                  </span>
                  {item.seller.isVerified && (
                    <CheckCircle className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
                  )}

                  {/* Rating */}
                  <div className="ml-auto flex items-center space-x-0.5 text-yellow-400 text-[10px]">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="font-bold">{item.seller.rating}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-medium text-xs leading-snug line-clamp-2 group-hover:text-[#667AFA] transition-colors mb-2">
                  {item.title}
                </h3>
              </div>

              {/* Price & Action */}
              <div className="pt-2 border-t border-white/5 flex items-center justify-between mt-2">
                <div>
                  <div className="text-[10px] text-gray-400 font-medium">Fiyat</div>
                  <div className="text-yellow-400 font-extrabold text-sm tracking-tight">
                    {item.price.toFixed(2)} <span className="text-xs">{item.currency}</span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectListing(item);
                  }}
                  className="bg-[#667AFA] hover:bg-[#5264e0] text-white p-2 rounded-xl transition-colors shadow-md shadow-[#667AFA]/20 group/btn"
                >
                  <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
