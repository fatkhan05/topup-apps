'use client';

import TransactionItem from './TransactionItem';
import { Smartphone, Zap, PhoneCall, Wifi, ArrowDown } from 'lucide-react';

export default function RecentTransactions() {
  const transactions = [
    {
      icon: Smartphone,
      iconColor: 'bg-purple-100 text-purple-600',
      name: 'OVO Top Up',
      date: 'Today, 10:24 AM',
      amount: '50.00',
      type: 'expense',
    },
    {
      icon: Zap,
      iconColor: 'bg-orange-100 text-orange-600',
      name: 'Electricity Token',
      date: 'Yesterday, 3:15 PM',
      amount: '25.00',
      type: 'expense',
    },
    {
      icon: PhoneCall,
      iconColor: 'bg-green-100 text-green-600',
      name: 'Mobile Credit',
      date: 'Dec 28, 2024, 11:30 AM',
      amount: '10.00',
      type: 'expense',
    },
    {
      icon: Wifi,
      iconColor: 'bg-blue-100 text-blue-600',
      name: 'Data Package',
      date: 'Dec 27, 2024, 9:45 AM',
      amount: '15.00',
      type: 'expense',
    },
    {
      icon: ArrowDown,
      iconColor: 'bg-purple-100 text-purple-600',
      name: 'Money Received',
      date: 'Dec 26, 2024, 2:00 PM',
      amount: '200.00',
      type: 'income',
    },
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Recent Transactions</h2>
        <a href="#" className="text-purple-600 font-medium text-sm hover:text-purple-700">
          View All
        </a>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        {transactions.map((transaction, index) => (
          <TransactionItem key={index} {...transaction} />
        ))}
      </div>
    </div>
  );
}

