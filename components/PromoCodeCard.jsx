'use client';

import { Tag } from 'lucide-react';
import { useState } from 'react';

export default function PromoCodeCard({ onApplyCode }) {
  const [code, setCode] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
      {!isExpanded ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Tag className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">
              Have a promo code? Enter your code to get instant discount
            </span>
          </div>
          <button
            onClick={() => setIsExpanded(true)}
            className="text-purple-600 font-medium text-sm hover:text-purple-700 transition-colors"
          >
            Apply Code
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Tag className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">Enter promo code</span>
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter code"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <button
              onClick={() => {
                onApplyCode(code);
                setIsExpanded(false);
              }}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Apply
            </button>
            <button
              onClick={() => {
                setIsExpanded(false);
                setCode('');
              }}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

