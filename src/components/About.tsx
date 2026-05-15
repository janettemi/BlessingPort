import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-surface-container-low relative px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <h2 className="text-4xl md:text-5xl text-primary mb-8 leading-tight">
              Crafting narratives that resonate in the digital age.
            </h2>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-6 py-2 rounded-full bg-secondary-container text-secondary text-sm font-medium tracking-wide">
                Visual storytelling
              </span>
              <span className="px-6 py-2 rounded-full bg-tertiary-container text-tertiary text-sm font-medium tracking-wide">
                Creative Direction
              </span>
            </div>
          </motion.div>
          
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-6 md:col-start-7"
          >
            <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
              Blessing Udoka Nnona is a multi-disciplinary digital creator whose work sits at the 
              intersection of high fashion and intimate human experience. 
              With a keen eye for aesthetic precision,
              she transforms everyday moments into cinematic experiences.
            </p>
            <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
                I’m a beauty, travel, and lifestyle content creator passionate 
                about creating visually engaging and relatable content that inspires confidence, 
                creativity, and everyday luxury. From curated beauty finds to travel experiences 
                and lifestyle moments, I love bringing brands to life through authentic storytelling 
                and aesthetic-driven content
                 that connects with modern audiences.
            </p>
            
            <motion.a 
              href="#contact"
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full sunset-soft-gradient flex items-center justify-center text-white shadow-lg">
                <ArrowRight size={24} />
              </div>
              <span className="text-sm font-bold tracking-widest text-primary uppercase">
                Start a Conversation
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
