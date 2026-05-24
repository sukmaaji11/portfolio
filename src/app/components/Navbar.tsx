'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Mail, MessageCircle, Calendar } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-5 inset-x-0 mx-auto z-50 w-[85%] max-w-4xl rounded-full bg-white/30 backdrop-blur-xl border border-black/[0.03] shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
        <div className="flex items-center justify-between px-6 md:px-8 py-2.5">
          {' '}
          <a href="/" className="text-[24px] font-black tracking-[-0.04em]">
            BRADEV.
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#projects"
              className="relative text-[15px] font-medium text-neutral-700 hover:text-gray-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              Projects
            </a>

            <a
              href="#process"
              className="relative text-[15px] font-medium text-neutral-700 hover:text-gray-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              Process
            </a>

            <a
              href="#about"
              className="relative text-[15px] font-medium text-neutral-700 hover:text-gray-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              About
            </a>

            <button
              onClick={() => setContactOpen(true)}
              className="px-5 py-2 rounded-full bg-black text-white hover:scale-105 transition"
            >
              Contact
            </button>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-2xl z-40 md:hidden">
          {' '}
          <div className="flex flex-col items-center justify-center h-full gap-10 text-2xl">
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>

            <a href="#process" onClick={() => setOpen(false)}>
              Process
            </a>

            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>

            <button
              onClick={() => setOpen(false)}
              className="px-8 py-4 rounded-full bg-black text-white"
            >
              Contact
            </button>
          </div>
        </div>
      )}

      {contactOpen && (
        <div
          onClick={() => setContactOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-5"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-[32px] bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,.12)]"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold">Let's build together 👋</h3>

                <p className="text-neutral-500 mt-2">
                  Choose your preferred contact method
                </p>
              </div>

              <button onClick={() => setContactOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/6289633414555"
                className="p-5 rounded-[24px] border border-neutral-200 flex gap-4 hover:bg-neutral-50 transition"
              >
                <MessageCircle />

                <div>
                  <h4 className="font-semibold">WhatsApp</h4>

                  <p className="text-sm text-neutral-500">
                    Usually replies within 1 hour
                  </p>
                </div>
              </a>

              <a
                href="mailto:sukmaaji.id@gmail.com"
                className="p-5 rounded-[24px] border border-neutral-200 flex gap-4 hover:bg-neutral-50 transition"
              >
                <Mail />

                <div>
                  <h4 className="font-semibold">Email</h4>

                  <p className="text-sm text-neutral-500">
                    For business inquiries
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
