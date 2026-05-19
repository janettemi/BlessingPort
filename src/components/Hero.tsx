"use client";

import { motion } from "framer-motion";

const icons = [
    
]


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-10">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8">

        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1 col-span-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
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
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight text-slate-900 mb-8"
          >
            Blessing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
             Nnona
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg text-slate-500 leading-relaxed max-w-md mb-10"
          >
            Digital Architect crafting immersive visual experiences through cinematography.
          </motion.p>

          {/* BRAND ACCURATE SOCIALS (Colors active by default) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-4"
          >
            {[
              {
                name: "Instagram",
                href: "https://instagram.com/its___blessing?igsh=MWRlaTlhZHRsanJkdg%3D%3D&utm_source=qr",
                // Gradient background active by default, text white
                baseStyle: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white border-transparent hover:brightness-110",
                svg: (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                ),
              },
              {
                name: "TikTok",
                href: "https://www.tiktok.com/@itz_udy?_r=1&_t=ZN-96Fpe1V9cMY",
                // Black background active by default, text white
                baseStyle: "bg-black text-white border-black hover:bg-slate-900",
                svg: (
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.52-4.06-1.37-.28-.2-.53-.43-.77-.68v6.46c-.07 3.32-2.11 6.44-5.35 7.27-2.91.83-6.19-.34-7.79-2.94-1.72-2.67-1.39-6.49 1.1-8.77 1.84-1.74 4.54-2.23 6.84-1.48v4.14c-1.55-.58-3.41-.17-4.5 1.05-1.09 1.2-1.08 3.19.1 4.3 1.12 1.11 3.04 1.14 4.13-.03.52-.53.79-1.25.8-1.97V0z" />
                  </svg>
                ),
              },
              {
                name: "YouTube",
                href: "https://www.youtube.com/@its___blessing?si=IN3Fk2udRm4Nlr39",
                // Red background active by default, text white
                baseStyle: "bg-[#FF0000] text-white border-[#FF0000] hover:bg-[#D90000]",
                svg: (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                ),
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 rounded-full border flex items-center custor-pointer justify-center transition-all duration-300 shadow-sm hover:-translate-y-1 ${social.baseStyle}`}
              >
                {social.svg}
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-2 lg:order-1 col-span-1 lg:col-span-5 flex justify-center items-center relative py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full max-w-[380px] lg:max-w-[420px] aspect-[3/4] group"
          >
            {/* Outline Arch Frame */}
            <div className="absolute inset-0 border-2 border-[#0077C2] rounded-t-[200px] rounded-b-[40px] translate-x-4 translate-y-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-700 pointer-events-none z-0" />

            {/* Arch Image Container */}
            <div className="relative z-10 w-full h-full rounded-t-[200px] rounded-b-[40px] overflow-hidden shadow-2xl bg-slate-200 border-4 border-white">
              <img
                src="/image/MyImage.jpeg"
                alt="Blessing Udoka Nnona"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-1000"
              />
            </div>
          </motion.div>
        </div>

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