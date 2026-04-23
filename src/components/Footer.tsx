import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer id="contact" className="overflow-hidden border-t border-[#1A1A1A] bg-[#080808] px-6 pb-12 pt-32 lg:px-12">
      <div className="relative flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.12, 0.75, 0.4, 1] }}
          className="mb-8 max-w-3xl text-center text-[10px] font-bold uppercase leading-relaxed tracking-[0.18em] text-[#FFFFFF]/58 sm:tracking-[0.28em]"
        >
          Available for select product builds, technical partnerships, and AI-enabled workflows.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.12, 0.75, 0.4, 1] }}
          className="mb-12 max-w-2xl text-center text-base font-medium leading-relaxed text-[#FFFFFF]/62 md:text-lg"
        >
          Bring the product challenge, platform idea, or automation bottleneck. I will help turn it into a fast, polished, production-ready experience.
        </motion.p>

        <motion.a
          href="mailto:hello@designbybrandin.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.12, 0.75, 0.4, 1] }}
          className="group relative mb-12 inline-block w-full text-center"
        >
          <span className="block whitespace-nowrap text-center text-[16vw] font-bold uppercase leading-[0.82] tracking-tight text-[#FFFFFF] transition-colors duration-500 ease-out group-hover:text-[#FF0000]">
            Let's Build
          </span>
        </motion.a>

        <div className="mt-24 flex w-full flex-col items-center justify-between gap-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-[#FFFFFF]/55 md:mt-32 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Kent Levi Cadungog.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-6 md:mt-0">
            <a href="#" className="transition-colors hover:text-white">
              LinkedIn
            </a>
            <a href="mailto:hello@designbybrandin.com" className="transition-colors hover:text-white">
              Email
            </a>
            <a href="#work" className="transition-colors hover:text-white">
              Work
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 hidden items-end space-x-12 text-white opacity-30 lg:flex">
          <div className="vertical-label flex h-32 justify-center text-[9px] font-bold uppercase tracking-[0.5em]">
            Built to perform
          </div>
        </div>
      </div>
    </footer>
  );
}
