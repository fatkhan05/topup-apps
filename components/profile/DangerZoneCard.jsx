'use client';

import { Trash2 } from 'lucide-react';

export default function DangerZoneCard() {
  return (
    <div className="bg-white border-2 border-red-200 rounded-xl p-6">
      <h3 className="font-semibold text-gray-900 mb-2">Danger Zone</h3>
      <p className="text-sm text-gray-600 mb-4">
        Permanently delete your account and all data.
      </p>
      <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
        <Trash2 className="w-4 h-4" />
        Delete Account
      </button>
    </div>
  );
}

