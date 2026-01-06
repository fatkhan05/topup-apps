'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceHeader from '../../components/ServiceHeader';
import { Wifi } from 'lucide-react';

export default function DataPackagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceHeader
          icon={Wifi}
          title="Data Package"
          description="Choose the best internet package for your needs"
          breadcrumbs={[
            { label: 'Dashboard', href: '/' },
            { label: 'Data Package' },
          ]}
        />
        <div className="bg-white rounded-xl p-8 shadow-sm text-center">
          <p className="text-gray-600">Data Package page - Coming soon</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

