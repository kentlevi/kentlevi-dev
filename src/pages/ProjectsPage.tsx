import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectModal from '../components/ProjectModal';
import WorkRow from '../components/WorkRow';
import Footer from '../components/Footer';
import { workItems, type WorkItem } from '../data/projects';

export default function ProjectsPage() {
  const [activeItem, setActiveItem] = useState<WorkItem | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-[#0a0a0a] px-5 pb-20 pt-32 text-white sm:pb-24 sm:pt-40 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.035),transparent_30%)]" />

        <div className="relative mx-auto max-w-[1920px]">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-white/55 transition hover:text-white"
          >
            <span aria-hidden>←</span> Back to home
          </Link>

          <div className="mb-16 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-16 lg:mb-20">
            <div className="min-w-0">
              <p className="mb-3 text-lg font-bold uppercase tracking-tight text-white sm:text-[1.7rem]">
                All Projects
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55 md:text-base">
                A full index across commerce, hospitality, rental, and experimental builds — click any project to see role, stack, and highlights.
              </p>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="max-w-[14ch] text-[clamp(2.35rem,5.6vw,5.9rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-white sm:tracking-[-0.05em]"
            >
              The Full Index
            </motion.h1>
          </div>

          <div className="border-t border-white/14">
            {workItems.map((item, index) => (
              <WorkRow key={item.slug} item={item} index={index} onOpen={setActiveItem} />
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm leading-relaxed text-white/55 md:text-base">
              Want to talk through a build? Send a note and let's see if the shape fits.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-3 border border-white/30 px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-white transition hover:border-[#ff5a5a] hover:text-[#ff5a5a]"
            >
              Start a project
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <AnimatePresence>
          {activeItem && <ProjectModal item={activeItem} onClose={() => setActiveItem(null)} />}
        </AnimatePresence>
      </section>

      <Footer />
    </>
  );
}
