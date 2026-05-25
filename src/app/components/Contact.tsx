'use client';

import { useState } from 'react';
import { X, Mail, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Contact() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden rounded-[32px] md:rounded-[48px] bg-[#0D0D0D] py-12 md:py-16 px-6 text-center text-white mb-5"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-emerald-300/20 blur-[120px]" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs md:text-sm">
              Available for freelance work
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black leading-[1] tracking-[-0.03em]">
            Let's build
            <br />
            something together
          </h2>

          <p className="mt-5 md:mt-8 max-w-[280px] md:max-w-xl mx-auto text-sm md:text-base text-neutral-400 leading-7">
            Need a dashboard, website, internal tools, or custom software? Let's
            discuss it.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 mt-8 md:mt-10">
            <button
              onClick={() => setContactOpen(true)}
              className="w-full md:w-auto px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-all"
            >
              Contact Me
            </button>

            <a
              href="https://wa.me/6289633414555"
              target="_blank"
              className="w-full md:w-auto px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {contactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setContactOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-5"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-[32px] bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,.12)]"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold">
                    Let's build together 👋
                  </h3>

                  <p className="text-neutral-500 mt-2">
                    Choose your preferred contact method
                  </p>
                </div>

                <button
                  onClick={() => setContactOpen(false)}
                  className="hover:rotate-90 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <a
                  href="https://wa.me/6289633414555"
                  target="_blank"
                  className="p-5 rounded-[24px] border border-neutral-200 flex gap-4 hover:bg-neutral-50 transition-all hover:-translate-y-1"
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
                  className="p-5 rounded-[24px] border border-neutral-200 flex gap-4 hover:bg-neutral-50 transition-all hover:-translate-y-1"
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
