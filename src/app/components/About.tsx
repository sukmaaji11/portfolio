'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FileText } from 'lucide-react';

export default function About() {
  return (
    <section className="py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm text-neutral-500">About</p>

          <h2 className="mt-4 text-[28px] sm:text-[64px] md:text-6xl font-black leading-[1] tracking-[-0.04em]">
            Building products with simplicity and purpose.
          </h2>

          <p className="mt-8 text-sm text-neutral-500 leading-8">
            I'm Sukma Aji, a full-stack developer focused on building modern web
            applications and digital products.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                className="w-12 h-12 rounded-full border border-neutral-200 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://github.com/username"
                target="_blank"
                className="w-12 h-12 rounded-full border border-neutral-200 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://instagram.com/username"
                target="_blank"
                className="w-12 h-12 rounded-full border border-neutral-200 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
            </div>

            {/* CV Button */}
            <a
              href="/cv"
              className="px-6 py-3 rounded-full bg-black text-white flex items-center gap-2 hover:scale-[1.03] transition-all duration-300"
            >
              <FileText size={18} />
              View CV
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="p-5 rounded-[24px] bg-white shadow-sm">
              <h3 className="text-2xl font-bold">20++</h3>
              <p>Projects Built</p>
            </div>

            <div className="p-5 rounded-[24px] bg-white shadow-sm">
              <h3 className="text-2xl font-bold">5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-green-200 blur-[80px]" />

            <img
              src="/projects/fp.png"
              className="relative w-[260px] md:w-[340px] rounded-[40px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
