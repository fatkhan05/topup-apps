'use client';

export default function ProviderSelector({ providers = [], selectedProvider, onSelect }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Select E-Wallet Provider</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {providers.map((provider) => {
          const isSelected = selectedProvider === provider.id;
          
          return (
            <button
              key={provider.id}
              onClick={() => onSelect(provider.id)}
              className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all cursor-pointer ${
                isSelected
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50'
              }`}
            >
              <div className={`w-12 h-12 ${provider.bgColor} rounded-lg flex items-center justify-center mb-2`}>
                {provider.icon ? (
                  typeof provider.icon === 'function' ? (
                    <provider.icon />
                  ) : (
                    provider.icon
                  )
                ) : null}
              </div>
              <span className="text-sm font-medium text-gray-900">{provider.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
