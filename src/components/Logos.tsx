import { motion } from 'motion/react';
const brands = ['Paula’s choice', 'Nimbi', 'Eli&Sar', 'Kloudy', 'Cupp', 'Elf', 'Forest & shore', 'Firmoo', 'Zooki'];

export default function Logos() {
  return (
    <section className="py-12 border-y border-outline-variant/30 px-4 mt-12 mb-12 bg-white" id="logos">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[10px] md:text-xs font-bold tracking-[0.4em] text-outline mb-10 uppercase">
          Trusted by Global Visionaries
        </p>
        <div className="flex flex-wrap justify-around items-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden px-4 md:px-12">
          {brands.map((brand) => (
            <motion.span 
              key={brand}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="text-xl md:text-4xl font-serif text-on-surface cursor-default whitespace-nowrap"
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
