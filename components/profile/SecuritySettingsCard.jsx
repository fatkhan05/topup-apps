'use client';

import { Lock, CreditCard, Shield, Monitor, Info } from 'lucide-react';
import { useState } from 'react';

export default function SecuritySettingsCard({ profileData }) {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  
  // Extract data from API if available
  const data = profileData?.data?.[0] || {};
  const lastLogin = data.last_login || 'Today at 10:34 AM from Chrome on Windows';
  const activeSessions = data.active_sessions || 2;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2>
      
      <div className="space-y-4">
        {/* Password */}
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <Lock className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Password</p>
              <p className="text-sm text-gray-600">Last changed 2 months ago</p>
            </div>
          </div>
          <a href="#" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
            Change
          </a>
        </div>

        {/* Transaction PIN */}
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Transaction PIN</p>
              <p className="text-sm text-gray-600">4-digit security PIN</p>
            </div>
          </div>
          <a href="#" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
            Change PIN
          </a>
        </div>

        {/* Two-Factor Authentication */}
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Two-Factor Authentication</p>
              <p className="text-sm text-gray-600">Extra security for your account</p>
            </div>
          </div>
          <button
            onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              twoFactorEnabled ? 'bg-purple-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Device & Session Management */}
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <Monitor className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Device & Session Management</p>
              <p className="text-sm text-gray-600">{activeSessions} active session{activeSessions !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <a href="#" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
            Manage
          </a>
        </div>

        {/* Last Login */}
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <Info className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Last Login</p>
              <p className="text-sm text-gray-600">{lastLogin}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

