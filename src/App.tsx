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
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#E82B00] selection:text-[#FFFFFF]">
      {/* Global Noise Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.04]"
        style={{
          backgroundImage: "url('https://futurecraft.agency/wp-content/uploads/2024/08/noise.gif')",
          backgroundRepeat: 'repeat',
          backgroundPosition: '0 0',
          backgroundSize: '480px',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#E82B00] origin-left z-50 mix-blend-normal"
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
