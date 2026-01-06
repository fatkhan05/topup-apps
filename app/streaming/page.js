'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceHeader from '../../components/ServiceHeader';
import { Monitor } from 'lucide-react';

export default function StreamingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceHeader
          icon={Monitor}
          title="Streaming"
          description="Subscribe to popular streaming platforms"
          breadcrumbs={[
            { label: 'Dashboard', href: '/' },
            { label: 'Streaming' },
          ]}
        />
        <div className="bg-white rounded-xl p-8 shadow-sm text-center">
          <p className="text-gray-600">Streaming page - Coming soon</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

