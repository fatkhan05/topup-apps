'use client';

import { Shield } from 'lucide-react';

export default function TrustBadge({ message = "Secure Transaction SSL encrypted & protected" }) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3">
      <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
      <span className="text-sm text-green-800">{message}</span>
    </div>
  );
}

