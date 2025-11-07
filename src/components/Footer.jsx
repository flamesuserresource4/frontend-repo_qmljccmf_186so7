import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold">NovaShop</h3>
            <p className="mt-2 text-sm text-gray-600 max-w-sm">Toko online modern untuk kebutuhan fashion dan lifestyle Anda. Kami mengutamakan kualitas, kenyamanan, dan layanan terbaik.</p>
          </div>
          <div>
            <h4 className="font-semibold">Bantuan</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li><a className="hover:underline" href="#">Pusat Bantuan</a></li>
              <li><a className="hover:underline" href="#">Pengiriman</a></li>
              <li><a className="hover:underline" href="#">Retur & Refund</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Ikuti Kami</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li><a className="hover:underline" href="#">Instagram</a></li>
              <li><a className="hover:underline" href="#">TikTok</a></li>
              <li><a className="hover:underline" href="#">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-6 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} NovaShop. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Kebijakan Privasi</a>
            <a href="#" className="hover:underline">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
