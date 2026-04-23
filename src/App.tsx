import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Lenis from 'lenis';
import { default as Navbar } from './components/Navbar';
import { default as Hero } from './components/Hero';
import { default as SelectedWork } from './components/SelectedWork';
import { default as Services } from './components/Services';
import { default as Experience } from './components/Experience';
import { default as Footer } from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-[#FFFFFF] font-sans selection:bg-[#FF0000] selection:text-[#FFFFFF]">
      {/* Global Noise Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
          backgroundRepeat: 'repeat',
          backgroundPosition: '0 0',
          backgroundSize: '6px 6px',
        }}
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FF0000] origin-left z-50 mix-blend-normal"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <SelectedWork />
        <Services />
        <Experience />
      </main>
      
      <Footer />
    </div>
  );
}
