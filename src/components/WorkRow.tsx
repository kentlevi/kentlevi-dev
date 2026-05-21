import { motion } from 'motion/react';
import type { WorkItem } from '../data/projects';

type Props = {
  item: WorkItem;
  index: number;
  onOpen: (item: WorkItem) => void;
};

export default function WorkRow({ item, index, onOpen }: Props) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(item)}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.65, delay: index * 0.07 }}
      aria-label={`Open ${item.title} details`}
      className="group relative grid w-full min-h-[128px] cursor-pointer border-b border-white/14 py-6 text-left transition-colors duration-300 hover:bg-white/[0.015] md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.42fr)_minmax(0,0.9fr)] md:items-center md:gap-10 md:py-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {item.image && (
          <img
            src={item.image}
            alt=""
            aria-hidden="true"
            className="h-full w-full scale-105 object-cover opacity-0 transition-[opacity,transform,filter] duration-500 ease-out group-hover:scale-100 group-hover:opacity-35 group-hover:brightness-[0.55]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/92 via-[#080808]/76 to-[#080808]/84 opacity-100 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-[#6f0000]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="relative z-10 flex min-w-0 items-start justify-between gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 18, color: 'rgba(255,255,255,0.42)' }}
          whileInView={{ opacity: 1, y: 0, color: 'rgba(255,255,255,1)' }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.75, delay: 0.08 + index * 0.08, ease: 'easeOut' }}
          className="min-w-0 max-w-full text-[clamp(2rem,11vw,3.9rem)] font-medium uppercase leading-[0.95] tracking-[-0.035em] transition-[color,text-shadow,transform] duration-300 group-hover:text-white group-focus-visible:text-white group-hover:[text-shadow:0_0_24px_rgba(255,255,255,0.16)] group-focus-visible:[text-shadow:0_0_24px_rgba(255,255,255,0.16)] sm:text-[clamp(2.35rem,8vw,3.9rem)] md:whitespace-nowrap md:text-[clamp(2rem,4.1vw,3.9rem)] md:tracking-[-0.04em]"
        >
          {item.title}
        </motion.h2>
      </div>

      <div className="relative z-10 mt-6 md:mt-2">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-white/46">
          {item.platform}
        </p>
      </div>

      <div className="relative z-10 mt-6 flex flex-wrap items-center gap-2 md:mt-0 md:justify-self-start">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="border border-white/14 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/58 transition-colors duration-300 group-hover:border-white/26 group-hover:text-white/78"
          >
            {tag}
          </span>
        ))}
        <span
          aria-hidden
          className="ml-1 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white/40 transition-colors duration-300 group-hover:text-[#ff5a5a]"
        >
          View →
        </span>
      </div>
    </motion.button>
  );
}
