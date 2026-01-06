'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceHeader from '../../components/ServiceHeader';
import ProviderSelector from '../../components/ProviderSelector';
import InputField from '../../components/InputField';
import AmountSelector from '../../components/AmountSelector';
import TransactionSummaryCard from '../../components/TransactionSummaryCard';
import TrustBadge from '../../components/TrustBadge';
import PromoCodeCard from '../../components/PromoCodeCard';
import ContactSupport from '../../components/ContactSupport';
import { Smartphone, Phone } from 'lucide-react';

// Simple icon components for e-wallet providers
const OVOIcon = () => (
  <span className="text-white font-bold text-lg">OVO</span>
);

const GoPayIcon = () => (
  <span className="text-white font-bold text-lg">G</span>
);

const DANAIcon = () => (
  <span className="text-white font-bold text-lg">D</span>
);

const ShopeePayIcon = () => (
  <span className="text-white font-bold text-lg">S</span>
);

export default function EWalletTopUpPage() {
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [promoCode, setPromoCode] = useState('');

  const providers = [
    { id: 'ovo', name: 'OVO', icon: OVOIcon, bgColor: 'bg-purple-600' },
    { id: 'gopay', name: 'GoPay', icon: GoPayIcon, bgColor: 'bg-green-500' },
    { id: 'dana', name: 'DANA', icon: DANAIcon, bgColor: 'bg-blue-500' },
    { id: 'shopeepay', name: 'ShopeePay', icon: ShopeePayIcon, bgColor: 'bg-orange-500' },
  ];

  const amounts = [
    { value: 10000, label: 'Rp 10K', badge: 'Most Popular' },
    { value: 20000, label: 'Rp 20K', badge: '+5% Bonus' },
    { value: 50000, label: 'Rp 50K', badge: '+10% Bonus' },
    { value: 100000, label: 'Rp 100K', badge: '+15% Bonus' },
    { value: 200000, label: 'Rp 200K', badge: '+20% Bonus' },
    { value: 500000, label: 'Rp 500K', badge: '+25% Bonus' },
  ];

  const formatCurrency = (amount) => {
    if (!amount || amount === 0) return 'Rp 0';
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getTotalAmount = () => {
    const amount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);
    const adminFee = 1000;
    return amount + adminFee;
  };

  const transactionSummaryItems = [
    { label: 'Provider', value: selectedProvider ? providers.find(p => p.id === selectedProvider)?.name || '-' : '-' },
    { label: 'Phone Number', value: phoneNumber || '-' },
    { label: 'Top Up Amount', value: formatCurrency(selectedAmount || (customAmount ? parseInt(customAmount) : 0)) },
    { label: 'Admin Fee', value: 'Rp 1,000' },
  ];

  const isFormValid = selectedProvider && phoneNumber && (selectedAmount || (customAmount && parseInt(customAmount) >= 10000));

  const handlePayment = () => {
    if (isFormValid) {
      // Handle payment logic here
      console.log('Processing payment...');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceHeader
          icon={Smartphone}
          title="E-Wallet Top Up"
          description="Top up your favorite e-wallet instantly and securely"
          breadcrumbs={[
            { label: 'Dashboard', href: '/' },
            { label: 'E-Wallet Top Up' },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Provider Selection */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <ProviderSelector
                providers={providers}
                selectedProvider={selectedProvider}
                onSelect={setSelectedProvider}
              />
            </div>

            {/* Phone Number */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <InputField
                label="Phone Number"
                icon={Phone}
                placeholder="Enter phone number (e.g., 081234567890)"
                value={phoneNumber}
                onChange={setPhoneNumber}
              />
            </div>

            {/* Amount Selection */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <AmountSelector
                amounts={amounts}
                selectedAmount={selectedAmount}
                onSelect={setSelectedAmount}
              />
            </div>

            {/* Custom Amount */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <InputField
                label="Or Enter Custom Amount"
                prefix="Rp"
                placeholder="Enter amount (min. Rp 10,000)"
                value={customAmount}
                onChange={(value) => {
                  setCustomAmount(value);
                  setSelectedAmount(null);
                }}
                type="number"
              />
            </div>

            {/* Promo Code */}
            <PromoCodeCard onApplyCode={setPromoCode} />
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1 space-y-6">
            <TransactionSummaryCard
              items={transactionSummaryItems}
              total={formatCurrency(getTotalAmount())}
              buttonText="Proceed to Payment"
              buttonDisabled={!isFormValid}
              onButtonClick={handlePayment}
              helperText="Transaction processed instantly"
            />

            <TrustBadge />

            <ContactSupport />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

