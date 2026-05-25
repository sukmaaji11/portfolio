'use client';

import { useState } from 'react';
import ImagePreview from './ImagePreview';

const projects = [
  {
    title: 'JadiCuan',
    desc: 'Trading journal & analytics platform for tracking and improving trading consistency.',
    image: '/projects/ftwork1.png',
    stack: ['Next.js', 'Prisma', 'PostgreSQL'],
    link: 'https://jadicuan-web.vercel.app/',
  },
  {
    title: 'Live Auction Platform',
    desc: 'Online live auction system with bidding, admin dashboard and monitoring.',
    image: '/projects/ftwork2.png',
    stack: ['CI3', 'MySQL'],
    link: 'https://sasanangapak.com/lelang/',
  },
  {
    title: 'One Time Absensi',
    desc: 'Attendance system with selfie verification and location tracking.',
    image: '/projects/ftwork3.png',
    stack: ['Laravel', 'MySQL'],
    link: 'https://absensi.bra-dev.com',
  },
];

export default function FeaturedWork() {
  const [active] = useState(0);

  return (
    <section className="py-20 md:py-32" id="projects">
      <div className="mb-10 md:mb-14">
        <p className="text-sm text-neutral-500">Selected Work</p>

        <h2 className="mt-2 text-4xl md:text-5xl font-black">
          Featured Projects
        </h2>
      </div>

      <div className="flex gap-5 md:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group min-w-[92vw] md:min-w-[85vw] lg:min-w-[1100px] snap-center rounded-[32px] bg-white border border-neutral-100 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.05)]"
          >
            {/* Image */}

            <div className="relative bg-neutral-50 p-3 md:p-6">
              <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-white shadow text-green-600 text-xs md:text-sm font-medium">
                Featured Project
              </div>

              <ImagePreview src={project.image} alt={project.title} />
            </div>

            {/* Content */}

            <div className="p-6 md:p-10">
              <h3 className="text-2xl md:text-4xl font-black">
                {project.title}
              </h3>

              <p className="mt-4 text-sm md:text-base text-neutral-500 leading-7">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-neutral-100 text-xs md:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full md:w-fit flex justify-center px-6 py-4 rounded-full bg-black text-white hover:scale-[1.02] transition-all"
              >
                View Project ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* indicators */}

      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === active ? 'bg-black' : 'bg-neutral-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
