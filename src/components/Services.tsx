import { motion } from 'motion/react';

const capabilities = [
  {
    id: "01",
    title: 'Frontend Engineering',
    headline: 'Performance-Driven Interfaces Built for Scale',
    description: 'I architect responsive, SEO-optimized web applications specializing in Vue.js, Nuxt.js, and React. My focus is on turning complex backend systems into intuitive, high-performance UI components that render quickly and rank perfectly.',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=2000', // Cinematic Samurai
    items: [
      'Vue.js (2/3) & Nuxt.js', 'React & TypeScript', 'Tailwind CSS & SCSS',
      'State Management (Pinia/Vuex)', 'TanStack Query', 'Component-Based Architecture',
      'SSR & SSG Implementation'
    ],
    bgGradient: 'from-[#F12E03] to-[#FF5513]'
  },
  {
    id: "02",
    title: 'AI / ML Integration',
    headline: 'Automating Workflows with Agentic Intelligence',
    description: 'I design and deploy multi-model AI platforms using OpenAI, Google Gemini, and Anthropic Claude. By building intelligent data pipelines and integrating LLM workflow automation, I streamline redundant tasks and accelerate output.',
    image: 'https://images.unsplash.com/photo-1535378273068-9bb25ce15e21?auto=format&fit=crop&q=80&w=2000', // Robot Mech Head
    items: [
      'Multi-Model AI Integration', 'LLM Workflow Automation', 'Prompt Engineering',
      'Agentic Platforms (Antigravity)', 'AI Tools (Cursor)', 'Automated SEO & Content Generation',
      'Event-Driven AI Publishing'
    ],
    bgGradient: 'from-[#E82B00] to-[#E82B00]' 
  },
  {
    id: "03",
    title: 'Backend Architecture',
    headline: 'Robust Data Systems & APIs That Power Growth',
    description: 'Beyond the frontend, I engineer reliable backend infrastructure primarily utilizing Python and Django. I specialize in RESTful API development, PostgreSQL database schemas, and event-driven automation using Redis and BullMQ.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000', // Motherboard / Tech
    items: [
      'Python & Django', 'RESTful API Integration', 'PostgreSQL Schema Design', 
      'Redis & BullMQ', 'Data Flow Optimization', 'PHP & Java Awareness',
      'Agile/Scrum CI/CD Workflows'
    ],
    bgGradient: 'from-[#F12E03] to-[#FF5513]'
  },
  {
    id: "04",
    title: 'Performance & SEO',
    headline: 'Optimized for Core Web Vitals and User Engagement',
    description: 'I take a deeply technical approach to Core Web Vitals optimization to drive organic traffic. From dynamic metadata handling to asset optimization, lazy loading, and code-splitting, I ensure websites pass technical audits with flying colors.',
    image: 'https://images.unsplash.com/photo-1620025732296-6d1a938c35af?auto=format&fit=crop&q=80&w=2000', // Speed lines / Performance
    items: [
      'Core Web Vitals Optimization', 'LCP, CLS, INP Improvement', 'Asset Optimization',
      'Dynamic SEO Metadata', 'Code-Splitting', 'Lazy Loading',
      'Responsive Web Accessibility (WCAG)'
    ],
    bgGradient: 'from-[#E82B00] to-[#E82B00]'
  }
];

export default function Services() {
  return (
    <section className="bg-[#000000] text-white w-full border-t border-[#333333] mt-12 bg-black relative" id="expertise">
      {/* Intro Section */}
      <div className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-20 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <p className="text-sm border-b border-transparent hover:border-white w-max cursor-pointer transition-colors duration-300">My Expertise</p>
            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tight text-white mb-2 pb-4">
              専門分野
            </h2>
          </div>
          <div className="flex items-end">
            <h2 className="text-4xl md:text-[3.5rem] font-bold uppercase tracking-tighter text-white leading-[1.1] pb-4">
              Crafting Digital Experiences Through Vision, Design, and AI
            </h2>
          </div>
        </div>
      </div>

      {/* The Stacked Panels */}
      <div className="w-full pb-0 bg-transparent">
        {capabilities.map((cap, i) => (
          <div key={cap.id} className="relative w-full">
            
            {/* The Sticky Banner Container */}
            <div className={`sticky ${i === 0 ? 'top-0' : 'top-0'} w-full h-[75vh] flex flex-col justify-end overflow-hidden z-0 bg-[#F43C12]`}>
              
              {/* Massive background japanese characters - SOLID BLACK */}
              <div className="absolute inset-0 flex items-center justify-center md:justify-end pr-0 md:pr-[5%] pointer-events-none z-0 overflow-hidden">
                <span className="text-[120vw] md:text-[80vw] font-black text-[#0B0B0B] leading-none tracking-tighter transform md:translate-x-1/4 select-none">
                  {['ン ク', 'ョ ン', 'デ タ', 'パ フ'][i] || 'チ ク'}
                </span>
              </div>

              {/* Character Image matching exact cinematic reference styling */}
              {cap.image && (
                <div className="absolute top-0 right-0 w-full md:w-[65%] h-full z-10 pointer-events-none flex justify-end items-center overflow-hidden">
                  <motion.div
                    initial={{ scale: 1.05, opacity: 0, x: 50 }}
                    whileInView={{ scale: 1, opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-[120%] md:w-[110%] h-full relative"
                    style={{
                      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
                      maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)'
                    }}
                  >
                    <img 
                      src={cap.image} 
                      alt={cap.title} 
                      className="w-full h-full object-cover object-center mix-blend-luminosity opacity-[0.9] contrast-[1.2] brightness-75 drop-shadow-2xl"
                    />
                  </motion.div>
                </div>
              )}

              {/* Small grit/noise texture instead of dot grid to maintain premium film feel */}
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-10" style={{ backgroundImage: "url('https://futurecraft.agency/wp-content/uploads/2024/08/noise.gif')", backgroundSize: '200px' }}></div>
              
              {/* Text Layer - STARK WHITE */}
              <div className="px-6 lg:px-12 pb-[10vh] relative z-20 w-fit">
                 <p className="font-mono text-xl md:text-2xl mb-4 font-bold tracking-widest text-white drop-shadow-md">// {cap.id}</p>
                 <motion.h1 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[13vw] md:text-[8vw] leading-[0.9] uppercase font-bold tracking-tighter text-white whitespace-nowrap drop-shadow-xl"
                 >
                   {cap.title}
                 </motion.h1>
              </div>

              {/* Vertical Side Badge */}
              <div className="absolute right-0 top-[35%] bg-white text-black px-4 py-8 flex flex-col items-center justify-between gap-12 z-30 hidden md:flex">
                <span className="font-bold text-2xl">W.</span>
                <span className="vertical-label font-bold tracking-widest text-sm transform rotate-180" style={{ writingMode: 'vertical-rl' }}>Honors</span>
              </div>
            </div>

            {/* The Scrolling Details Container */}
            <div className="relative w-full bg-[#000000] z-10 pt-24 pb-12 lg:pb-24 -mt-[1px]">
               <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                  
                  {/* Left Column - Sticky Number */}
                  <div className="lg:col-span-4 hidden lg:block">
                     <div className="sticky top-32 h-max">
                        <span className="text-[140px] md:text-[180px] font-bold leading-none text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.08)' }}>
                          {cap.id}
                        </span>
                     </div>
                  </div>

                  {/* Right Column - Content */}
                  <div className="lg:col-span-8 col-span-1">
                     <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight leading-[1.1] mb-8 pr-4">
                       {cap.headline}
                     </h2>
                     <p className="text-base md:text-lg text-gray-400 mb-12 max-w-3xl leading-relaxed">
                       {cap.description}
                     </p>

                     <div className="flex flex-col border-t border-[#333333]">
                        {cap.items.map((item, index) => (
                           <motion.div 
                             initial={{ opacity: 0, y: 10 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true }}
                             transition={{ duration: 0.5, delay: index * 0.05 }}
                             key={item} 
                             className="flex justify-between items-center py-6 md:py-8 border-b border-[#333333] hover:bg-[#E82B00] hover:-mx-6 hover:px-6 transition-all duration-300 cursor-pointer group"
                           >
                              <span className="text-xl md:text-[1.35rem] font-bold tracking-tight text-white group-hover:text-black transition-colors">{item}</span>
                              <span className="font-mono text-sm opacity-50 group-hover:text-black group-hover:opacity-100 transition-colors">0{index + 1}</span>
                           </motion.div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Section Divider (only if not the last capability) */}
               {i !== capabilities.length - 1 && (
                 <div className="w-full mt-24">
                   <div className="border-t border-[#333333] w-full"></div>
                   <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex justify-between items-center text-[15px] uppercase tracking-widest opacity-60">
                     <span>My Expertise</span>
                     <span>専門分野</span>
                   </div>
                 </div>
               )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
