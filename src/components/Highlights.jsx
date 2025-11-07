import React from 'react';
import { Truck, ShieldCheck, RefreshCw } from 'lucide-react';

const perks = [
  {
    icon: Truck,
    title: 'Pengiriman Cepat',
    desc: 'Order diproses dalam 24 jam, kirim ke seluruh Indonesia.'
  },
  {
    icon: ShieldCheck,
    title: 'Pembayaran Aman',
    desc: 'Metode pembayaran terverifikasi dan terenkripsi.'
  },
  {
    icon: RefreshCw,
    title: 'Garansi Retur',
    desc: 'Retur mudah dalam 7 hari jika tidak sesuai.'
  }
];

const Highlights = () => {
  return (
    <section id="highlights" className="py-12 sm:py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {perks.map((perk) => (
            <div key={perk.title} className="rounded-xl border border-gray-200 bg-white p-6 flex items-start gap-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-black text-white">
                <perk.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">{perk.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
