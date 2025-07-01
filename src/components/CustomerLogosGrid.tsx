'use client';

import Image from 'next/image';

interface CustomerLogosGridProps {
  customerLogos: Array<{
    name: string;
    src: string;
  }>;
}

export default function CustomerLogosGrid({ customerLogos }: CustomerLogosGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
      {customerLogos.map((logo) => (
        <div key={`customer-${logo.name}`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="w-32 h-20 relative">
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
