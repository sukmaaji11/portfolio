'use client';

import {
  FaMailBulk,
  FaPhone,
  FaMapPin,
  FaGithub,
  FaLinkedin,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';

const skills = [
  'Next.js',
  'React',
  'Laravel',
  'CodeIgniter',
  'Node.js',
  'PostgreSQL',
  'MySQL',
  'Python',
];

const projects = [
  {
    title: 'Warehouse System',
    desc: 'Warehouse transfer and delivery management system.',
    image: '/projects/warehouse-preview.png',
    status: 'On Going',
    link: '#',
  },
  {
    title: 'One Time Absence System',
    desc: 'Attendance system with selfie verification and location tracking',
    image: '/projects/ftwork3.png',
    status: 'Live',
    link: 'https://absensi.bra-dev.com',
  },

  {
    title: 'Live Auction Platform',
    desc: 'Real-time auction platform with admin monitoring.',
    image: '/projects/ftwork2.png',
    status: 'Completed',
    link: 'https://sasanangapak.com/lelang',
  },
];

const experiences = [
  {
    company: 'PT Astra Graphia Information Technology (AGIT)',
    role: 'IT Service Desk',
    period: 'May 2025 - Dec 2025',
    desc: 'Provided IT support and troubleshooting services for enterprise users.',
  },
  {
    company: 'PT Arkademi Daya Indonesia',
    role: 'System Administration',
    period: 'Jan 2024 - Jan 2025',
    desc: 'Managed systems, networks, servers and website content.',
  },
  {
    company: 'Sasana Ngapak Purwokerto',
    role: 'Fullstack Developer (Freelance)',
    period: 'Aug 2021 - Sep 2023',
    desc: 'Built online auction systems using PHP, CodeIgniter and MySQL.',
  },
];

export default function CVPage() {
  return (
    <main className="min-h-screen bg-[#F7F9F8] py-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <img
              src="/projects/fp.png"
              className="w-40 h-40 rounded-full object-cover border-[6px] border-white shadow-lg"
            />

            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-black">
                Sukma Aji Yudantomo
              </h1>

              <p className="mt-3 text-xl text-emerald-500 font-medium">
                Fullstack Developer
              </p>

              <p className="mt-6 text-neutral-500 leading-8">
                Creative and technology-driven professional with experience in
                IT support, system administration and digital product
                development.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-neutral-50 rounded-2xl p-4 text-center">
                  <h3 className="text-2xl font-bold">20+</h3>
                  <p className="text-sm text-neutral-500">Projects</p>
                </div>

                <div className="bg-neutral-50 rounded-2xl p-4 text-center">
                  <h3 className="text-2xl font-bold">5+</h3>
                  <p className="text-sm text-neutral-500">Years</p>
                </div>

                <div className="bg-neutral-50 rounded-2xl p-4 text-center">
                  <h3 className="text-2xl font-bold">∞</h3>
                  <p className="text-sm text-neutral-500">Learning</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8 text-sm">
                <div className="flex items-center gap-2">
                  <FaPhone size={16} />
                  0896-3341-4555
                </div>

                <div className="flex items-center gap-2">
                  <FaMailBulk size={16} />
                  sukmaaji.id@gmail.com
                </div>

                <div className="flex items-center gap-2">
                  <FaMapPin size={16} />
                  Yogyakarta
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <a
                  href="https://github.com/sukmaaji11"
                  target="_blank"
                  className="px-5 py-3 rounded-full bg-black text-white"
                >
                  <FaGithub size={24} />
                </a>

                <a
                  href="https://linkedin.com/in/sukma-aji-yudantomo"
                  target="_blank"
                  className="px-5 py-3 rounded-full border"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}

        <section className="mt-12">
          <div className="flex items-center gap-3 mb-8">
            <FaBriefcase />
            <h2 className="text-3xl font-black">Experience</h2>
          </div>

          <div className="relative border-l border-neutral-200 ml-4">
            {experiences.map((item, index) => (
              <div className="relative pl-10 pb-10">
                <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-emerald-500" />
                <div className="bg-white rounded-3xl p-6">
                  <div
                    key={`${item.company}-${index}`}
                    className="bg-white rounded-[30px] p-8"
                  >
                    <div className="flex justify-between flex-wrap gap-5">
                      <div>
                        <h3 className="text-xl font-bold">{item.role}</h3>

                        <p className="text-neutral-500">{item.company}</p>
                      </div>

                      <span className="text-neutral-400">{item.period}</span>
                    </div>

                    <p className="mt-4 text-neutral-500 leading-7">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}

        <section className="mt-14">
          <h2 className="text-3xl font-black mb-8">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:-translate-y-2 transition-all duration-500"
              >
                <img
                  src={project.image}
                  alt=""
                  className="h-[220px] w-full object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl">{project.title}</h3>

                    <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-500">
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-4 text-neutral-500 text-sm leading-7">
                    {project.desc}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    className="mt-6 inline-flex px-5 py-3 rounded-full bg-black text-white"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}

        <section className="mt-12">
          <div className="flex items-center gap-3 mb-8">
            <FaCode />
            <h2 className="text-3xl font-black">Tech Stack</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="px-5 py-3 rounded-full bg-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}

        <section className="mt-12">
          <div className="flex items-center gap-3 mb-8">
            <FaGraduationCap />
            <h2 className="text-3xl font-black">Education</h2>
          </div>

          <div className="bg-white rounded-[30px] p-8">
            <h3 className="font-bold text-xl">Bachelor of Computer Science</h3>

            <p className="text-neutral-500">Diponegoro University</p>

            <p className="text-neutral-400 mt-3">2017 - 2022</p>
          </div>
        </section>

        {/* Contact */}

        <section className="mt-20">
          <div className="bg-black rounded-[40px] p-10 md:p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Interested in working together?
            </h2>

            <p className="mt-6 text-neutral-400 max-w-xl mx-auto leading-8">
              Need dashboard development, internal systems, or custom web
              applications?
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <a
                href="/Sukma-Aji-ATS-CV.pdf"
                download
                className="px-8 py-4 rounded-full bg-white text-black font-medium"
              >
                Download ATS CV
              </a>

              <a
                href="mailto:sukmaaji.id@gmail.com"
                className="px-8 py-4 rounded-full border border-white/20"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
