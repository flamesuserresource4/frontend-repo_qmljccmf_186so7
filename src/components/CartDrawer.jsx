import React from 'react';

const currency = (n) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

const CartDrawer = ({ open, items, onClose, onRemove }) => {
  const subtotal = items.reduce((acc, it) => acc + it.price * it.qty, 0);

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl border-l border-gray-200 transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-label="Shopping Cart"
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Keranjang</h3>
          <button onClick={onClose} className="text-sm hover:underline">Tutup</button>
        </div>
        <div className="h-[calc(100%-180px)] overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-sm text-gray-600">Keranjang Anda kosong.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((it) => (
                <li key={it.id} className="flex gap-3">
                  <img src={it.image} alt={it.name} className="h-16 w-16 rounded-md object-cover border border-gray-200" />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium line-clamp-2">{it.name}</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Qty: {it.qty}</p>
                    <p className="text-sm font-semibold mt-1">{currency(it.price * it.qty)}</p>
                  </div>
                  <button onClick={() => onRemove(it.id)} className="text-xs text-gray-500 hover:underline">Hapus</button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 p-4 bg-white">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Subtotal</span>
            <span className="text-base font-bold">{currency(subtotal)}</span>
          </div>
          <button className="mt-3 w-full rounded-lg bg-black text-white py-3 text-sm font-semibold hover:bg-black/90">Checkout</button>
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
