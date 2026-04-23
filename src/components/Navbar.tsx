import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('work');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionIds = navItems.map((item) => item.href.replace('#', ''));
      let current: string | undefined;

      for (let i = sectionIds.length - 1; i >= 0; i -= 1) {
        const id = sectionIds[i];
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= 180) {
          current = id;
          break;
        }
      }

      if (current) {
        setActiveSection(current);
      }
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
      className={`fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-6 transition-all duration-300 lg:px-12 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <a href="#" className="group flex items-center gap-3 mix-blend-difference">
        <span className="h-2.5 w-2.5 bg-[#FF0000] transition-transform duration-300 group-hover:scale-150" />
        <span className="whitespace-nowrap text-xl font-bold uppercase tracking-tighter text-white md:text-2xl">
          Kent.
        </span>
      </a>

      <div className="hidden items-center gap-7 mix-blend-difference md:flex">
        {navItems.map((item) => {
          const id = item.href.replace('#', '');
          const isActive = activeSection === id;

          return (
            <a
              key={item.href}
              href={item.href}
              className={`relative text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-opacity duration-300 ${
                isActive ? 'opacity-100' : 'opacity-48 hover:opacity-100'
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-2 left-0 h-px bg-[#FF0000] transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0'
                }`}
              />
            </a>
          );
        })}
      </div>

      <a
        href="#contact"
        className="rounded-full border border-white/45 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-[#FF0000] hover:bg-[#FF0000] md:px-6"
      >
        Start
      </a>
    </motion.nav>
  );
}
