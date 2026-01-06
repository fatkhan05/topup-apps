'use client';

import { Headphones } from 'lucide-react';

export default function ContactSupport() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Need help?</h3>
      <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-colors">
        <Headphones className="w-5 h-5 text-gray-600" />
        <span className="font-medium text-gray-700">Contact Support</span>
      </button>
    </div>
  );
}

