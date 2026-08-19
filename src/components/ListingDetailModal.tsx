import React from 'react';
import { X, Star, CheckCircle, ShieldCheck, Zap, ShoppingBag, MessageSquare } from 'lucide-react';
import { ShowcaseListing } from '../types';
import { PlatformIcon } from './PlatformIcon';

interface ListingDetailModalProps {
  listing: ShowcaseListing | null;
  onClose: () => void;
}

export const ListingDetailModal: React.FC<ListingDetailModalProps> = ({
  listing,
  onClose,
}) => {
  if (!listing) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#1c2033] border border-white/10 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white bg-black/50 p-1.5 rounded-full backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Media */}
          <div className="relative bg-[#141724] h-64 md:h-full flex items-center justify-center overflow-hidden">
            <img
              src={listing.imageUrl}
              alt={listing.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-md">
              {listing.badge}
            </div>
          </div>

          {/* Right Details */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              {/* Category & Badge */}
              <div className="text-xs text-[#8b5cf6] font-bold uppercase tracking-wider mb-1 flex items-center space-x-1.5">
                <PlatformIcon name={listing.category} className="w-4 h-4" />
                <span>{listing.category}</span>
              </div>

              {/* Title */}
              <h2 className="text-white font-bold text-base md:text-lg leading-snug mb-3">
                {listing.title}
              </h2>

              {/* Seller info */}
              <div className="bg-[#141724] p-3 rounded-xl border border-white/5 flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2.5">
                  <img
                    src={listing.seller.avatar}
                    alt={listing.seller.name}
                    className="w-8 h-8 rounded-full border border-white/20 object-cover"
                  />
                  <div>
                    <div className="flex items-center space-x-1">
                      <span className="text-white font-semibold text-xs">
                        {listing.seller.name}
                      </span>
                      {listing.seller.isVerified && (
                        <CheckCircle className="w-3.5 h-3.5 text-[#38bdf8]" />
                      )}
                    </div>
                    <span className="text-[10px] text-gray-400">
                      {listing.seller.salesCount} Başarılı Satış
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-yellow-400 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{listing.seller.rating}</span>
                </div>
              </div>

              {/* Delivery Features */}
              <div className="space-y-2 mb-6 text-xs text-gray-300">
                <div className="flex items-center space-x-2 text-emerald-400">
                  <Zap className="w-4 h-4 shrink-0" />
                  <span>{listing.deliveryType || 'Otomatik Teslimat'}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-[#5865F2] shrink-0" />
                  <span>itemsatis %100 Havuz Güvence Sistemi</span>
                </div>
              </div>
            </div>

            {/* Price & Buy Action */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400 block">Satış Fiyatı</span>
                <span className="text-yellow-400 font-black text-xl">
                  {listing.price.toFixed(2)} {listing.currency}
                </span>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => alert(`Satıcı ${listing.seller.name} ile mesajlaşma başlatılıyor.`)}
                  className="bg-[#262c44] hover:bg-[#323957] text-gray-200 p-2.5 rounded-xl border border-white/10"
                >
                  <MessageSquare className="w-5 h-5 text-[#667AFA]" />
                </button>
                <button
                  onClick={() => {
                    alert(`${listing.title} sepete eklendi! Satın alıma geçiliyor.`);
                    onClose();
                  }}
                  className="bg-[#667AFA] hover:bg-[#5264e0] text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center space-x-2 shadow-lg shadow-[#667AFA]/30"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Hemen Satın Al</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
