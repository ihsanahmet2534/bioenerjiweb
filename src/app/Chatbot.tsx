"use client";
import React, { useState, useRef, useEffect } from 'react';

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Merhaba, ben buradayım! Sana nasıl yardımcı olabilirim?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { from: 'bot', text: data.reply }]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: 'Üzgünüm, şu anda yardımcı olamıyorum. Lütfen daha sonra tekrar dene.' },
      ]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}>
      {open ? (
        <div style={{ width: 320, height: 420, background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ background: '#4f46e5', color: '#fff', padding: '16px', fontWeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Psikolog Asistan</span>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 20, cursor: 'pointer' }}>&times;</button>
          </div>
          <div style={{ flex: 1, padding: '16px', overflowY: 'auto', background: '#f9fafb' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ marginBottom: 12, textAlign: msg.from === 'user' ? 'right' : 'left' }}>
                <span style={{
                  display: 'inline-block',
                  background: msg.from === 'user' ? '#4f46e5' : '#e0e7ff',
                  color: msg.from === 'user' ? '#fff' : '#1e293b',
                  borderRadius: 12,
                  padding: '8px 14px',
                  maxWidth: 220,
                  wordBreak: 'break-word',
                }}>
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div style={{ padding: 12, borderTop: '1px solid #e5e7eb', background: '#fff', display: 'flex', gap: 8 }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Mesajınızı yazın..."
              style={{ flex: 1, borderRadius: 8, border: '1px solid #e5e7eb', padding: '8px 12px', outline: 'none' }}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              style={{ background: '#4f46e5', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontWeight: 600, cursor: 'pointer' }}
            >
              Gönder
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          style={{ background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '50%', width: 64, height: 64, boxShadow: '0 4px 16px rgba(0,0,0,0.15)', fontSize: 32, cursor: 'pointer' }}
          aria-label="Chatbotu Aç"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default Chatbot; 