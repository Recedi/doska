import React from 'react';
import { Plus, Package, TrendingUp, DollarSign, Users } from 'lucide-react';
import { Product } from '../types';

interface AdminPanelProps {
  products: Product[];
  onAddProduct: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ products, onAddProduct }) => {
  const totalProducts = products.length;
  const inStockProducts = products.filter(p => p.inStock).length;
  const featuredProducts = products.filter(p => p.featured).length;
  const totalValue = products.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard</h2>
            <button
              onClick={onAddProduct}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Add Product</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center">
                <Package className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-blue-600">Total Products</p>
                  <p className="text-2xl font-bold text-blue-900">{totalProducts}</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-green-600">In Stock</p>
                  <p className="text-2xl font-bold text-green-900">{inStockProducts}</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-orange-600">Featured</p>
                  <p className="text-2xl font-bold text-orange-900">{featuredProducts}</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-purple-600">Total Value</p>
                  <p className="text-2xl font-bold text-purple-900">${totalValue.toFixed(0)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Admin Mode Active</h3>
            <p className="text-blue-700">
              You can now edit products by clicking the edit button on each product card. 
              Click the settings icon in the header to exit admin mode.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};