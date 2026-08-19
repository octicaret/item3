import React, { useState } from 'react';
import { X, Plus, Upload, ShieldCheck, Zap } from 'lucide-react';

interface AddListingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddListing: (newListing: any) => void;
}

export const AddListingModal: React.FC<AddListingModalProps> = ({
  isOpen,
  onClose,
  onAddListing,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Valorant');
  const [price, setPrice] = useState('');
  const [deliveryType, setDeliveryType] = useState('Otomatik Teslimat');
  const [sellerName, setSellerName] = useState('BenimMagazam');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !price) return;

    onAddListing({
      id: `custom-${Date.now()}`,
      title,
      category,
      price: parseFloat(price) || 99.9,
      currency: 'TL',
      imageUrl:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
      seller: {
        name: sellerName || 'YeniSatıcı',
        avatar:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
        rating: 5.0,
        salesCount: 1,
        isVerified: true,
      },
      badge: 'VİTRİN İLANI',
      deliveryType,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#1c2033] border border-white/10 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#667AFA] flex items-center justify-center text-white font-bold shadow-lg shadow-[#667AFA]/30">
            <Plus className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Yeni İlan Oluştur</h3>
            <p className="text-gray-400 text-xs">Pazaryerinde ürün veya hizmetinizi yayınlayın</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              İlan Başlığı
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Örn: Valorant Yağmacı Vandal Hesap Hızlı Teslim"
              className="w-full bg-[#141724] text-white text-xs px-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#8b5cf6]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Kategori
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#141724] text-white text-xs px-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#8b5cf6]"
              >
                <option value="Valorant">Valorant</option>
                <option value="PUBG Mobile">PUBG Mobile</option>
                <option value="Discord">Discord Nitro/Boost</option>
                <option value="CS2">Counter Strike 2</option>
                <option value="Roblox">Roblox Robux</option>
                <option value="Steam">Steam</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Fiyat (TL)
              </label>
              <input
                type="number"
                step="0.01"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="149.90"
                className="w-full bg-[#141724] text-white text-xs px-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#8b5cf6]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Teslimat Türü
              </label>
              <select
                value={deliveryType}
                onChange={(e) => setDeliveryType(e.target.value)}
                className="w-full bg-[#141724] text-white text-xs px-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#8b5cf6]"
              >
                <option value="Otomatik Teslimat">Otomatik Teslimat</option>
                <option value="Anında İşlem">Anında İşlem</option>
                <option value="7/24 Canlı Destek">7/24 Canlı Destek</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Mağaza / Kullanıcı Adı
              </label>
              <input
                type="text"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                placeholder="Mağaza Adı"
                className="w-full bg-[#141724] text-white text-xs px-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#8b5cf6]"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#667AFA] hover:bg-[#5264e0] text-white font-bold py-3 rounded-xl text-xs transition-all shadow-lg shadow-[#667AFA]/25"
            >
              İlanı Hemen Yayınla
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
