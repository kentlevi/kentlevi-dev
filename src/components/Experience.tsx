import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Frontend & Integration Developer',
    company: 'Glophics Web Design & Advertising Inc.',
    location: 'Cebu City, Philippines',
    date: 'April 2025 - Present',
    description: 'Architecting high-traffic, SEO-optimized Vue.js/Nuxt.js applications. Building custom UI component libraries and optimizing Core Web Vitals to improve rendering metrics across major client portfolios.'
  },
  {
    role: 'Software Developer',
    company: 'Dinnox IT Solutions',
    location: 'Cebu City, Philippines',
    date: 'January 2023 - April 2025',
    description: 'Engineered high-performance interfaces and facilitated smooth data flow by integrating RESTful APIs with Django/Python backend systems. Improved maintainability by migrating legacy code to modern component architectures.'
  },
  {
    role: 'Software Developer',
    company: 'The Little Ripple Company Pty Ltd',
    location: 'Australia (Remote)',
    date: 'November 2021 - January 2023',
    description: 'Developed automated e-commerce and scheduling systems. Debugged legacy Python/Django architectures to increase application reliability and severely reduce server response times for critical business operations.'
  }
];

export default function Experience() {
  return (
    <section className="py-24 overflow-hidden w-full bg-[#111111] flex flex-col relative text-white">
      <div className="relative w-full overflow-hidden flex whitespace-nowrap mb-24">
        {/* We use two sets of text to create a seamless infinite scroll effect */}
        <motion.div 
          className="flex whitespace-nowrap text-[22vw] md:text-[20vw] font-bold text-white/5 uppercase tracking-tighter leading-none"
          animate={{ x: ["0%", "-50%"] }} // Adjust the translate value based on the text width
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15
          }}
        >
          <span className="px-[4vw]">PROFESSIONAL EXPERIENCE</span>
          <span className="px-[4vw]">PROFESSIONAL EXPERIENCE</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col gap-12 md:gap-16">
          {experiences.map((exp, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.8, delay: index * 0.1 }}
               className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-t border-[#333333] pt-8 md:pt-12 hover:border-[#E82B00] transition-colors duration-500"
             >
                <div className="md:col-span-4 flex flex-col">
                   <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2">{exp.company}</h3>
                   <div className="text-[#E82B00] font-mono text-sm uppercase tracking-widest mb-1">{exp.date}</div>
                   <div className="text-gray-500 text-sm uppercase tracking-widest">{exp.location}</div>
                </div>
                <div className="md:col-span-8 flex flex-col justify-start">
                   <h4 className="text-xl md:text-2xl font-bold mb-4">{exp.role}</h4>
                   <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl">
                     {exp.description}
                   </p>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
