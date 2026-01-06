'use client';

import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import QuickActions from './QuickActions';

export default function BalanceCard({ balance = "12,847.50", growth = "+12.5% from last month" }) {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl p-6 pb-8 shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-purple-100 text-sm mb-1">Total Balance</p>
          <h2 className="text-4xl font-bold text-white mb-2">
            ${isHidden ? '••••••' : balance}
          </h2>
          <div className="flex items-center space-x-1 text-purple-100 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>{growth}</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsHidden(!isHidden)}
            className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
          >
            {isHidden ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            <span className="hidden sm:inline">Hide Balance</span>
          </button>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors">
            + Add Money
          </button>
        </div>
      </div>
      <QuickActions />
    </div>
  );
}
