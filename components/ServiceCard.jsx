'use client';

import Link from 'next/link';

export default function ServiceCard({ icon: Icon, iconColor, title, description, linkText, href }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100">
      <div className={`w-12 h-12 ${iconColor} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      {href ? (
        <Link href={href} className="text-purple-600 font-medium text-sm hover:text-purple-700 flex items-center">
          {linkText} <span className="ml-1">→</span>
        </Link>
      ) : (
        <a href="#" className="text-purple-600 font-medium text-sm hover:text-purple-700 flex items-center">
          {linkText} <span className="ml-1">→</span>
        </a>
      )}
    </div>
  );
}

