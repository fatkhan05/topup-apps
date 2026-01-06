'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceHeader from '../../components/ServiceHeader';
import { FileText } from 'lucide-react';

export default function BillPaymentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceHeader
          icon={FileText}
          title="Bill Payment"
          description="Pay your bills quickly and securely"
          breadcrumbs={[
            { label: 'Dashboard', href: '/' },
            { label: 'Bill Payment' },
          ]}
        />
        <div className="bg-white rounded-xl p-8 shadow-sm text-center">
          <p className="text-gray-600">Bill Payment page - Coming soon</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

