'use client';

export default function InputField({ 
  label, 
  icon: Icon, 
  placeholder, 
  value, 
  onChange, 
  type = 'text',
  prefix,
  error 
}) {
  return (
    <div>
      {label && (
        <label className="block text-lg font-semibold text-gray-900 mb-3">
          {label}
        </label>
      )}
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 font-medium">
            {prefix}
          </span>
        )}
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-xl border ${
            Icon || prefix ? 'pl-12' : ''
          } ${
            prefix ? 'pl-16' : ''
          } ${
            error 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:border-purple-500 focus:ring-purple-500'
          } focus:outline-none focus:ring-2 transition-colors`}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

