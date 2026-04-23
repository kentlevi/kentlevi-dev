import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';
import { useCallback, useState } from 'react';

const projects = [
  {
    title: 'Automated SEO System',
    category: 'AI Platform',
    role: 'Frontend + AI Integration',
    stack: ['Nuxt', 'Django', 'OpenAI'],
    impact: 'Automated publishing workflow',
    summary: 'A publishing workflow that turns structured content data into optimized landing pages with automated metadata and reporting.',
    image: 'https://designbybrandin.com/wp-content/uploads/2025/05/armada_businesscard.webp',
  },
  {
    title: 'Musticker US',
    category: 'Commerce Experience',
    role: 'Frontend Architecture',
    stack: ['Vue', 'Tailwind', 'API'],
    impact: 'Sharper product browsing',
    summary: 'A responsive product experience with fast catalog browsing, clean checkout paths, and reusable frontend modules.',
    image: 'https://designbybrandin.com/wp-content/uploads/2024/01/WildFlower_P.jpg',
  },
  {
    title: 'NextGen Gas Station Suite',
    category: 'Operations System',
    role: 'Dashboard Engineering',
    stack: ['React', 'Django', 'PostgreSQL'],
    impact: 'Cleaner operations visibility',
    summary: 'A multi-role dashboard for station workflows, reporting, inventory visibility, and backend-driven task automation.',
    image: 'https://designbybrandin.com/wp-content/uploads/2024/01/zenith.jpg',
  },
  {
    title: 'Cariton',
    category: 'Frontend Architecture',
    role: 'Interface System',
    stack: ['React', 'TypeScript', 'SCSS'],
    impact: 'Reusable component structure',
    summary: 'A polished interface system focused on maintainable components, sharp responsive behavior, and editorial layouts.',
    image: 'https://designbybrandin.com/wp-content/uploads/2024/01/Mayfield.jpg',
  },
  {
    title: 'MCM Plumbing',
    category: 'Service Website',
    role: 'SEO + Web Build',
    stack: ['Nuxt', 'CMS', 'Analytics'],
    impact: 'Improved lead capture path',
    summary: 'A service-focused site with clearer lead capture, stronger local SEO foundations, and mobile-first page structure.',
    image: 'https://designbybrandin.com/wp-content/uploads/2024/01/Eden_P.jpg',
  },
  {
    title: 'Cedule',
    category: 'Scheduling Tool',
    role: 'Product Frontend',
    stack: ['Vue', 'REST API', 'Calendar UX'],
    impact: 'Simplified booking flows',
    summary: 'A scheduling interface with streamlined booking flows, clear availability states, and backend API integration.',
    image: 'https://designbybrandin.com/wp-content/uploads/2023/12/MM_thumb.jpg',
  },
];

export default function SelectedWork() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: true,
  });
  const [focusedProject, setFocusedProject] = useState<number | null>(null);

  const focusProject = useCallback((index: number) => {
    setFocusedProject(index);
  }, []);

  const selectProject = useCallback(
    (index: number) => {
      setFocusedProject(index);
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <section id="work" className="relative w-full overflow-hidden bg-[#080808] px-6 py-24 text-[#FFFFFF] lg:px-[60px]">
      <div className="absolute inset-x-0 top-[42%] h-px bg-[#FFFFFF]/18" />
      <div className="absolute inset-x-0 top-[45%] h-px bg-[#FFFFFF]/10" />
      <div className="absolute inset-x-0 top-[49%] h-px bg-[#FF0000]/18" />

      <div className="relative z-10 mb-14 w-full min-w-0">
        <div className="min-w-0">
          <p className="mb-4 w-max border-b border-[#FF0000] pb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#FFFFFF]/62">
            Featured Builds
          </p>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="whitespace-nowrap text-[clamp(3.2rem,6.8vw,7.5rem)] font-bold uppercase leading-[0.92] tracking-tight"
          >
            Systems That Ship
          </motion.h2>
        </div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10"
      >
        <div ref={emblaRef} className="overflow-hidden py-6">
          <div className="flex min-h-[520px] items-center md:min-h-[580px]">
            {projects.map((project, index) => {
              const isFocused = focusedProject === index;

              return (
                <button
                  key={project.title}
                  type="button"
                  onMouseEnter={() => focusProject(index)}
                  onMouseLeave={() => setFocusedProject(null)}
                  onFocus={() => focusProject(index)}
                  onBlur={() => setFocusedProject(null)}
                  onClick={() => selectProject(index)}
                  className={`group relative min-w-0 basis-[72vw] shrink-0 cursor-pointer overflow-visible pl-0 pr-4 text-left outline-none transition-[opacity,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,filter] md:basis-[300px] md:-mr-16 lg:basis-[360px] lg:-mr-20 ${
                    isFocused ? 'z-20 opacity-100 blur-0' : 'z-10 opacity-70 blur-[1.5px] hover:opacity-100 focus-visible:opacity-100'
                  }`}
                  style={{
                    transform: isFocused ? 'translateY(0) scale(1)' : 'translateY(0) scale(0.94)',
                    transition: 'transform 640ms cubic-bezier(0.22, 1, 0.36, 1)',
                    willChange: 'transform',
                  }}
                >
                  <div
                    className={`relative h-[360px] overflow-hidden rounded-[8px] border bg-[#1A1A1A] shadow-2xl transition-[border-color,transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform md:h-[430px] ${
                      isFocused ? 'border-[#FFFFFF]/32 md:scale-[1.08]' : 'border-[#FFFFFF]/16'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`h-full w-full object-cover transition-[filter,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[filter,transform] ${
                        isFocused ? 'scale-100 brightness-[0.92] contrast-[1.08]' : 'scale-105 brightness-[0.68] contrast-[1.1]'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/88 via-[#080808]/16 to-transparent" />
                    <div
                      className={`absolute inset-0 bg-[#FF0000] mix-blend-multiply transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isFocused ? 'opacity-18' : 'opacity-58 group-hover:opacity-24 group-focus-visible:opacity-24'
                      }`}
                    />

                    <div
                      className={`absolute inset-x-0 bottom-0 p-5 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform] md:p-6 ${
                        isFocused ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                      }`}
                    >
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FFFFFF]/58 sm:tracking-[0.28em]">
                        {project.category}
                      </p>
                      <h3 className="max-w-[13rem] break-words text-2xl font-bold uppercase leading-[0.95] tracking-tight text-[#FFFFFF] md:max-w-[15rem] md:text-3xl">
                        {project.title}
                      </h3>
                    </div>

                    <div
                      className={`absolute inset-x-0 bottom-0 p-5 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform] md:p-6 ${
                        isFocused ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                      }`}
                    >
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FFFFFF]/58 sm:tracking-[0.28em]">
                        {project.category}
                      </p>
                      <h4 className="mb-3 max-w-[18rem] break-words text-3xl font-bold uppercase leading-[0.95] tracking-tight md:text-4xl">
                        {project.title}
                      </h4>
                      <p className="max-w-md text-sm leading-relaxed text-[#FFFFFF]/68">
                        {project.summary}
                      </p>
                      <div className="mt-5 grid gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FFFFFF]/70">
                        <span>Role: {project.role}</span>
                        <span>Impact: {project.impact}</span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span key={tech} className="border border-white/14 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/72">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="mt-5 inline-flex border border-[#FFFFFF]/18 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#FFFFFF] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[#FF0000] group-hover:bg-[#FF0000]">
                        Explore Project
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
