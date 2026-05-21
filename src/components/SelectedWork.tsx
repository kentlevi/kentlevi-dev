import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { featuredWorkItems, type WorkItem } from '../data/projects';
import ProjectModal from './ProjectModal';
import WorkRow from './WorkRow';

export default function SelectedWork() {
  const [activeItem, setActiveItem] = useState<WorkItem | null>(null);

  return (
    <section id="work" className="relative overflow-hidden bg-[#0a0a0a] px-5 py-20 text-white sm:py-24 lg:px-12">
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
            className="max-w-[12ch] text-[clamp(2.35rem,5.6vw,5.9rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-white sm:tracking-[-0.05em]"
          >
            Selected Work
          </motion.h2>
        </div>

        <div className="border-t border-white/14">
          {featuredWorkItems.map((item, index) => (
            <WorkRow key={item.slug} item={item} index={index} onOpen={setActiveItem} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-white/55 md:text-base">
            More builds across e-commerce, hospitality, and rental platforms live on the full projects index.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 border border-white/30 px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-white transition hover:border-[#ff5a5a] hover:text-[#ff5a5a]"
          >
            View all projects
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {activeItem && <ProjectModal item={activeItem} onClose={() => setActiveItem(null)} />}
      </AnimatePresence>
    </section>
  );
}
