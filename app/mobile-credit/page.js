'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceHeader from '../../components/ServiceHeader';
import { PhoneCall } from 'lucide-react';

export default function MobileCreditPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceHeader
          icon={PhoneCall}
          title="Mobile Credit"
          description="Top up mobile credit for all operators"
          breadcrumbs={[
            { label: 'Dashboard', href: '/' },
            { label: 'Mobile Credit' },
          ]}
        />
        <div className="bg-white rounded-xl p-8 shadow-sm text-center">
          <p className="text-gray-600">Mobile Credit page - Coming soon</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

