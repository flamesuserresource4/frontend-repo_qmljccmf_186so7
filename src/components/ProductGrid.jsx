import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Essential Oversize Tee',
    price: 159000,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1600&auto=format&fit=crop',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Minimal Leather Bag',
    price: 429000,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1600&auto=format&fit=crop',
    badge: 'New',
  },
  {
    id: 3,
    name: 'Everyday Sneakers',
    price: 599000,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Linen Relaxed Shirt',
    price: 249000,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1600&auto=format&fit=crop',
  },
];

const currency = (n) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="group relative rounded-xl border border-gray-200 bg-white overflow-hidden transition-shadow hover:shadow-lg">
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" loading="lazy" />
      </div>
      {product.badge && (
        <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-black/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow">{product.badge}</span>
      )}
      <div className="p-4">
        <h3 className="text-sm font-semibold line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
        <div className="mt-1 flex items-center gap-1 text-yellow-500">
          <Star className="h-4 w-4 fill-current" />
          <span className="text-xs text-gray-600">{product.rating}</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-base font-bold">{currency(product.price)}</span>
          <button
            onClick={() => onAdd(product)}
            className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = ({ onAdd }) => {
  return (
    <section id="products" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Produk Unggulan</h2>
            <p className="mt-1 text-gray-600 text-sm">Pilihan terbaik minggu ini.</p>
          </div>
          <a href="#" className="hidden sm:inline text-sm font-medium hover:underline">Lihat semua</a>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
