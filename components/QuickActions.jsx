'use client';

import { ArrowUp, Send, QrCode, RefreshCw } from 'lucide-react';

export default function QuickActions() {
  const actions = [
    { icon: ArrowUp, label: 'Top Up' },
    { icon: Send, label: 'Send' },
    { icon: QrCode, label: 'Scan' },
    { icon: RefreshCw, label: 'History' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <button
            key={index}
            className="glass-action-btn flex flex-col items-center justify-center p-4 rounded-xl cursor-pointer transition-all hover:-translate-y-1 active:scale-95"
            style={{
              background: 'rgba(255, 255, 255, 0.18)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)';
            }}
          >
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-2"
              style={{
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-white">{action.label}</span>
          </button>
        );
      })}
    </div>
  );
}
