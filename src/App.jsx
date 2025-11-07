import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const cartCount = useMemo(() => cart.reduce((acc, it) => acc + it.qty, 0), [cart]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <ProductGrid onAdd={handleAddToCart} />
      </main>
      <Footer />

      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onRemove={handleRemove} />
    </div>
  );
}

export default App;
