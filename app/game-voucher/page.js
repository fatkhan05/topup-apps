'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceHeader from '../../components/ServiceHeader';
import { Gamepad2 } from 'lucide-react';

export default function GameVoucherPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceHeader
          icon={Gamepad2}
          title="Game Voucher"
          description="Top up your favorite games instantly"
          breadcrumbs={[
            { label: 'Dashboard', href: '/' },
            { label: 'Game Voucher' },
          ]}
        />
        <div className="bg-white rounded-xl p-8 shadow-sm text-center">
          <p className="text-gray-600">Game Voucher page - Coming soon</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

