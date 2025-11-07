import React from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';

const Navbar = ({ cartCount, onOpenCart }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 sm:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </button>
            <a href="#" className="font-semibold text-xl tracking-tight">
              NovaShop
            </a>
          </div>

          <div className="hidden sm:flex items-center flex-1 max-w-lg mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-lg border border-gray-200 bg-white/80 pl-10 pr-4 py-2 text-sm placeholder:text-gray-400 focus:border-gray-400 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCart}
              className="relative inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white/90 px-3 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-black px-1 text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
