'use client';

import { Wallet, ExternalLink } from 'lucide-react';

export default function AccountDetailsCard({ profileData }) {
  // Extract data from API response
  let data = {};
  
  if (profileData) {
    if (Array.isArray(profileData.data) && profileData.data.length > 0) {
      data = profileData.data[0];
    } else if (profileData.data && typeof profileData.data === 'object' && !Array.isArray(profileData.data)) {
      data = profileData.data;
    } else if (profileData.user_id || profileData.id) {
      data = profileData;
    }
  }

  const hasApiData = profileData && (profileData.data?.length > 0 || profileData.data);
  const userId = data.user_id || data.id || data.userId || data.uid || (hasApiData ? 'N/A' : 'PP-2023-AFD47');
  const accountCreated = data.created_at || data.account_created || data.created || data.registration_date || (hasApiData ? 'N/A' : 'March 18, 2023');
  const wallets = data.wallets || data.wallet || data.payment_methods || [];
  const unverifiedCount = wallets.filter(w => !(w.verified || w.is_verified)).length;

  // Format date if needed
  const formatDate = (dateString) => {
    if (!dateString) return 'March 18, 2023';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Account Details</h2>
        {hasApiData && (
          <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
            ✓ Data from API
          </span>
        )}
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">User ID</label>
          <p className="text-gray-900 font-mono">{userId}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Account Created</label>
          <p className="text-gray-900">{formatDate(accountCreated)}</p>
        </div>

        {wallets.length > 0 && (
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-700">Unverified Wallets</p>
                <p className="text-sm text-gray-600">{unverifiedCount} wallet{unverifiedCount !== 1 ? 's' : ''} unverified</p>
              </div>
              <a href="#" className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
                Manage
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {wallets.slice(0, 3).map((wallet, index) => {
                const isVerified = wallet.verified || wallet.is_verified;
                const colors = [
                  { bg: 'bg-purple-100', border: 'border-purple-300', text: 'text-purple-600', textLabel: 'text-purple-700' },
                  { bg: 'bg-green-100', border: 'border-green-300', text: 'text-green-600', textLabel: 'text-green-700' },
                  { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-600', textLabel: 'text-blue-700' },
                ];
                const color = colors[index % colors.length];
                return (
                  <div
                    key={index}
                    className={`${color.bg} rounded-lg p-4 flex flex-col items-center justify-center border-2 ${isVerified ? 'border-solid' : 'border-dashed'} ${color.border}`}
                  >
                    <Wallet className={`w-8 h-8 ${color.text} mb-2`} />
                    <span className={`text-xs font-medium ${color.textLabel}`}>
                      {isVerified ? 'Verified' : 'Unverified'}
                    </span>
                  </div>
                );
              })}
              {wallets.length === 0 && (
                <>
                  <div className="bg-purple-100 rounded-lg p-4 flex flex-col items-center justify-center border-2 border-dashed border-purple-300">
                    <Wallet className="w-8 h-8 text-purple-600 mb-2" />
                    <span className="text-xs font-medium text-purple-700">Unverified</span>
                  </div>
                  <div className="bg-green-100 rounded-lg p-4 flex flex-col items-center justify-center border-2 border-green-300">
                    <Wallet className="w-8 h-8 text-green-600 mb-2" />
                    <span className="text-xs font-medium text-green-700">Verified</span>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4 flex flex-col items-center justify-center border-2 border-dashed border-blue-300">
                    <Wallet className="w-8 h-8 text-blue-600 mb-2" />
                    <span className="text-xs font-medium text-blue-700">Unverified</span>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

