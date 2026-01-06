'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceHeader from '../../components/ServiceHeader';
import { Shield } from 'lucide-react';

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceHeader
          icon={Shield}
          title="Insurance"
          description="Manage and pay your insurance premiums"
          breadcrumbs={[
            { label: 'Dashboard', href: '/' },
            { label: 'Insurance' },
          ]}
        />
        <div className="bg-white rounded-xl p-8 shadow-sm text-center">
          <p className="text-gray-600">Insurance page - Coming soon</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

