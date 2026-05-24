import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-surface-container-low relative px-4 sm:px-6" id="about">
      <div className="max-w-7xl mx-auto">
        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* HEADER SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <h2 className="text-xl sm:text-2xl md:text-4xl text-primary mb-6 md:mb-8 leading-tight font-light tracking-tight">
              Crafting narratives that resonate in the digital age.
            </h2>
            
           <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 md:mb-8">
            <a 
              href="#work" 
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-transparent text-tertiary border border-tertiary text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:bg-tertiary hover:text-white shadow-sm active:scale-95 cursor-pointer"
            >
              Visual storytelling
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Blessing9604@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-transparent text-tertiary border border-tertiary text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:bg-tertiary hover:text-white shadow-sm active:scale-95 cursor-pointer"
            >
              Contact me
            </a>
          </div> 
          </motion.div>
          
          {/* BODY COPY SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-6 md:col-start-7"
          >
            <p className="text-base md:text-lg text-on-surface-variant mb-4 md:mb-6 leading-relaxed">
              I am a multi-disciplinary digital creator whose work sits at the 
              intersection of high fashion and intimate human experience. 
              With a keen eye for aesthetic precision,
              I transform everyday moments into cinematic experiences.
            </p>
            <p className="text-base md:text-lg text-on-surface-variant mb-8 md:mb-10 leading-relaxed">
              As a beauty, travel, and lifestyle content creator, I am passionate 
              about creating visually engaging and relatable content that inspires confidence, 
              creativity, and everyday luxury. From curated beauty finds to travel experiences 
              and lifestyle moments, I love bringing brands to life through authentic storytelling 
              and aesthetic-driven content that connects with modern audiences.
            </p>
            
            {/* CALL TO ACTION BUTTON */}
            <motion.a 
              href="#contact"
              whileHover={{ y: 4 }}
              className="inline-flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-tertiary-container  flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-primary uppercase transition-colors group-hover:text-secondary">
                Start a Conversation
              </span>
            </motion.a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}