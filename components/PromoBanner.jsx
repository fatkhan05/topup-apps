'use client';

import { Gift } from 'lucide-react';

export default function PromoBanner() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-6 mt-6 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <Gift className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">
              Get 20% Cashback!
            </h3>
            <p className="text-cyan-50 text-sm">
              On all e-wallet top-ups this week.
            </p>
          </div>
        </div>
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
          Claim Now
        </button>
      </div>
    </div>
  );
}

