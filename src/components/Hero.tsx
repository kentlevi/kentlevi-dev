import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import 'sakura-js/dist/sakura.css';

type SakuraColor = {
  gradientColorStart: string;
  gradientColorEnd: string;
  gradientColorDegree: number;
};

type SakuraOptions = {
  className: string;
  fallSpeed: number;
  maxSize: number;
  minSize: number;
  delay: number;
  colors: SakuraColor[];
};

type SakuraController = {
  stop: (graceful?: boolean) => void;
};

function createSakura(selector: string, options: SakuraOptions): SakuraController {
  const host = document.querySelector<HTMLElement>(selector);

  if (!host) {
    return { stop: () => undefined };
  }

  const createPetal = () => {
    const petal = document.createElement('div');
    const size = options.minSize + Math.random() * (options.maxSize - options.minSize);
    const color = options.colors[Math.floor(Math.random() * options.colors.length)];
    const fallDuration = (8 + Math.random() * 5) * options.fallSpeed;
    const sway = Math.floor(Math.random() * 9);
    const blow = ['blow-soft-left', 'blow-medium-left', 'blow-soft-right', 'blow-medium-right'][Math.floor(Math.random() * 4)];

    petal.className = `sakura ${options.className}`;
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.top = '-24px';
    petal.style.zIndex = '20';
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 0.72}px`;
    petal.style.borderRadius = '70% 16% 70% 16%';
    petal.style.background = `linear-gradient(${color.gradientColorDegree}deg, ${color.gradientColorStart}, ${color.gradientColorEnd})`;
    petal.style.animation = `fall ${fallDuration}s linear forwards, ${blow} ${fallDuration}s linear forwards, sway-${sway} 3s ease-in-out infinite`;

    host.appendChild(petal);
    window.setTimeout(() => petal.remove(), fallDuration * 1000);
  };

  const intervalId = window.setInterval(createPetal, options.delay);
  createPetal();

  return {
    stop: (graceful = false) => {
      window.clearInterval(intervalId);

      if (!graceful) {
        host.querySelectorAll<HTMLElement>(`.${options.className}`).forEach((petal) => petal.remove());
      }
    },
  };
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || !heroRef.current) {
      return;
    }

    heroRef.current.id = 'hero-sakura-host';

    const sakura = createSakura('#hero-sakura-host', {
      className: 'hero-sakura',
      fallSpeed: 1.35,
      maxSize: 18,
      minSize: 10,
      delay: 520,
      colors: [
        {
          gradientColorStart: 'rgba(255, 255, 255, 0.92)',
          gradientColorEnd: 'rgba(255, 0, 0, 0.88)',
          gradientColorDegree: 110,
        },
        {
          gradientColorStart: 'rgba(255, 0, 0, 0.82)',
          gradientColorEnd: 'rgba(26, 26, 26, 0.9)',
          gradientColorDegree: 125,
        },
        {
          gradientColorStart: 'rgba(255, 255, 255, 0.78)',
          gradientColorEnd: 'rgba(8, 8, 8, 0.84)',
          gradientColorDegree: 135,
        },
      ],
    });

    return () => {
      sakura.stop();
    };
  }, [prefersReducedMotion]);

  return (
    <section ref={heroRef} className="relative flex h-[100svh] w-full items-center justify-between overflow-hidden bg-[#080808]">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src="/images/hero-samurai.jpeg"
            className="h-full w-full object-cover object-[68%_center] brightness-[0.82] contrast-[1.04] saturate-[0.94]"
            alt="Samurai hero background"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_32%,rgba(255,0,0,0.09),transparent_22%),radial-gradient(circle_at_22%_72%,rgba(255,255,255,0.05),transparent_26%),linear-gradient(180deg,rgba(26,26,26,0.01)_0%,rgba(8,8,8,0.04)_100%)]" />

        <motion.div
          className="pointer-events-none absolute left-[34%] top-[17%] z-[10] h-[28vh] w-[26vw] rounded-full blur-3xl"
          animate={
            prefersReducedMotion
              ? { opacity: 0.14 }
              : { opacity: [0.1, 0.18, 0.12], scale: [1, 1.06, 1], x: [0, 16, 0], y: [0, -8, 0] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0.8 }
              : { duration: 8, repeat: Infinity, ease: 'easeInOut' }
          }
          style={{ background: 'radial-gradient(circle, rgba(255,0,0,0.16) 0%, rgba(255,255,255,0.06) 45%, rgba(255,0,0,0) 72%)' }}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[17] h-[30vh] bg-gradient-to-t from-[#080808] via-[#080808]/58 to-transparent" />

        <div
          className="pointer-events-none absolute inset-0 z-[18] opacity-[0.04] mix-blend-screen"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18) 0 0.7px, transparent 0.8px), radial-gradient(circle at 80% 30%, rgba(255,0,0,0.14) 0 0.7px, transparent 0.8px)',
            backgroundSize: '22px 22px, 29px 29px',
            backgroundPosition: '0 0, 10px 12px',
          }}
        />
      </div>

      <div className="pointer-events-none relative z-30 flex h-full w-full flex-col justify-between px-6 pb-[60px] lg:px-[60px]">
        <div className="relative flex h-full flex-grow items-center justify-center">
          <div className="relative mt-20 flex flex-col items-center justify-center space-y-0 text-center">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative z-10 m-0 font-mono text-[4vw] font-medium uppercase leading-tight tracking-widest text-[#FF0000] drop-shadow-md md:text-[2vw]"
            >
              Creative Developer
            </motion.h1>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 text-[17vw] font-black uppercase leading-[0.9] tracking-tighter text-white drop-shadow-2xl md:text-[12vw]"
            >
              Kent Levi
            </motion.h1>
          </div>
        </div>

        <div className="relative mt-8 flex w-full flex-col items-center gap-6 border-t border-white/20 pt-8 md:flex-row md:items-end md:gap-0 md:border-none md:pt-0">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex-1 text-center text-sm font-medium tracking-wide md:text-left md:text-[12px]"
          >
            Based in Cebu City, Philippines
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex-1 text-center text-sm font-medium tracking-wide text-white/70 md:text-[12px]"
          >
            Specializing in Frontend, Vue.js, &amp; AI Integration
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex-1 text-center text-sm font-medium tracking-wide md:text-right md:text-[12px]"
          >
            4+ Years Experience
          </motion.p>
        </div>
      </div>
    </section>
  );
}
