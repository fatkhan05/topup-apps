'use client';

import { Zap } from 'lucide-react';

export default function TransactionSummaryCard({ 
  items = [], 
  total, 
  buttonText = 'Proceed to Payment',
  buttonDisabled = false,
  onButtonClick,
  helperText 
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Transaction Summary</h3>
      
      <div className="space-y-4 mb-6">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-600">{item.label}:</span>
            <span className={`font-medium ${
              item.value === '-' || item.value === 'Rp 0' 
                ? 'text-gray-400' 
                : 'text-gray-900'
            }`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-900">Total Payment:</span>
          <span className="text-2xl font-bold text-purple-600">{total}</span>
        </div>
      </div>

      <button
        onClick={onButtonClick}
        disabled={buttonDisabled}
        className={`w-full py-3 rounded-xl font-semibold text-white transition-colors ${
          buttonDisabled
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
        }`}
      >
        {buttonText}
      </button>

      {helperText && (
        <div className="flex items-center justify-center space-x-2 mt-3 text-sm text-gray-500">
          <Zap className="w-4 h-4" />
          <span>{helperText}</span>
        </div>
      )}
    </div>
  );
}

