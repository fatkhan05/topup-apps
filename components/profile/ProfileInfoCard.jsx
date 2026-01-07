'use client';

import { CheckCircle2, Upload, Crown } from 'lucide-react';

export default function ProfileInfoCard({ profileData }) {
  // Extract data from API response
  // Handle different possible data structures
  let data = {};
  
  if (profileData) {
    // If data is an array
    if (Array.isArray(profileData.data) && profileData.data.length > 0) {
      data = profileData.data[0];
    } 
    // If data is an object directly
    else if (profileData.data && typeof profileData.data === 'object' && !Array.isArray(profileData.data)) {
      data = profileData.data;
    }
    // If profileData itself is the data object
    else if (profileData.name || profileData.email) {
      data = profileData;
    }
  }

  // Extract fields with priority: API data > fallback
  const hasApiData = profileData && (profileData.data?.length > 0 || profileData.data);
  const fullName = data.name || data.full_name || data.username || (hasApiData ? '' : 'Sarah Johnson');
  const email = data.email || data.email_address || (hasApiData ? '' : 'sarah.johnson@gmail.com');
  const phone = data.phone || data.phone_number || data.mobile || data.telp || (hasApiData ? '' : '+62 812-3188-7900');
  const dateOfBirth = data.date_of_birth || data.dob || data.birth_date || (hasApiData ? '' : '18/08/1998');
  const address = data.address || data.alamat || data.full_address || (hasApiData ? '' : 'Jl. Sudirman No. 123, Jakarta Selatan, DKI Jakarta 12730');
  const memberSince = data.member_since || data.created_at || data.join_date || data.registered_at || (hasApiData ? '' : 'March 2023');
  const isVerified = data.verified !== undefined ? data.verified : (data.is_verified !== undefined ? data.is_verified : (hasApiData ? false : true));
  const membership = data.membership || data.membership_type || data.plan || data.tier || (hasApiData ? '' : 'Premium Member');

  // Get initials from name
  const getInitials = (name) => {
    if (!name) return 'SJ';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
        {hasApiData && (
          <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
            ✓ Data from API
          </span>
        )}
        {!hasApiData && profileData && (
          <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">
            ⚠ Using fallback data
          </span>
        )}
      </div>
      
      {/* Avatar Section */}
      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
            {getInitials(fullName)}
          </div>
          <button className="absolute bottom-0 right-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors">
            <Upload className="w-3 h-3" />
          </button>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold text-gray-900">{fullName}</h3>
            {membership && (
              <span className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-xs font-medium text-white">
                <Crown className="w-3 h-3" />
                {membership}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            {isVerified && <CheckCircle2 className="w-4 h-4 text-green-500" />}
            {isVerified && <span>Verified Account</span>}
            {isVerified && memberSince && <span className="mx-2">•</span>}
            {memberSince && <span>Member since {memberSince}</span>}
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value={fullName}
            readOnly
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <div className="relative">
            <input
              type="email"
              value={email}
              readOnly
              className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            {isVerified && (
              <CheckCircle2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <div className="relative">
            <input
              type="tel"
              value={phone}
              readOnly
              className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            {isVerified && (
              <CheckCircle2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
          <input
            type="text"
            value={dateOfBirth}
            readOnly
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
          <textarea
            value={address}
            readOnly
            rows={3}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
          />
        </div>
      </div>
    </div>
  );
}

