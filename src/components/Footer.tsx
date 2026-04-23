import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function useScrambleText(text: string, trigger: number, enabled: boolean) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!enabled) {
      setDisplayText(text);
      return;
    }

    let frame = 0;
    const letters = text.split('');
    const intervalId = window.setInterval(() => {
      frame += 1;
      const reveal = frame / 3;

      const next = letters
        .map((char, index) => {
          if (char === ' ' || char === "'") {
            return char;
          }

          if (index < reveal) {
            return char;
          }

          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        })
        .join('');

      setDisplayText(next);

      if (reveal >= letters.length) {
        window.clearInterval(intervalId);
        setDisplayText(text);
      }
    }, 40);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [enabled, text, trigger]);

  return displayText;
}

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const footerCtaRef = useRef<HTMLAnchorElement | null>(null);
  const [scrambleTick, setScrambleTick] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const scrambledLabel = useScrambleText("Let's Build", scrambleTick, !prefersReducedMotion && scrambleTick > 0);

  useEffect(() => {
    if (prefersReducedMotion || !footerCtaRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setScrambleTick((value) => value + 1);
        } else if (!entry.isIntersecting && isVisible) {
          setIsVisible(false);
        }
      },
      { threshold: 0.55 },
    );

    observer.observe(footerCtaRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, prefersReducedMotion]);

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
          ref={footerCtaRef}
          href="mailto:kentlevicadungog@gmail.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.12, 0.75, 0.4, 1] }}
          onClick={!prefersReducedMotion ? () => setScrambleTick((value) => value + 1) : undefined}
          className="group relative mb-12 inline-block w-full text-center"
        >
          <span className="block whitespace-nowrap text-center text-[16vw] font-bold uppercase leading-[0.82] tracking-tight text-[#FFFFFF] transition-colors duration-500 ease-out group-hover:text-[#FF0000]">
            {prefersReducedMotion ? "Let's Build" : scrambledLabel}
          </span>
        </motion.a>

        <div className="mt-24 flex w-full flex-col items-center justify-between gap-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-[#FFFFFF]/55 md:mt-32 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Kent Levi Cadungog.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-6 md:mt-0">
            <a href="#" className="transition-colors hover:text-white">
              LinkedIn
            </a>
            <a href="mailto:kentlevicadungog@gmail.com" className="transition-colors hover:text-white">
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
