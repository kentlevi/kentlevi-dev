import { motion } from 'motion/react';

const capabilities = [
  {
    id: '01',
    mark: 'UI',
    title: 'Frontend Engineering',
    image: '/images/cutouts/robot-torso.png',
    imageClass: 'right-[-7vw] top-[-8vh] h-[72vh] max-h-none md:h-[88vh]',
    tags: ['Vue', 'Nuxt', 'React', 'Core Web Vitals'],
    headline: 'Performance-driven interfaces built for scale',
    description:
      'I architect responsive, SEO-optimized web applications in Vue, Nuxt, React, and TypeScript. The work focuses on fast rendering, clean component boundaries, and interfaces that stay maintainable as products grow.',
    items: [
      'Vue.js (2/3) & Nuxt.js',
      'React & TypeScript',
      'Tailwind CSS & SCSS',
      'State Management (Pinia/Vuex)',
      'TanStack Query',
      'Component-Based Architecture',
      'SSR & SSG Implementation',
    ],
  },
  {
    id: '02',
    mark: 'AI',
    title: 'AI / ML Integration',
    image: '/images/cutouts/robot-profile.png',
    imageClass: 'right-[4vw] top-[-2vh] h-[64vh] max-h-none md:h-[78vh]',
    tags: ['OpenAI', 'Gemini', 'Claude', 'Automation'],
    headline: 'Workflow automation powered by practical AI systems',
    description:
      'I design multi-model AI features with OpenAI, Gemini, and Claude, then connect them to real product workflows. That includes prompt systems, content automation, event-driven publishing, and internal tools that reduce repetitive work.',
    items: [
      'Multi-Model AI Integration',
      'LLM Workflow Automation',
      'Prompt Engineering',
      'Agentic Platforms',
      'AI Tools',
      'Automated SEO & Content Generation',
      'Event-Driven AI Publishing',
    ],
  },
  {
    id: '03',
    mark: 'API',
    title: 'Backend Architecture',
    image: '/images/cutouts/operator-laptop.png',
    imageClass: 'left-[-10vw] top-[1vh] h-[62vh] max-h-none md:h-[78vh]',
    tags: ['Django', 'PostgreSQL', 'Redis', 'APIs'],
    headline: 'Reliable data systems and APIs that support growth',
    description:
      'Beyond the interface, I build the backend foundations that keep products stable. My work covers Django and Python APIs, PostgreSQL schema design, queue-driven processing, and integrations that keep data moving cleanly.',
    items: [
      'Python & Django',
      'RESTful API Integration',
      'PostgreSQL Schema Design',
      'Redis & BullMQ',
      'Data Flow Optimization',
      'PHP & Java Awareness',
      'Agile/Scrum CI/CD Workflows',
    ],
  },
  {
    id: '04',
    mark: 'SEO',
    title: 'Performance & SEO',
    image: '/images/cutouts/samurai-swords.png',
    imageClass: 'left-[-8vw] top-[-3vh] h-[68vh] max-h-none md:h-[82vh]',
    tags: ['LCP', 'CLS', 'Metadata', 'Accessibility'],
    headline: 'Optimized for Core Web Vitals and organic reach',
    description:
      'I treat performance as product quality. From LCP and CLS improvements to metadata systems, code-splitting, lazy loading, and asset strategy, I make pages faster, clearer, and easier to rank.',
    items: [
      'Core Web Vitals Optimization',
      'LCP, CLS, INP Improvement',
      'Asset Optimization',
      'Dynamic SEO Metadata',
      'Code-Splitting',
      'Lazy Loading',
      'Responsive Web Accessibility',
    ],
  },
];

export default function Services() {
  return (
    <section className="relative mt-12 w-full border-t border-[#1A1A1A] bg-[#080808] text-[#FFFFFF]" id="expertise">
      <div className="relative z-20 mx-auto max-w-7xl bg-[#080808] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:items-end lg:gap-16">
          <div className="relative flex min-w-0 flex-col justify-end gap-6 lg:min-h-[360px] lg:border-r lg:border-[#1A1A1A] lg:pr-14">
            <div>
              <p className="mb-3 w-max border-b border-[#FF0000] pb-3 text-xs font-bold uppercase tracking-[0.28em] text-white/62">
                Core Capabilities
              </p>
              <h2 className="max-w-full text-6xl font-bold uppercase leading-[0.86] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[4.7rem] xl:text-[5.5rem]">
                Expertise
              </h2>
            </div>

            <p className="max-w-md text-sm font-medium leading-relaxed text-white/50 md:text-base">
              Focused engineering across the layers that shape fast, reliable, and scalable digital products.
            </p>
          </div>

          <div className="flex min-w-0 flex-col justify-center gap-7 lg:min-h-[360px] lg:pl-2">
            <h2 className="max-w-4xl text-4xl font-bold uppercase leading-[0.96] tracking-tight text-white sm:text-5xl lg:text-[3.15rem] xl:text-[3.75rem]">
              Fast interfaces.<br />
              Resilient systems.<br />
              Practical AI workflows.
            </h2>
            <p className="max-w-3xl text-base font-medium leading-relaxed text-white/60 md:text-lg">
              I connect polished frontend execution with backend clarity and automation strategy, turning product ideas into experiences that are easy to use, maintain, and scale.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-transparent pb-0">
        {capabilities.map((cap, i) => (
          <div key={cap.id} className="relative w-full">
            <div className="sticky top-0 z-0 flex h-[75vh] w-full flex-col justify-end overflow-hidden bg-[#FF0000]">
              <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-end overflow-hidden">
                <span className="select-none whitespace-nowrap text-[84vw] font-black uppercase leading-none tracking-tighter text-[#080808]/70 sm:text-[78vw] md:text-[72vw] lg:text-[66vw] xl:text-[58vw]">
                  {cap.mark}
                </span>
              </div>

              <img
                src={cap.image}
                alt=""
                aria-hidden="true"
                className={`pointer-events-none absolute z-[14] hidden object-contain object-bottom opacity-90 saturate-0 contrast-125 mix-blend-multiply md:block ${cap.imageClass}`}
              />

              <div className="pointer-events-none absolute inset-0 z-[15] bg-gradient-to-r from-[#FF0000]/0 via-[#FF0000]/10 to-[#FF0000]/70" />

              <div
                className="pointer-events-none absolute inset-0 z-[16] opacity-[0.03] mix-blend-overlay"
                style={{
                  backgroundImage: "url('https://futurecraft.agency/wp-content/uploads/2024/08/noise.gif')",
                  backgroundSize: '200px',
                }}
              />

              <div className="relative z-20 w-full px-6 pb-[10vh] lg:px-12">
                <p className="mb-4 font-mono text-lg font-bold tracking-[0.14em] text-white drop-shadow-md md:text-2xl">
                  // {cap.id}
                </p>
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="whitespace-nowrap text-[clamp(2.6rem,10vw,9rem)] font-bold uppercase leading-[0.9] tracking-tighter text-white drop-shadow-xl"
                >
                  {cap.title}
                </motion.h1>
                <div className="mt-6 flex max-w-3xl flex-wrap gap-2">
                  {cap.tags.map((tag) => (
                    <span key={tag} className="border border-white/22 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/82">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 -mt-[1px] w-full bg-[#080808] pb-12 pt-24 lg:pb-24">
              <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-12">
                <div className="hidden lg:col-span-4 lg:block">
                  <div className="sticky top-32 h-max">
                    <span
                      className="text-[180px] font-black leading-none text-transparent opacity-95 md:text-[240px]"
                      style={{
                        WebkitTextStroke: '2px rgba(255,255,255,0.16)',
                        textShadow: '0 0 32px rgba(255,255,255,0.04)',
                      }}
                    >
                      {cap.id}
                    </span>
                  </div>
                </div>

                <div className="col-span-1 lg:col-span-8">
                  <h2 className="mb-8 max-w-4xl pr-0 text-3xl font-bold uppercase leading-[1.08] tracking-tight sm:text-4xl md:text-5xl">
                    {cap.headline}
                  </h2>
                  <p className="mb-12 max-w-3xl text-base leading-relaxed text-gray-400 md:text-lg">
                    {cap.description}
                  </p>

                  <div className="flex flex-col border-t border-[#1A1A1A]">
                    {cap.items.map((item, index) => (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        key={item}
                        className="group flex cursor-pointer items-center justify-between gap-4 border-b border-[#1A1A1A] py-6 transition-all duration-300 hover:bg-[#FF0000] md:py-8 md:hover:-mx-6 md:hover:px-6"
                      >
                        <span className="min-w-0 break-words text-lg font-bold leading-snug tracking-tight text-[#FFFFFF] transition-colors sm:text-xl md:text-[1.35rem]">
                          {item}
                        </span>
                        <span className="font-mono text-sm opacity-50 transition-colors group-hover:text-[#FFFFFF] group-hover:opacity-100">
                          0{index + 1}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {i !== capabilities.length - 1 && (
                <div className="mt-24 w-full">
                  <div className="w-full border-t border-[#1A1A1A]" />
                  <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm uppercase tracking-[0.14em] opacity-60 sm:flex-row sm:items-center sm:justify-between lg:px-12">
                    <span>Capability Stack</span>
                    <span>{cap.title}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
