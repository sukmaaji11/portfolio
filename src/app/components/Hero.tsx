'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen pt-28 md:pt-40">
      <div className="max-w-6xl mx-auto text-center px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-sm mb-6">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for Freelance Work
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[28px] sm:text-[34px] md:text-6xl font-black leading-[1] tracking-[-0.04em]"
        >
          Building software
          <br />
          that solves
          <span className="text-emerald-500"> real problems</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-neutral-600 text-base md:text-xl max-w-[300px] md:max-w-2xl mx-auto leading-8"
        >
          Creating modern web applications, dashboards and digital products.
        </motion.p>

        <div className="mt-8 flex justify-center gap-6 flex-wrap text-sm text-neutral-500">
          <span>20+ Projects</span>

          <span>5+ Years</span>

          <span>Remote Friendly</span>
        </div>

        <div className="mt-12 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
            <div className="px-4 py-2 rounded-full bg-white shadow-lg text-xs whitespace-nowrap">
              Trading Analytics Dashboard
            </div>
          </div>

          <img
            src="/projects/jadicuan.png"
            alt=""
            className="w-full max-w-[340px] md:max-w-none md:w-[82%] mx-auto rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,.08)]"
          />
        </div>
      </div>
    </section>
  );
}
