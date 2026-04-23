import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Frontend & Integration Developer',
    company: 'Glophics Web Design & Advertising Inc.',
    location: 'Cebu City, Philippines',
    date: 'April 2025 - Present',
    description:
      'Architecting high-traffic, SEO-optimized Vue.js/Nuxt.js applications. Building custom UI component libraries and optimizing Core Web Vitals to improve rendering metrics across major client portfolios.',
    outcomes: ['Core Web Vitals', 'Component Systems', 'SEO Architecture'],
  },
  {
    role: 'Software Developer',
    company: 'Dinnox IT Solutions',
    location: 'Cebu City, Philippines',
    date: 'January 2023 - April 2025',
    description:
      'Engineered high-performance interfaces and facilitated smooth data flow by integrating RESTful APIs with Django/Python backend systems. Improved maintainability by migrating legacy code to modern component architectures.',
    outcomes: ['REST API Integration', 'Django Workflows', 'Legacy Modernization'],
  },
  {
    role: 'Software Developer',
    company: 'The Little Ripple Company Pty Ltd',
    location: 'Australia (Remote)',
    date: 'November 2021 - January 2023',
    description:
      'Developed automated e-commerce and scheduling systems. Debugged legacy Python/Django architectures to increase application reliability and reduce server response times for critical business operations.',
    outcomes: ['Automation', 'E-commerce Systems', 'Backend Reliability'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative flex w-full flex-col overflow-hidden bg-[#1A1A1A] py-24 text-[#FFFFFF]">
      <div className="relative mb-20 flex w-full overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex whitespace-nowrap text-[22vw] font-bold uppercase leading-none tracking-tighter text-white/5 md:text-[20vw]"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 15,
          }}
        >
          <span className="px-[4vw]">Professional Experience</span>
          <span className="px-[4vw]">Professional Experience</span>
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="mb-3 w-max border-b border-[#FF0000] pb-3 text-xs font-bold uppercase tracking-[0.24em] text-white/58">
              Career Track
            </p>
            <h2 className="text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
              Experience
            </h2>
          </div>
          <p className="max-w-2xl text-base font-medium leading-relaxed text-white/58 md:text-lg">
            Product-minded engineering across frontend systems, backend integrations, SEO performance, and automation-heavy workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 border-t border-[#080808]">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group grid grid-cols-1 gap-8 border-b border-[#080808] py-10 transition-colors duration-500 hover:border-[#FF0000] md:grid-cols-12 md:gap-12 md:py-12"
            >
              <div className="md:col-span-3">
                <div className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-[#FF0000]">
                  0{index + 1}
                </div>
                <div className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-white/46">
                  {exp.date}
                </div>
              </div>

              <div className="md:col-span-4">
                <h3 className="mb-3 text-2xl font-bold uppercase leading-tight tracking-tight md:text-3xl">
                  {exp.company}
                </h3>
                <div className="text-sm font-bold uppercase tracking-[0.14em] text-gray-500">
                  {exp.location}
                </div>
              </div>

              <div className="md:col-span-5">
                <h4 className="mb-4 text-xl font-bold md:text-2xl">{exp.role}</h4>
                <p className="max-w-3xl text-base leading-relaxed text-gray-400 md:text-lg">
                  {exp.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.outcomes.map((outcome) => (
                    <span key={outcome} className="border border-white/12 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-white/58 group-hover:border-[#FF0000]/60 group-hover:text-white">
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
