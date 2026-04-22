import { motion } from 'motion/react';

const projects = [
  {
    title: 'Automated SEO System',
    image: 'https://designbybrandin.com/wp-content/uploads/2025/05/armada_businesscard.webp',
  },
  {
    title: 'Musticker US',
    image: 'https://designbybrandin.com/wp-content/uploads/2024/01/WildFlower_P.jpg',
  },
  {
    title: 'NextGen Gas Station Suite',
    image: 'https://designbybrandin.com/wp-content/uploads/2024/01/zenith.jpg',
  },
  {
    title: 'Cariton',
    image: 'https://designbybrandin.com/wp-content/uploads/2024/01/Mayfield.jpg',
  },
  {
    title: 'MCM Plumbing',
    image: 'https://designbybrandin.com/wp-content/uploads/2024/01/Eden_P.jpg',
  },
  {
    title: 'Cedule',
    image: 'https://designbybrandin.com/wp-content/uploads/2023/12/MM_thumb.jpg',
  },
];

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="bg-black text-white py-24 px-6 lg:px-[60px] pb-12 w-full h-auto"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 1800px' }}
    >
      <div className="w-full flex flex-col md:flex-row mb-16 gap-12">
        <div className="flex-1">
          <p className="text-sm font-medium tracking-wide uppercase mb-4 border-b border-transparent hover:border-white inline-block cursor-pointer transition-colors duration-300">
            Featured Work
          </p>
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[6vw] md:text-[6vw] leading-none font-bold uppercase mb-8"
          >
            代表作
          </motion.h2>
          <div className="h-[30px] border-b border-white/20 w-full mb-8"></div>
        </div>
        <div className="flex-1 flex items-start">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[6vw] md:text-[5vw] leading-[1.1] font-bold uppercase"
          >
            Engineered Systems &amp; High-Performance Products
          </motion.h2>
        </div>
      </div>

      {/* Filters (Desktop) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex space-x-6 text-sm font-medium tracking-wide mb-8 overflow-x-auto"
      >
        <button className="text-white">All</button>
        <button className="text-white/50 hover:text-white transition-colors">Frontend Architecture</button>
        <button className="text-white/50 hover:text-white transition-colors">AI Platforms</button>
        <button className="text-white/50 hover:text-white transition-colors">Backend</button>
      </motion.div>

      {/* 1-Column Grid layout exact match */}
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            className="group relative cursor-pointer w-full h-[30vh] md:h-[50vh] xl:h-[60vh] rounded-[10px] overflow-hidden"
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full transform transition-transform duration-1000 group-hover:scale-105">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                sizes="100vw"
              />
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#E82B00]/0 group-hover:bg-[#E82B00]/90 transition-colors duration-500 ease-in-out"></div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-start justify-between p-6 md:p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <h3 className="text-4xl md:text-[5vw] font-bold uppercase text-black leading-none drop-shadow-sm">
                {project.title}
              </h3>
              
              <div className="w-[10vw] h-[10vw] max-w-[150px] max-h-[150px] min-w-[60px] min-h-[60px] text-black">
                <svg viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path>
                </svg>
              </div>
            </div>
            
            {/* Always visible title (bottom left or top left normally? original says top left) */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 group-hover:opacity-0 transition-opacity duration-300">
               <h3 className="text-3xl md:text-5xl font-bold uppercase text-white drop-shadow-lg z-10">
                 {project.title}
               </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full mt-12 flex justify-center">
        <button className="text-white hover:text-[#E82B00] transition-colors border-b border-transparent hover:border-[#E82B00] pb-1 font-medium tracking-wide uppercase text-sm">
          Load More
        </button>
      </div>
    </section>
  );
}
