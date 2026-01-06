'use client';

import { Facebook, Twitter, Instagram, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded"></div>
              <span className="text-2xl font-bold text-purple-600">PayFlow</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Your trusted digital payment and top-up platform. Fast, secure, and reliable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">E-Wallet Top Up</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Electricity Token</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Mobile Credit</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Data Package</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2024 PayFlow. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-purple-600">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">SSL Secured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

