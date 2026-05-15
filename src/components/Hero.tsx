"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Music2,
  Youtube,
  Twitter,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[11px] font-bold tracking-[0.3em] text-[#0077C2] mb-6 uppercase"
          >
            Available for Creative Direction
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-slate-900 mb-8"
          >
            Blessing <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
              Udoka Nnona
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg text-slate-500 leading-relaxed max-w-md mb-10"
          >
            Digital Architect crafting immersive visual experiences
            through cinematography.
          </motion.p>

          {/* SOCIALS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-4"
          >
            {[
              {
                icon: <Instagram size={18} />,
                href: "https://instagram.com/",
              },
              {
                icon: <Music2 size={18} />,
                href: "https://tiktok.com/",
              },
              {
                icon: <Youtube size={18} />,
                href: "https://youtube.com/",
              },
              {
                icon: <Twitter size={18} />,
                href: "https://twitter.com/",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-500"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center"
        >

          {/* FRAME */}
          <div className="absolute  translate-x-4 translate-y-4" />

          {/* IMAGE */}
          <div className="relative z-10 w-full max-w-[420px] aspect-[3/4] rounded-[48px] overflow-hidden shadow-2xl bg-slate-200">
            <img
              src="src/public/image/bless2pic.jpeg"
              alt="Blessing Udoka Nnona"
              className="w-full h-full object-cover hover:scale-105 transition duration-1000"
            />
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent" />
      </motion.div>
    </section>
  );
}