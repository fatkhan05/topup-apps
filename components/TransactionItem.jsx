'use client';

export default function TransactionItem({ icon: Icon, iconColor, name, date, amount, status = 'Success', type = 'expense' }) {
  const amountColor = type === 'income' ? 'text-green-600' : 'text-gray-900';
  const amountPrefix = type === 'income' ? '+' : '-';

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0">
      <div className="flex items-center space-x-4">
        <div className={`w-10 h-10 ${iconColor} rounded-lg flex items-center justify-center`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className={`font-semibold ${amountColor}`}>
          {amountPrefix}${amount}
        </span>
        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
          {status}
        </span>
      </div>
    </div>
  );
}

