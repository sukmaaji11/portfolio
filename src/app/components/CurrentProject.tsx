'use client';

export default function CurrentProject() {
  return (
    <section className="py-24">
      <div className="mb-12">
        <p className="text-sm text-neutral-500">Currently Building</p>

        <h2 className="mt-4 text-[28px] sm:text-[64px] md:text-6xl font-black leading-[1] tracking-[-0.04em]">
          What I'm Working On
        </h2>
      </div>

      <div className="rounded-[40px] bg-white border border-neutral-100 p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,.05)]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
              🚀 In Progress
            </div>

            <h3 className="text-2xl md:text-4xl font-black">
              Warehouse Management System
            </h3>

            <p className="mt-5 text-sm md:text-base text-neutral-500 leading-7">
              Building an internal warehouse management platform with inventory
              tracking, stock movement monitoring, incoming and outgoing goods,
              purchase workflows, and reporting dashboards.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {[
                'Next.js',
                'TypeScript',
                'PostgreSQL',
                'Prisma',
                'Tailwind',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-neutral-100 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-5">
            <div className="px-5 py-3 rounded-full bg-emerald-50 text-emerald-600 font-medium">
              65% Completed
            </div>

            <div className="w-full md:w-[220px]">
              <div className="flex justify-between text-sm text-neutral-500 mb-2">
                <span>Progress</span>
                <span>65%</span>
              </div>

              <div className="h-3 rounded-full bg-neutral-100 overflow-hidden">
                <div className="h-full w-[65%] rounded-full bg-emerald-500" />
              </div>
            </div>
          </div>
          <div className="mt-10 rounded-[30px] overflow-hidden bg-[#0D0D0D] p-4 md:p-8">
            <img
              src="/projects/warehouse-preview.png"
              alt="Warehouse System"
              className="w-full rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
