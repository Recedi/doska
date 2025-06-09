import React from 'react';
import { ShoppingCart, Settings, Star } from 'lucide-react';

interface HeaderProps {
  onAdminToggle: () => void;
  isAdminMode: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onAdminToggle, isAdminMode }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">ProductHub</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">
              Products
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button
              onClick={onAdminToggle}
              className={`p-2 transition-colors ${
                isAdminMode 
                  ? 'text-orange-600 bg-orange-100 rounded-lg' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <Settings className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};