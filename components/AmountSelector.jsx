'use client';

export default function AmountSelector({ amounts = [], selectedAmount, onSelect }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Top Up Amount</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {amounts.map((amount) => {
          const isSelected = selectedAmount === amount.value;
          
          return (
            <button
              key={amount.value}
              onClick={() => onSelect(amount.value)}
              className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all cursor-pointer ${
                isSelected
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50'
              }`}
            >
              <span className="text-lg font-semibold text-gray-900 mb-1">
                {amount.label}
              </span>
              {amount.badge && (
                <span className={`text-xs font-medium ${
                  amount.badge.includes('Popular') 
                    ? 'text-purple-600' 
                    : 'text-green-600'
                }`}>
                  {amount.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

