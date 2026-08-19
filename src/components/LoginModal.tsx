import React, { useState } from 'react';
import { X, User, Lock, Mail, ArrowRight } from 'lucide-react';
import { mainLogoBase64 } from '../assets/logos';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(isRegister ? 'Kayıt başarılı! Hoş geldiniz.' : 'Giriş başarılı!');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#1c2033] border border-white/10 rounded-2xl max-w-sm w-full p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <img
            src={mainLogoBase64}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/logo.png';
            }}
            alt="Logo"
            className="h-14 w-auto object-contain mx-auto mb-3 bg-transparent border-none drop-shadow-md"
          />

          <h3 className="text-white font-black text-xl">
            {isRegister ? 'Üye Ol' : 'Giriş Yap'}
          </h3>
          <p className="text-gray-400 text-xs mt-1">
            itemsatis avantajlar dünyasına erişmek için giriş yapın
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">E-Posta veya Kullanıcı Adı</label>
            <div className="relative flex items-center">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3" />
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ornek@mail.com"
                className="w-full bg-[#141724] text-white text-xs pl-9 pr-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#667AFA]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">Şifre</label>
            <div className="relative flex items-center">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#141724] text-white text-xs pl-9 pr-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#667AFA]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#667AFA] hover:bg-[#5264e0] text-white font-bold py-3 rounded-xl text-xs transition-all shadow-lg shadow-[#667AFA]/25 flex items-center justify-center space-x-1.5"
          >
            <span>{isRegister ? 'Hesap Oluştur' : 'Giriş Yap'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Toggle */}
        <div className="mt-6 text-center text-xs text-gray-400 pt-4 border-t border-white/5">
          {isRegister ? (
            <p>
              Zaten hesabınız var mı?{' '}
              <button
                onClick={() => setIsRegister(false)}
                className="text-[#8b5cf6] font-semibold hover:underline"
              >
                Giriş Yap
              </button>
            </p>
          ) : (
            <p>
              Hesabınız yok mu?{' '}
              <button
                onClick={() => setIsRegister(true)}
                className="text-[#8b5cf6] font-semibold hover:underline"
              >
                Hemen Üye Ol
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
