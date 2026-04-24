import { motion } from 'motion/react';

type WorkItem = {
  title: string;
  platform: string;
  tags: string[];
  href: string;
  image: string;
};

const workItems: WorkItem[] = [
  {
    title: 'MUSTICKER',
    platform: 'Bilingual Commerce',
    tags: ['Vue.js', 'Nuxt.js', 'Frontend Architecture'],
    href: 'https://musticker.com/us',
    image: '/images/portfolio/musticker.jpg',
  },
  {
    title: 'POSTCARDS FROM MARS',
    platform: 'Experimental Motion',
    tags: ['GSAP', 'Three.js', 'Vanilla Frontend'],
    href: 'https://postcards-from-mars-rho.vercel.app/',
    image: '/images/portfolio/postcards-from-mars.jpg',
  },
  {
    title: 'ALL STICKER PRINTING',
    platform: 'Storefront Network',
    tags: ['Vue.js', 'Nuxt.js', 'SEO Metadata'],
    href: 'https://www.allstickerprinting.com/',
    image: '/images/portfolio/all-sticker-printing.jpg',
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="relative overflow-hidden bg-[#0a0a0a] px-5 py-24 text-white lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.035),transparent_30%)]" />

      <div className="relative mx-auto max-w-[1920px]">
        <div className="mb-16 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-16 lg:mb-20">
          <div className="min-w-0">
            <p className="mb-3 text-lg font-bold uppercase tracking-tight text-white sm:text-[1.7rem]">
              Featured Work
            </p>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-[12ch] text-[clamp(2.6rem,5.6vw,5.9rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-white"
          >
            Selected Work
          </motion.h2>
        </div>

        <div className="border-t border-white/14">
          {workItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.65, delay: index * 0.07 }}
              className="group relative grid min-h-[128px] border-b border-white/14 py-6 transition-colors duration-300 hover:bg-white/[0.015] md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.42fr)_minmax(0,0.9fr)] md:items-center md:gap-10 md:py-8"
            >
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full scale-105 object-cover opacity-0 transition-[opacity,transform,filter] duration-500 ease-out group-hover:scale-100 group-hover:opacity-35 group-hover:brightness-[0.55]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/92 via-[#080808]/76 to-[#080808]/84 opacity-100 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-[#6f0000]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="relative z-10 flex min-w-0 items-start justify-between gap-6">
                <motion.h2
                  initial={{ opacity: 0, y: 18, color: 'rgba(255,255,255,0.42)' }}
                  whileInView={{ opacity: 1, y: 0, color: 'rgba(255,255,255,1)' }}
                  viewport={{ once: true, margin: '-8%' }}
                  transition={{ duration: 0.75, delay: 0.08 + index * 0.08, ease: 'easeOut' }}
                  className="min-w-0 whitespace-nowrap text-[clamp(2rem,4.1vw,3.9rem)] font-medium uppercase leading-[0.95] tracking-[-0.04em] transition-[color,text-shadow,transform] duration-300 group-hover:text-white group-focus-visible:text-white group-hover:[text-shadow:0_0_24px_rgba(255,255,255,0.16)] group-focus-visible:[text-shadow:0_0_24px_rgba(255,255,255,0.16)]"
                >
                  {item.title}
                </motion.h2>
              </div>

              <div className="relative z-10 mt-6 md:mt-2">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-white/46">
                  {item.platform}
                </p>
              </div>

              <div className="relative z-10 mt-6 flex flex-wrap gap-2 md:mt-0 md:justify-self-start">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/14 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/58 transition-colors duration-300 group-hover:border-white/26 group-hover:text-white/78"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
