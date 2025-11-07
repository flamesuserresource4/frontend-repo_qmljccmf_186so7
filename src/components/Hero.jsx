import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16 sm:py-20">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 mb-4">
              <Star className="h-3.5 w-3.5 text-yellow-500" />
              Trusted by 50k+ shoppers
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Temukan gaya modern untuk hari-hari Anda
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              Kurasi produk fashion dan lifestyle terbaru dengan harga bersaing.
              Pengiriman cepat, dukungan ramah, dan pengalaman berbelanja yang nyaman.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white shadow-md shadow-black/10 hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black"
              >
                Belanja Sekarang
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#highlights"
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Lihat Sorotan
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-tr from-gray-100 via-white to-gray-50 border border-gray-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop"
                alt="Modern fashion"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
