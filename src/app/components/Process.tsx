'use client';

import { motion } from 'framer-motion';
import Reveal from './Reveal';

const process = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'Understanding goals, users and business requirements.',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    desc: 'Creating intuitive and clean user experiences.',
  },
  {
    number: '03',
    title: 'Development',
    desc: 'Building scalable and modern applications.',
  },
  {
    number: '04',
    title: 'Deployment',
    desc: 'Launching, monitoring and improving products.',
  },
];

export default function Process() {
  return (
    <section className="py-16 mb-10">
      <div className="mb-16">
        <p className="text-sm text-neutral-500">Process</p>

        <h2 className="mt-3 text-[28px] md:text-5xl font-black">
          How I Build Products
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {process.map((item, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div
              key={index}
              className="relative p-8 rounded-[32px] bg-white/70 backdrop-blur-xl border border-neutral-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500"
            >
              <span className="absolute top-5 right-5 text-6xl font-black opacity-[0.05]">
                {item.number}
              </span>

              <h3 className="mt-10 text-2xl font-bold">{item.title}</h3>

              <p className="mt-4 text-neutral-500 leading-7">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
