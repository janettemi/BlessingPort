import { motion } from 'motion/react';
import { Instagram, Youtube} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full rounded-t-[64px] bg-surface-container-low py-24 px-4 flex flex-col items-center gap-10 mt-12">
      <h3 className="text-3xl md:text-5xl text-primary font-serif italic mb-2">Blessing Udoka Nnona</h3>
      
      <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
        {['Work', 'About', 'Collaborate', 'Media Kit'].map((item) => (
          <motion.a 
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ y: -5 }}
            className={`text-sm md:text-base font-semibold transition-colors duration-300 ${
              item === 'Collaborate' ? 'text-secondary' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {item}
          </motion.a>
        ))}
      </nav>

      <div className="h-[1px] w-full max-w-xl bg-outline-variant/30 my-4" />
      
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-on-surface-variant font-medium">© 2024 Blessing Nnona</p>
        <div className="flex gap-6">
          {[Instagram, Youtube, ].map((Icon, i) => (
            <motion.a 
              key={i}
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="text-primary hover:text-secondary transition-colors"
              href="#"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
