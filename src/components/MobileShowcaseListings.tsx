import React from 'react';
import { Sparkles, Star, CheckCircle } from 'lucide-react';
import { ShowcaseListing } from '../types';

interface MobileShowcaseListingsProps {
  listings: ShowcaseListing[];
  onSelectListing: (listing: ShowcaseListing) => void;
}

export const MobileShowcaseListings: React.FC<MobileShowcaseListingsProps> = ({
  listings,
  onSelectListing,
}) => {
  // Mobile specific curated items matching screenshot
  const mobileDisplayListings = [
    {
      id: 'mob-1',
      badge: 'VİTRİN İLANI',
      imageUrl: 'https://i.ibb.co/MyjjK8mK/1.png',
      category: 'Capcut',
      title: '✅[%100 PC + MOBİL]✅ Capcut Pro 30 Günlük⭐',
      price: 59.90,
      originalPrice: undefined,
      currency: '₺',
      seller: {
        name: 'ErenShop',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        rating: 5.0,
        isVerified: true,
      },
    },
    {
      id: 'mob-2',
      badge: 'VİTRİN İLANI',
      imageUrl: 'https://i.ibb.co/84sbBBZg/2.png',
      category: 'Discord',
      title: '(07.06 STOK VAR)⭐ Discord +1000 Üye ⭐',
      price: 74.90,
      originalPrice: undefined,
      currency: '₺',
      seller: {
        name: 'VASQUEZ33',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
        rating: 4.9,
        isVerified: true,
      },
    },
    {
      id: 'mob-3',
      badge: 'VİTRİN İLANI',
      imageUrl: 'https://i.ibb.co/93VBQtZD/3.png',
      category: 'CS 2 Boost',
      title: '⚪[900]⚪ ÖVGÜ BOOST ⚪ YEŞİL GÜVEN FAKTÖRÜÜ⚪ 7/24 ',
      price: 69.90,
      originalPrice: undefined,
      currency: '₺',
      seller: {
        name: 'gokhannguneey',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
        rating: 5.0,
        isVerified: true,
      },
    },
    {
      id: 'mob-4',
      badge: 'VİTRİN İLANI',
      imageUrl: 'https://i.ibb.co/ycx0wWw6/4.png',
      category: 'Netflix Hesap',
      title: 'Netflix Premium Kişiye Özel',
      price: 99.90,
      originalPrice: undefined,
      currency: '₺',
      seller: {
        name: 'HandShop',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
        rating: 4.8,
        isVerified: true,
      },
    },
    {
      id: 'mob-5',
      badge: 'VİTRİN İLANI',
      imageUrl: 'https://i.ibb.co/k68gmDfr/5.png',
      category: 'Spotify',
      title: '✅[KENDİ HESABINIZA]✅ Spotify 4 Aylık Premium⭐',
      price: 15.00,
      originalPrice: undefined,
      currency: '₺',
      seller: {
        name: 'sainty',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
        rating: 5.0,
        isVerified: true,
      },
    },
    {
      id: 'mob-6',
      badge: 'VİTRİN İLANI',
      imageUrl: 'https://i.ibb.co/kVjsxDC2/6.png',
      category: 'Instagram',
      title: '⭐İNSTAGRAM 250 TÜRK TAKİPÇİLİ HESAP⭐',
      price: 74.90,
      originalPrice: undefined,
      currency: '₺',
      seller: {
        name: 'VASQUEZ33',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80',
        rating: 4.9,
        isVerified: true,
      },
    },
    {
      id: 'mob-7',
      badge: 'VİTRİN İLANI',
      imageUrl: 'https://i.ibb.co/jPC7dbct/7.png',
      category: 'Steam',
      title: '⭐SİZİN SEÇTİĞİNİZ 5 OYUN + GARANTİ + 7/24 OTO⭐',
      price: 75.00,
      originalPrice: undefined,
      currency: '₺',
      seller: {
        name: 'ValorantAVM',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
        rating: 5.0,
        isVerified: true,
      },
    },
    {
      id: 'mob-8',
      badge: 'VİTRİN İLANI',
      imageUrl: 'https://i.ibb.co/XZzkb7Z7/8.png',
      category: 'Forza Horizon 6',
      title: '[ONLİNE - KENDİ HESABINIZDA] Forza Horizon 6 Pre',
      price: 49.90,
      originalPrice: undefined,
      currency: '₺',
      seller: {
        name: 'GameACT',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
        rating: 5.0,
        isVerified: true,
      },
    },
  ];

  // Merge with filtered listings if search active
  const itemsToRender = listings.length < 4 ? listings : mobileDisplayListings;

  return (
    <div className="w-full select-none my-3">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-2.5 px-1">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-6 bg-emerald-500 rounded-full"></div>
          <h2 className="text-base font-black text-white tracking-tight flex items-center gap-1.5">
            VİTRİN İLANLARI
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
              SÜPER
            </span>
          </h2>
        </div>

        <button className="text-[11px] font-bold text-[#667AFA] hover:underline flex items-center gap-1">
          Tümünü Gör →
        </button>
      </div>

      {/* 2-Column Mobile Grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {itemsToRender.map((item: any) => (
          <div
            key={item.id}
            onClick={() => onSelectListing(item)}
            className="bg-[#1c1f2e] hover:bg-[#23273a] border border-white/10 rounded-xl overflow-hidden flex flex-col justify-between shadow-md active:scale-[0.98] transition-all cursor-pointer relative"
          >
            {/* Top Emerald Green Header Strip */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[9px] font-black uppercase tracking-wider py-1 px-2 text-center flex items-center justify-center gap-1 shadow-sm">
              <Sparkles className="w-2.5 h-2.5 text-yellow-300" />
              <span>VİTRİN İLANI</span>
            </div>

            {/* Product Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#121420]">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Content Area */}
            <div className="p-2.5 flex-1 flex flex-col justify-between">
              <div>
                {/* Seller Label & Info */}
                <div className="mb-1.5">
                  <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block leading-none mb-1">
                    SATICI
                  </span>
                  <div className="flex items-center space-x-1.5">
                    <img
                      src={item.seller.avatar}
                      alt={item.seller.name}
                      className="w-4 h-4 rounded-full border border-white/20 object-cover shrink-0"
                    />
                    <span className="text-gray-200 font-bold text-[11px] truncate max-w-[90px]">
                      {item.seller.name}
                    </span>
                    {item.seller.isVerified && (
                      <CheckCircle className="w-3 h-3 text-[#38bdf8] shrink-0" />
                    )}
                  </div>
                </div>

                {/* Category Tag */}
                <div className="text-[9px] font-black text-indigo-300 uppercase tracking-tight truncate mb-0.5">
                  {item.category}
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-[11px] leading-tight line-clamp-2 min-h-[28px] mb-2">
                  {item.title}
                </h3>
              </div>

              {/* Price Row */}
              <div className="pt-1.5 border-t border-white/5 flex items-baseline justify-between mt-auto">
                <div className="flex items-baseline space-x-1">
                  <span className="text-sm font-black text-[#facc15] tracking-tight">
                    {typeof item.price === 'number' ? item.price.toFixed(2) : item.price} {item.currency || '₺'}
                  </span>

                  {item.originalPrice && (
                    <span className="text-[10px] text-gray-400 line-through font-normal">
                      {item.originalPrice.toFixed(2)} ₺
                    </span>
                  )}
                </div>

                <div className="flex items-center text-yellow-400 text-[10px] font-bold">
                  <Star className="w-3 h-3 fill-current mr-0.5" />
                  <span>{item.seller.rating || '5.0'}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
