import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section 
      className="relative w-full h-[100svh] flex flex-col items-center justify-between overflow-hidden bg-[#D31208]"
    >
      {/* Background graphic layers: The "Ghost" Samurai aesthetic */}
      <div className="absolute inset-0 z-0">
        
        {/* Massive atmospheric background image using mix-blend-multiply for ink-silhouette effect */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute right-0 bottom-0 w-[150%] md:w-full h-full flex items-end justify-center md:justify-end opacity-90"
        >
           {/* Samurai placeholder converted to stark black and red graphic using CSS contrast & multiply */}
           <img 
             src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=2000" 
             className="w-full h-full object-cover object-center grayscale contrast-[1.8] mix-blend-multiply brightness-[0.7]"
             style={{ maskImage: 'linear-gradient(to top, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 100%)' }}
             alt="Samurai Shadow" 
           />
        </motion.div>

        {/* Abstract grunge/noise texture for the gritty comic book / ink wash feel */}
        <div className="absolute inset-0 opacity-[0.15] mix-blend-color-burn pointer-events-none z-10" style={{ backgroundImage: "url('https://futurecraft.agency/wp-content/uploads/2024/08/noise.gif')", backgroundSize: '150px' }}></div>
        
        {/* Dramatic bottom vignette gradient to anchor the text */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Deep red atmospheric haze */}
        <div className="absolute inset-0 z-10 mix-blend-overlay bg-gradient-to-r from-[#D31208]/50 to-transparent pointer-events-none"></div>

      </div>

      <div className="relative z-30 w-full h-full flex flex-col justify-between px-6 lg:px-[60px] pb-[60px]">
        {/* Main Content */}
        <div className="h-full flex-grow flex items-center justify-center relative">
          <div className="flex flex-col items-center justify-center space-y-0 mt-20 text-center relative">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[4vw] md:text-[2vw] leading-tight font-medium tracking-widest text-[#FF453A] drop-shadow-md m-0 uppercase font-mono"
            >
              Creative Developer
            </motion.h1>
            
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[17vw] md:text-[12vw] leading-[0.9] font-black text-white uppercase tracking-tighter drop-shadow-2xl"
            >
              Kent Levi
            </motion.h1>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-0 mt-8 border-t border-white/20 pt-8 md:pt-0 md:border-none relative">
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
            className="text-sm md:text-[12px] font-medium tracking-wide text-center flex-1 text-white/70"
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
