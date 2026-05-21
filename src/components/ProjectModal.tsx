import { motion } from 'motion/react';
import { useEffect } from 'react';
import type Lenis from 'lenis';
import type { WorkItem } from '../data/projects';

export default function ProjectModal({ item, onClose }: { item: WorkItem; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    lenis?.stop();

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
      lenis?.start();
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto overscroll-contain bg-black/80 backdrop-blur-md px-4 py-6 sm:py-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} project details`}
      data-lenis-prevent
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
        className="relative my-auto w-[min(96vw,960px)] border border-white/12 bg-[#0a0a0a] text-white shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/60 text-white/80 transition hover:border-white/40 hover:text-white"
        >
          <span aria-hidden className="text-lg leading-none">×</span>
        </button>

        <div className="relative overflow-hidden border-b border-white/10 bg-[#111]">
          {item.image ? (
            <img
              src={item.image}
              alt={`${item.title} screenshot`}
              className="block h-[200px] w-full object-cover object-top sm:h-[280px] md:h-[340px]"
            />
          ) : (
            <div className="flex h-[200px] w-full items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#0e0e0e] to-[#1a0606] sm:h-[280px] md:h-[340px]">
              <span className="font-mono text-xs uppercase tracking-[0.32em] text-white/40">
                Preview coming soon
              </span>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        </div>

        <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[#ff5a5a]">
            {item.platform}
          </p>
          <h3 className="mt-4 text-[clamp(1.85rem,5vw,3rem)] font-black uppercase leading-[0.95] tracking-[-0.035em] text-white">
            {item.title}
          </h3>

          <div className="mt-6 grid grid-cols-2 gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/55 sm:max-w-md">
            <div className="border border-white/10 p-3">
              <p className="text-white/40">Role</p>
              <p className="mt-1 text-white/85">{item.role}</p>
            </div>
            <div className="border border-white/10 p-3">
              <p className="text-white/40">Year</p>
              <p className="mt-1 text-white/85">{item.year}</p>
            </div>
          </div>

          <p className="mt-7 text-base leading-relaxed text-white/72 md:text-lg">
            {item.summary}
          </p>

          <p className="mt-5 text-sm leading-relaxed text-white/58 md:text-base">
            {item.description}
          </p>

          <div className="mt-8">
            <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">
              Highlights
            </p>
            <ul className="space-y-2.5 border-t border-white/10">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 border-b border-white/10 py-3 text-sm leading-relaxed text-white/75 md:text-base"
                >
                  <span aria-hidden className="mt-2 inline-block h-[5px] w-[5px] shrink-0 bg-[#ff5a5a]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="border border-white/14 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/65"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-3 border border-white/30 px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-white transition hover:border-[#ff5a5a] hover:text-[#ff5a5a]"
          >
            Launch Project
            <span aria-hidden>↗</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
