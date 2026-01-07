'use client';

import { Edit, KeyRound } from 'lucide-react';

export default function ProfileHeader() {
  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <span className="hover:text-gray-700 cursor-pointer">Dashboard</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Profile</span>
      </nav>

      {/* Header Content */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile</h1>
          <p className="text-gray-600">Manage your personal information and account settings</p>
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium">
            <Edit className="w-4 h-4" />
            Edit Profile
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium">
            <KeyRound className="w-4 h-4" />
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}

