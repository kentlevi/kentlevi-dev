import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.12, 0.75, 0.4, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 px-6 py-6 lg:px-12 flex justify-between items-center transition-all duration-300 ${
        scrolled ? 'bg-transparent py-4' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center cursor-pointer mix-blend-difference">
        <span className="text-xl md:text-2xl font-bold tracking-tighter uppercase text-white whitespace-nowrap">
          KENT.
        </span>
      </div>
      
      <div className="flex items-center space-x-6 mix-blend-difference">
        <a 
          href="#contact" 
          className="px-6 py-2 border border-white/50 text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors rounded-full"
        >
          Connect With Me
        </a>
        <button className="text-white w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
