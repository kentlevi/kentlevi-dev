import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section 
      className="relative w-full h-[100svh] flex flex-col items-center justify-between overflow-hidden"
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0 bg-[#E82B00]">
        <img 
          src="https://designbybrandin.com/wp-content/uploads/2026/02/hero.webp" 
          className="absolute w-full h-full object-cover"
          alt="" 
        />
        <video 
          className="absolute w-full h-full object-cover mix-blend-normal"
          src="https://designbybrandin.com/wp-content/uploads/2026/02/Hero.mp4"
          width="1800" height="700"
          preload="auto" loop autoPlay muted playsInline
        />
        {/* Overlay gradient */}
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(0deg, rgb(232,43,0) 10%, rgba(255,85,19,0) 90%)' }}
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-between px-6 lg:px-[60px] pb-[60px]">
        {/* Main Content */}
        <div className="h-full flex-grow flex items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-0 mt-20 text-center">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[4vw] md:text-[2vw] leading-tight font-medium tracking-tight text-white m-0 uppercase"
            >
              Creative Developer
            </motion.h1>
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[17vw] md:text-[12vw] leading-[1.1] font-bold text-white uppercase tracking-tight"
            >
              Kent Levi
            </motion.h1>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-0 mt-8 border-t border-white/20 pt-8 md:pt-0 md:border-none">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm md:text-[12px] font-medium tracking-wide text-center md:text-left flex-1"
          >
            Based in Cebu City, Philippines
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm md:text-[12px] font-medium tracking-wide text-center flex-1"
          >
            Specializing in Frontend, Vue.js, &amp; AI Integration
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-sm md:text-[12px] font-medium tracking-wide text-center md:text-right flex-1"
          >
            4+ Years Experience
          </motion.p>
        </div>
      </div>
    </section>
  );
}
