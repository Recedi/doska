import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { AdminPanel } from './components/AdminPanel';
import { initialProducts } from './data/products';
import { Product } from './types';

function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleSaveProduct = (product: Product) => {
    if (selectedProduct) {
      // Update existing product
      setProducts(prev => prev.map(p => p.id === product.id ? product : p));
    } else {
      // Add new product
      setProducts(prev => [...prev, product]);
    }
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
  };

  const featuredProducts = products.filter(p => p.featured);
  const regularProducts = products.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onAdminToggle={() => setIsAdminMode(!isAdminMode)}
        isAdminMode={isAdminMode}
      />
      
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {featuredProducts.length > 0 && (
          <section id="featured\" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isAdminMode={isAdminMode}
                  onEdit={handleEditProduct}
                />
              ))}
            </div>
          </section>
        )}

        <section id="products">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            All Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                isAdminMode={isAdminMode}
                onEdit={handleEditProduct}
              />
            ))}
          </div>
        </section>
      </main>

      {isAdminMode && (
        <AdminPanel 
          products={products}
          onAddProduct={handleAddProduct}
        />
      )}

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveProduct}
        onDelete={handleDeleteProduct}
      />

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">ProductHub</h3>
            <p className="text-gray-400 mb-8">
              Premium products for modern lifestyle
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2025 ProductHub. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;