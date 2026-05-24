'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

type Props = {
  src: string;
  alt: string;
};

export default function ImagePreview({ src, alt }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="relative cursor-pointer group overflow-hidden rounded-[32px]"
      >
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          className="w-full h-auto rounded-[32px] transition-all duration-700 group-hover:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all px-5 py-3 rounded-full bg-white shadow-lg flex items-center gap-2">
            <ZoomIn size={18} />
            View Detail
          </div>
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center p-10"
        >
          <button className="absolute top-8 right-8 bg-white p-3 rounded-full">
            <X size={18} />
          </button>

          <Image
            src={src}
            alt={alt}
            width={2200}
            height={1200}
            className="max-h-[90vh] w-auto rounded-[32px]"
          />
        </div>
      )}
    </>
  );
}
