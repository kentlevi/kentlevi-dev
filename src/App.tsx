import { Suspense, lazy, useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import Lenis from 'lenis';
import { default as Navbar } from './components/Navbar';
import { default as Hero } from './components/Hero';

const SelectedWork = lazy(() => import('./components/SelectedWork'));
const Services = lazy(() => import('./components/Services'));
const Experience = lazy(() => import('./components/Experience'));
const Footer = lazy(() => import('./components/Footer'));

function getSaveDataPreference() {
  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean };
  };

  return Boolean(nav.connection?.saveData);
}

export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [enableSmoothScroll, setEnableSmoothScroll] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const saveData = getSaveDataPreference();
    const prefersCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

    setEnableSmoothScroll(!prefersReducedMotion && !saveData && !prefersCoarsePointer);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!enableSmoothScroll) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    let frameId = 0;

    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [enableSmoothScroll]);

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#E82B00] selection:text-[#FFFFFF]">
      <div className="noise-overlay fixed inset-0 pointer-events-none z-[9999]" aria-hidden="true" />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#E82B00] origin-left z-50 mix-blend-normal"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Suspense fallback={null}>
          <SelectedWork />
          <Services />
          <Experience />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}
