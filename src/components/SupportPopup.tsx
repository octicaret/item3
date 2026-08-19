import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { mainLogoBase64 } from '../assets/logos';

export const SupportPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResolved, setIsResolved] = useState(false);

  useEffect(() => {
    // Check if it was previously resolved
    const resolved = localStorage.getItem('support_popup_resolved');
    if (resolved === 'true') {
      setIsResolved(true);
      return;
    }

    // Set initial timer
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    // Listen for the chat being opened by other means
    const handleChatOpened = () => {
      localStorage.setItem('support_popup_resolved', 'true');
      setIsResolved(true);
      setIsOpen(false);
    };
    window.addEventListener('chatWasOpened', handleChatOpened);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('chatWasOpened', handleChatOpened);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // If closed without clicking the main button, re-open in 5 seconds
    setTimeout(() => {
      const currentlyResolved = localStorage.getItem('support_popup_resolved');
      if (currentlyResolved !== 'true') {
        setIsOpen(true);
      }
    }, 5000);
  };

  const handleConnect = () => {
    // Mark as resolved
    localStorage.setItem('support_popup_resolved', 'true');
    setIsResolved(true);
    setIsOpen(false);
    
    // Trigger the chat widget to open
    window.dispatchEvent(new CustomEvent('openChat'));
  };

  if (isResolved || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#111017] rounded-2xl w-full max-w-[400px] border border-[#2a2c3a] shadow-2xl relative overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white bg-black/30 hover:bg-black/50 rounded-full p-1.5 transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center p-8 text-center">
          {/* Site Logo */}
          <img 
            src={mainLogoBase64} 
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/logo.png';
            }}
            alt="Site Logo" 
            className="h-12 w-auto object-contain mb-6 drop-shadow-md"
          />

          {/* Heading */}
          <h2 className="text-2xl font-black text-white mb-3">
            item satıştan mesajınız var!
          </h2>

          {/* Body Text */}
          <p className="text-gray-300 text-sm font-medium mb-8 leading-relaxed px-2">
            Lütfen Devir İşlemlerini Tamamlamak İçin Canlı Desteğe Bağlanın.
          </p>

          {/* Call to Action Button */}
          <button
            onClick={handleConnect}
            className="w-full bg-[#00e676] hover:bg-[#00c853] text-[#111017] font-bold text-base py-3.5 px-6 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,230,118,0.3)] hover:shadow-[0_0_25px_rgba(0,230,118,0.5)] transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Canlı Desteğe Bağlan
          </button>
        </div>

      </div>
    </div>
  );
};
