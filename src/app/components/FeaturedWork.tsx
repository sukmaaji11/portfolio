'use client';

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
  return (
    <section className="py-20">
      <div className="mb-10 md:mb-14 px-2">
        <p className="text-sm text-neutral-500">Selected Work</p>

        <h2 className="mt-2 text-[28px] md:text-5xl font-black leading-[0.95] tracking-[-0.03em]">
          Featured Projects
        </h2>
      </div>

      <div className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group min-w-[92vw] md:min-w-[85vw] lg:min-w-[1100px] snap-center rounded-[32px] md:rounded-[40px] bg-white border border-neutral-100 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
          >
            <div className="relative overflow-hidden bg-neutral-50 p-4 md:p-6">
              <div className="absolute top-4 md:top-8 left-4 md:left-8 z-10 px-3 py-2 md:px-4 rounded-full bg-white/90 backdrop-blur-xl text-green-600 text-xs md:text-sm font-medium shadow">
                Featured Project
              </div>

              <div className="transition-all duration-700 group-hover:scale-[1.02]">
                <ImagePreview src={project.image} alt={project.title} />
              </div>
            </div>

            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-neutral-500 leading-7 md:leading-8 max-w-xl">
                    {project.desc}
                  </p>

                  <div className="flex gap-3 flex-wrap mt-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-neutral-100 text-xs md:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-fit text-center px-8 py-4 rounded-full bg-black text-white hover:scale-105 transition-all"
                >
                  View Project ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
