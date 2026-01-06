'use client';

import ServiceCard from './ServiceCard';
import { Smartphone, Zap, PhoneCall, Wifi, Gamepad2, Monitor, FileText, Shield } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      icon: Smartphone,
      iconColor: 'bg-purple-100 text-purple-600',
      title: 'E-Wallet',
      description: 'Top up OVO, GoPay, DANA & more.',
      linkText: 'Top Up Now',
      href: '/ewallet-topup',
    },
    {
      icon: Zap,
      iconColor: 'bg-orange-100 text-orange-600',
      title: 'Electricity',
      description: 'Buy prepaid electricity tokens.',
      linkText: 'Buy Token',
      href: '/electricity',
    },
    {
      icon: PhoneCall,
      iconColor: 'bg-green-100 text-green-600',
      title: 'Mobile Credit',
      description: 'Buy credit for all operators.',
      linkText: 'Buy Credit',
      href: '/mobile-credit',
    },
    {
      icon: Wifi,
      iconColor: 'bg-blue-100 text-blue-600',
      title: 'Data Package',
      description: 'Buy data packages for all operators.',
      linkText: 'Buy Package',
      href: '/data-package',
    },
    {
      icon: Gamepad2,
      iconColor: 'bg-pink-100 text-pink-600',
      title: 'Game Voucher',
      description: 'Mobile Legends, PUBG & more.',
      linkText: 'Buy Voucher',
      href: '/game-voucher',
    },
    {
      icon: Monitor,
      iconColor: 'bg-red-100 text-red-600',
      title: 'Streaming',
      description: 'Netflix, Spotify, Disney+',
      linkText: 'Subscribe',
      href: '/streaming',
    },
    {
      icon: FileText,
      iconColor: 'bg-blue-100 text-blue-600',
      title: 'Bill Payment',
      description: 'Pay utility bills easily.',
      linkText: 'Pay Bill',
      href: '/bill-payment',
    },
    {
      icon: Shield,
      iconColor: 'bg-green-100 text-green-600',
      title: 'Insurance',
      description: 'Health & life insurance.',
      linkText: 'Get Protected',
      href: '/insurance',
    },
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Services</h2>
        <a href="#" className="text-purple-600 font-medium text-sm hover:text-purple-700">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

