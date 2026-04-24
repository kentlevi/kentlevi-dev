import { motion } from 'motion/react';

type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
};

const experiences: ExperienceItem[] = [
  {
    period: '2025 - Present',
    role: 'Frontend & Integration Developer',
    company: 'Glophics Web Design & Advertising Inc.',
    location: 'Cebu City, Philippines',
    description:
      'Architecting high-traffic, SEO-optimized Vue.js and Nuxt.js applications while building reusable UI systems and improving rendering performance across major client work.',
    tags: ['Vue.js', 'Nuxt.js', 'AI Integration'],
  },
  {
    period: '2023 - 2025',
    role: 'Software Developer',
    company: 'Dinnox IT Solutions',
    location: 'Cebu City, Philippines',
    description:
      'Engineered high-performance interfaces and integrated RESTful APIs with Django and Python backend systems, while modernizing legacy code into cleaner component-driven architecture.',
    tags: ['React', 'Django', 'REST APIs'],
  },
  {
    period: '2021 - 2023',
    role: 'Software Developer',
    company: 'The Little Ripple Company Pty Ltd',
    location: 'Australia (Remote)',
    description:
      'Built automated e-commerce and scheduling systems, improved backend reliability, and worked through legacy Python and Django applications to support critical business operations.',
    tags: ['Automation', 'E-commerce', 'Python'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#0a0a0a] px-5 py-24 text-white lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_34%)]" />

      <div className="relative mx-auto grid max-w-7xl">
        <div>
          <div className="mb-14 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-16 lg:mb-16">
            <div className="min-w-0">
              <p className="mb-3 text-lg font-bold uppercase tracking-tight text-white sm:text-[1.7rem]">
                Experience
              </p>
            </div>

            <div className="min-w-0">
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="max-w-[12ch] text-[clamp(2.2rem,4.2vw,4.4rem)] font-black uppercase leading-[0.94] tracking-[-0.04em] text-white"
              >
                Built Across Product and Frontend
              </motion.h2>
              <p className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-white/56 md:text-base">
                Experience in frontend systems, backend integration, and delivery-focused product work.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="group relative overflow-hidden border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.035] md:p-8"
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,0,0,0.10),transparent_30%,transparent_70%,rgba(255,255,255,0.03))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 grid gap-6 md:grid-cols-[150px_minmax(0,1fr)] md:gap-8">
                  <div className="border-b border-white/8 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-[#ff5a5a]">
                      {item.period}
                    </p>
                    <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-white/42">
                      {item.location}
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-white/48">
                      {item.company}
                    </p>
                    <h3 className="max-w-full whitespace-nowrap text-[clamp(1.55rem,2.35vw,2.8rem)] font-black uppercase leading-[0.96] tracking-[-0.04em] text-white">
                      {item.role}
                    </h3>
                    <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/64 md:text-lg">
                      {item.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/12 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/62 transition-colors duration-300 group-hover:border-white/22 group-hover:text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
