'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ServiceHeader({ icon: Icon, title, description, breadcrumbs = [] }) {
  return (
    <div className="mb-8">
      {/* Breadcrumbs */}
      {breadcrumbs.length > 0 && (
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center space-x-2">
              {index > 0 && <ChevronRight className="w-4 h-4" />}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-purple-600 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className={index === breadcrumbs.length - 1 ? 'text-gray-900' : ''}>
                  {crumb.label}
                </span>
              )}
            </div>
          ))}
        </nav>
      )}

      {/* Page Title */}
      <div className="mb-2">
        <div className="flex items-center space-x-3">
          {Icon && (
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-purple-600" />
            </div>
          )}
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        </div>
        {description && (
          <p className="text-gray-600 mt-2">{description}</p>
        )}
      </div>
    </div>
  );
}

