'use client';

import { ArrowRight, Shield, Headphones } from 'lucide-react';

export default function ActivitySummaryCard({ profileData }) {
  // Extract data from API response
  let data = {};
  
  if (profileData) {
    if (Array.isArray(profileData.data) && profileData.data.length > 0) {
      data = profileData.data[0];
    } else if (profileData.data && typeof profileData.data === 'object' && !Array.isArray(profileData.data)) {
      data = profileData.data;
    } else if (profileData.total_transactions || profileData.total_topups) {
      data = profileData;
    }
  }

  const hasApiData = profileData && (profileData.data?.length > 0 || profileData.data);
  const totalTransactions = data.total_transactions || data.transactions_count || data.transaction_count || (hasApiData ? 0 : 247);
  const totalTopUps = data.total_topups || data.topups_amount || data.topup_total || data.total_topup || (hasApiData ? 0 : 'Rp 8.5M');
  const monthlySpending = data.monthly_spending || data.spending_amount || data.month_spending || (hasApiData ? 0 : 'Rp 2.1M');

  // Format currency
  const formatCurrency = (value) => {
    if (typeof value === 'number') {
      if (value === 0) return 'Rp 0';
      if (value >= 1000000) {
        return `Rp ${(value / 1000000).toFixed(1)}M`;
      } else if (value >= 1000) {
        return `Rp ${(value / 1000).toFixed(1)}K`;
      }
      return `Rp ${value.toLocaleString('id-ID')}`;
    }
    // If it's already a string (like "Rp 8.5M"), return as is
    if (typeof value === 'string' && value.trim() !== '') {
      return value;
    }
    // If no data from API, return fallback
    return hasApiData ? 'Rp 0' : value;
  };

  return (
    <div className="space-y-6">
      {/* Activity Summary */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl shadow-sm p-6 text-white">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Activity Summary</h2>
          {hasApiData && (
            <span className="text-xs px-2 py-1 bg-white/20 text-white rounded-full font-medium">
              ✓ API Data
            </span>
          )}
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm text-white/80 mb-1">Total Transactions</p>
            <p className="text-2xl font-bold">{totalTransactions}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm text-white/80 mb-1">Total Top-Ups</p>
            <p className="text-2xl font-bold">{formatCurrency(totalTopUps)}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm text-white/80 mb-1">Monthly Spending</p>
            <p className="text-2xl font-bold">{formatCurrency(monthlySpending)}</p>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          View Transaction History
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Secure Account */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Secure Account</h3>
            <p className="text-sm text-gray-600 mb-1">
              Your data is encrypted and protected with industry standard security resources.
            </p>
            <p className="text-xs text-green-600 font-medium">AES Encrypted</p>
          </div>
        </div>
      </div>

      {/* Need Help */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
        <p className="text-sm text-gray-600 mb-4">
          Our support team is here to assist you 24/7.
        </p>
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
          <Headphones className="w-4 h-4" />
          Contact Support
        </button>
      </div>
    </div>
  );
}

