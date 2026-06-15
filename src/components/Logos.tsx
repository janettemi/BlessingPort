import { motion } from "motion/react";

const brands = [
  "/image/paul's chouce.png",
  "/image/nimbi.png",
  "/image/Zooki.jpg",
  "/image/cupp.jpg",
  "/image/Eli&Sarlondon.png",
  "/image/kloudy.png",
  "/image/elf.png",
  "/image/firmoo.png",
  "/image/fs.jpg",
  "/image/MaraAndRiver.jpg",
  "/image/coach.png",
  "/image/hamptonbyhilton.png",
  "/image/kiss.jpeg",
  "/image/body lipo.png"
];

export default function Logos() {
  return (
    <section
      className="py-12 border-y border-outline-variant/20 px-4 mt-12 mb-12 bg-white"
      id="logos"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[10px] md:text-xs font-bold tracking-[0.4em] text-outline mb-10 uppercase">
          Trusted by Global Visionaries
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 ">
          {brands.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, opacity: 1 }}
              className="flex items-center justify-center"
            >
              <img
                src={logo}
                alt="brand logo"
                className="h-[60px] md:h-[80px] w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}