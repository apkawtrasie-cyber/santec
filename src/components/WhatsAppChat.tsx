'use client';

import { useState, useCallback } from 'react';
import { X, Send } from 'lucide-react';

const PHONE_NUMBER = '41797873477';

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = useCallback(() => {
    if (!message.trim()) return;
    const encoded = encodeURIComponent(message.trim());
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encoded}`, '_blank');
    setMessage('');
    setIsOpen(false);
  }, [message]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      <div
        className={`w-80 overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 ${
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: '#075E54' }}>
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
              <WhatsAppIcon className="h-5 w-5 text-white" />
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#075E54] bg-[#25D366]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Obsługa Klienta</p>
              <p className="text-xs text-white/70">Zazwyczaj odpowiadamy w kilka minut</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1 text-white/70 transition hover:bg-white/10 hover:text-white"
            aria-label="Zamknij czat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="bg-[#ECE5DD] px-4 pb-4 pt-3">
          {/* Bubble hint */}
          <div className="mb-3 max-w-[85%] rounded-xl rounded-tl-none bg-white px-3 py-2 shadow-sm">
            <p className="text-sm text-gray-700">
              Cześć! 👋 W czym mogę pomóc? Napisz wiadomość, a odpiszemy najszybciej jak to możliwe.
            </p>
            <p className="mt-1 text-right text-[10px] text-gray-400">Santec Group</p>
          </div>

          {/* Input */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Napisz wiadomość…"
            rows={3}
            className="w-full resize-none rounded-xl border-0 bg-white px-3 py-2.5 text-sm text-gray-800 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
          />

          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold text-white transition-opacity disabled:opacity-40"
            style={{ backgroundColor: '#25D366' }}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Rozpocznij czat
            <Send className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Floating button */}
      <div className="relative">
        {/* Pulse ring */}
        {!isOpen && (
          <span
            className="absolute inset-0 animate-ping rounded-full opacity-60"
            style={{ backgroundColor: '#25D366' }}
          />
        )}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Zamknij WhatsApp' : 'Otwórz WhatsApp'}
          className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
          style={{ backgroundColor: '#25D366' }}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <WhatsAppIcon className="h-7 w-7 text-white" />
          )}
        </button>
      </div>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
