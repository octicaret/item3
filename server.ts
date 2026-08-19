import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

// Memory store for user chat messages
const userChatMessages = new Map();
let telegramLastUpdateId = 0;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Telegram Chat Endpoints
  app.post('/api/chat', async (req, res) => {
    const { userId, message } = req.body;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    if (!token || !chatId) {
      return res.status(500).json({ error: 'Telegram configuration is missing' });
    }
    
    if (!userId || !message) {
      return res.status(400).json({ error: 'userId and message are required' });
    }
    
    const text = `#${userId}: ${message}`;
    
    try {
      const resp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text })
      });
      const data = await resp.json();
      return res.json(data);
    } catch (error) {
      console.error('Telegram Send Error:', error);
      return res.status(500).json({ error: 'Failed to send message to Telegram' });
    }
  });

  app.get('/api/chat', async (req, res) => {
    const { userId } = req.query;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    
    if (!token) {
      return res.status(500).json({ error: 'Telegram configuration is missing' });
    }
    
    if (!userId) {
      return res.status(400).json({ error: 'userId is required' });
    }
    
    try {
      const resp = await fetch(`https://api.telegram.org/bot${token}/getUpdates?offset=${telegramLastUpdateId + 1}&timeout=2`);
      const data = await resp.json();
      
      if (data.ok && data.result.length > 0) {
        data.result.forEach((update: any) => {
          telegramLastUpdateId = Math.max(telegramLastUpdateId, update.update_id);
          const msg = update.message;
          
          if (msg && msg.text) {
            let replyUserId = null;
            let replyText = null;
            
            if (msg.reply_to_message && msg.reply_to_message.text) {
              const originalText = msg.reply_to_message.text;
              const match = originalText.match(/^#([^:]+):/);
              if (match) {
                replyUserId = match[1];
                replyText = msg.text;
              }
            } 
            
            if (!replyUserId) {
              const manualMatch = msg.text.match(/^#([^:]+):\s*(.*)/);
              if (manualMatch) {
                replyUserId = manualMatch[1];
                replyText = manualMatch[2];
              }
            }
            
            if (replyUserId && replyText) {
              if (!userChatMessages.has(replyUserId)) {
                userChatMessages.set(replyUserId, []);
              }
              userChatMessages.get(replyUserId).push({
                text: replyText,
                sender: 'admin',
                timestamp: new Date().toISOString()
              });
            }
          }
        });
      }
      
      const newMessages = userChatMessages.get(userId) || [];
      userChatMessages.set(userId, []);
      
      return res.json({ messages: newMessages });
    } catch (error) {
      console.error('Telegram Get Error:', error);
      return res.status(500).json({ error: 'Failed to fetch messages from Telegram' });
    }
  });

  // Gemini API client
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

  // AI Search Endpoint for Item AI Assistant
  app.post('/api/ai-search', async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
      }

      if (!ai) {
        return res.json({
          reply: `"${prompt}" talebiniz için Vitrin İlanlarında en uygun fiyatlı onaylı mağazalar bulundu! Discord 14X Boost 149,90 TL, CS2 Rozetli Hesap 149,90 TL, Roblox 100 Robux 29,90 TL.`,
        });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: `Sen ItemSatış oyuncu pazarının resmi yapay zeka asistanı Item AI sin. Kullanıcının şu sorusuna veya arama isteğine çok samimi, yardımsever ve kısa (maksimum 2-3 cümle) yanıt ver. Valorant VP, PUBG UC, Discord Boost, CS2 ve Roblox ilanlarından bahset: "${prompt}"`,
              },
            ],
          },
        ],
      });

      return res.json({ reply: response.text });
    } catch (error: any) {
      console.error('AI Search Error:', error?.message);
      return res.json({
        reply:
          'Aradığınız ilan kriterlerine göre ErenShop ve MustiBabaSatis mağazalarında %100 otomatik teslimatlı indirimli ürünler listelendi!',
      });
    }
  });

  // Vite middleware for development vs static in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
