'use client';

import { useState } from 'react';

export default function PreferencesCard({ profileData }) {
  // Extract data from API if available
  const data = profileData?.data?.[0] || {};
  const [emailNotifications, setEmailNotifications] = useState(data.email_notifications !== false);
  const [pushNotifications, setPushNotifications] = useState(data.push_notifications !== false);
  const [transactionAlerts, setTransactionAlerts] = useState(data.transaction_alerts !== false);
  const [language, setLanguage] = useState(data.language || 'en');
  const [currency, setCurrency] = useState(data.currency || 'IDR');

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Preferences</h2>
      
      <div className="space-y-6">
        {/* Language */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="en">English (US)</option>
            <option value="id">Bahasa Indonesia</option>
          </select>
        </div>

        {/* Currency Display */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Currency Display</label>
          <select 
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="IDR">Indonesian Rupiah (IDR)</option>
            <option value="USD">US Dollar (USD)</option>
          </select>
        </div>

        {/* Notification Preferences */}
        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-700 mb-4">Notification Preferences</h3>
          
          <div className="space-y-4">
            {/* Email Notifications */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Email Notifications</p>
                <p className="text-sm text-gray-600">Receive updates via email</p>
              </div>
              <button
                onClick={() => setEmailNotifications(!emailNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  emailNotifications ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    emailNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Push Notifications */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Push Notifications</p>
                <p className="text-sm text-gray-600">Get instant alerts</p>
              </div>
              <button
                onClick={() => setPushNotifications(!pushNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  pushNotifications ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    pushNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Transaction Alerts */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Transaction Alerts</p>
                <p className="text-sm text-gray-600">Notify me of all transactions</p>
              </div>
              <button
                onClick={() => setTransactionAlerts(!transactionAlerts)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  transactionAlerts ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    transactionAlerts ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

