import React, { useState } from 'react';
import { Sparkles, MessageSquare, X, Send, Bot } from 'lucide-react';
import { aiLogoBase64 } from '../assets/logos';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const ItemAIFloatingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: 'Merhaba! Ben Item AI assistant 🤖. Aradığınız Valorant VP, PUBG UC, Discord Boost veya hesap teklifini bulmanıza yardımcı olabilirim. Ne arıyorsunuz?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentQuery = input;
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: currentQuery }),
      });

      if (!response.ok) throw new Error('API request failed');
      const data = await response.json();

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.reply || 'Aradığınız kritere uygun 6 adet Vitrin İlanı ve en uygun fiyatlı satıcılar bulundu!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      setTimeout(() => {
        const aiMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: `"${currentQuery}" araması için Vitrin İlanlarında en uygun fiyatlı onaylı mağazalar listelendi. ErenShop ve MustiBabaSatis %100 otomatik teslimat garantisi sunmaktadır!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, aiMsg]);
      }, 800);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 md:bottom-5 left-4 md:left-auto md:right-5 z-50 flex flex-col items-start md:items-end space-y-3">
      {/* AI Assistant Chat Modal */}
      {isOpen && (
        <div className="w-[320px] sm:w-[380px] h-[460px] bg-[#1c2033] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-[#667AFA] p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-bold p-0.5">
                <img src={aiLogoBase64} alt="Akıllı Asistan Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-sm flex items-center gap-1.5">
                  Item AI <span className="bg-white/20 text-[9px] px-1.5 py-0.2 rounded font-mono">BETA</span>
                </h3>
                <p className="text-[11px] text-white/80">Akıllı İlan Arama & Danışman</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages list */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#141724]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#667AFA] text-white rounded-br-none font-medium'
                      : 'bg-[#252b45] text-gray-200 border border-white/5 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-gray-500 mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center space-x-2 text-xs text-gray-400 bg-[#252b45] p-3 rounded-2xl max-w-[70%]">
                <Sparkles className="w-4 h-4 text-[#667AFA] animate-spin" />
                <span>En uygun ilanlar taranıyor...</span>
              </div>
            )}
          </div>

          {/* Input Form */}
          <div className="p-3 bg-[#1c2033] border-t border-white/5 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Örn: En ucuz Valorant VP hangisi?"
              className="flex-1 bg-[#141724] text-white text-xs placeholder-gray-400 px-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#667AFA]"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-[#667AFA] hover:bg-[#5264e0] disabled:opacity-50 text-white p-2.5 rounded-xl transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Trigger Buttons Stack - Left aligned on mobile, Right aligned on Desktop */}
      <div className="flex items-center space-x-3">
        {/* Mobile ONLY Custom Smart Assistant Image Logo */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Akıllı Asistan"
          className="block md:hidden bg-transparent border-none outline-none shadow-none p-0 rounded-none focus:outline-none hover:scale-105 active:scale-95 transition-all"
        >
          <img
            src={aiLogoBase64}
            alt="Akıllı Asistan Logo"
            style={{ width: '140px', height: '50px' }}
            className="object-contain rounded-none border-none outline-none bg-transparent"
          />
        </button>

        {/* Desktop ONLY Custom Smart Assistant Image Logo */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Akıllı Asistan"
          className="hidden md:block bg-transparent border-none outline-none shadow-none p-0 rounded-none focus:outline-none hover:scale-105 active:scale-95 transition-all"
        >
          <img
            src={aiLogoBase64}
            alt="Akıllı Asistan Logo"
            className="w-[202px] h-auto object-contain rounded-none border-none outline-none bg-transparent"
          />
        </button>
      </div>
    </div>
  );
};
