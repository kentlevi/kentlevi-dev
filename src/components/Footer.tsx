import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#000000] border-t border-[#333333] pt-32 pb-12 overflow-hidden px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.12, 0.75, 0.4, 1] }}
          className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-40 mb-12 text-center text-white"
        >
          New Business Inquiries
        </motion.p>
        
        <motion.a 
          href="mailto:hello@designbybrandin.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.12, 0.75, 0.4, 1] }}
          className="group relative inline-block text-center w-full mb-12"
        >
          <span className="text-[18vw] leading-none font-bold block uppercase group-hover:text-[#E82B00] text-white transition-colors duration-500 ease-out whitespace-nowrap">
            Let's Talk
          </span>
        </motion.a>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-[#999999] mt-32">
          <p>© {new Date().getFullYear()} Kent Levi Cadungog.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="absolute left-0 bottom-12 hidden lg:flex items-end space-x-12 opacity-30 text-white">
           <div className="vertical-label text-[9px] uppercase tracking-[0.5em] font-bold h-32 flex justify-center">
             Scroll to explore
           </div>
        </div>
      </div>
    </footer>
  );
}
