"use client";

import { PlayCircle, X, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const videos = [
  { id: 1, title: "Skincare Campaign", brand: "Eli&Sarlondon", deliverable: "UGC Reel", views: "145K", video: "/video/video1.webm", logo: "/image/Eli&Sarlondon.png",poster: "/image/Eli&Sar.png" },
  { id: 2, title: "Skincare Reel", brand: "paul's chouce", deliverable: "Beauty Capsule", views: "82K", video: "/video/video2.webm", logo: "/image/paul's chouce.png",poster: "/image/pacl.png" },
  { id: 3, title: "Watch Campaign", brand: "Kloudy", deliverable: "Product Showcase", views: "210K", video: "/video/video3.webm", logo: "/image/kloudy.png" ,poster: "/image/image5.jpeg"},
  { id: 4, title: "Hotel Campaign", brand: "Hilton by Hilton", deliverable: "House shoots", views: "250K", video:"/video/ShootH.webm", logo:"/image/hamptonbyhilton.png" ,poster:"/image/Hilton.png"},
  { id: 5, title: "Clothing Campaign", brand: "River and mara", deliverable: "Styling", views: "410K", video:"/video/Rriver.webm", logo:"/image/MaraAndRiver.jpg" ,poster:"/image/riverimage.png"},
  { id: 6, title: "Beauty ", brand: "elf Cosmetics", deliverable: "Beauty & Lifestyle", views: "64K", video: "/video/video.webm", logo: "/image/elf.png" ,poster: "/image/BrandShoot.jpeg"},
  { id: 7, title: "Fashion glasses Campaign", brand: "firmoo", deliverable: "Glasses & Accessories", views: "115K", video: "/video/Video11.webm", logo: "/image/firmoo.png",poster: "/image/femo.png" },
  { id: 8, title: "Hair maintenance oils", brand: "FS", deliverable: "Haircare Campaign", views: "78K", video: "/video/video12.webm", logo: "/image/fs.jpg",poster: "/image/fsimg.png" },
  { id: 9, title: "Brand Shoot", brand: "Elf", deliverable: "Beauty & Lifestyle", views: "180K", video: "/video/video14.webm", logo: "/image/elf.png" ,poster: "/image/BrandShoot.jpeg"},
  { id: 10, title: "Shaving Campaign", brand: "Nimbi", deliverable: "Shaving Shot", views: "93K", video: "/video/video10.webm", logo: "/image/nimbi.png" ,poster: "/image/nimbi.jpeg"},
  { id: 11, title: "Hotel Campaign", brand: "Hampton by Hilton", deliverable: "Hotel shoot", views: "410K", video: "/video/housev.webm", logo: "/image/hamptonbyhilton.png" ,poster: "/image/Hampton.png"},
  { id: 13, title: "Jewelry Campaign", brand: "Coach", deliverable: "Jewelry Showcase", views: "320K", video:"/video/Coach.webm", logo:"/image/coach.png" ,poster:"/image/coachimg.png"},
  { id: 14, title: "Clothing Campaign", brand: "River and mara", deliverable: "Unboxing style", views: "150K", video:"/video/Mara.webm", logo:"/image/MaraAndRiver.jpg" ,poster:"/image/maraimg.png"},
  { id: 15, title: "Beauty Reel", brand: "paul's chouce.png", deliverable: "Tutorial / GRWM", views: "320K", video: "/video/video9.webm", logo: "/image/paul's chouce.png" ,poster: "/image/image3.jpeg"},
    { id: 16, title: "Drink Campaign", brand: "Cupp", deliverable: "Aesthetic Storytelling", views: "95K", video: "/video/video4.webm", logo: "/image/cupp.jpg",poster: "/image/cupps.png" },
];

const images = [
  { id: 1, title: "Skin care", brand: "Zooki", image: "/image/image2.jpeg" },
  { id: 2, title: "Skin care", brand: "paul's choice", image: "/image/image3.jpeg" },
  { id: 3, title: "Beauty Editorial ", brand: "paul's choice", image: "/image/image4.jpeg" },
  { id: 4, title: "Risk watch campaign", brand: "Kloudy", image: "/image/image5.jpeg" },
  { id: 5, title: "Shaving campaign", brand: "Nimbi", image: "/image/nimbi.jpeg" },
  { id: 6, title: "Beauty campaign", brand: "Elf", image: "/image/BrandShoot.jpeg" },
  { id: 7, title: "Beauty campaign", brand: "medlcube", image: "/image/Beuty.jpeg" }
];

const standaloneYoutube = {
  id: 8,
  title: "Youtube Content",
  image: "/image/youtube.jpeg"
};

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[0] | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeVideo ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [activeVideo]);

  return (
    <section className="py-16 md:py-24 bg-surface-container-low px-3 sm:px-6 overflow-hidden" id="work">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-secondary uppercase mb-3">
            Brand Collaborations & Featured Campaigns
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-primary mb-4 md:mb-6 max-w-3xl mx-auto normal-case tracking-tight font-light">
            Creating Engaging Content for Modern Brands
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A collection of short-form videos, UGC campaigns, and creative brand
            collaborations designed to connect with audiences, increase engagement,
            and showcase products in authentic ways.
          </p>
        </div>

        {/* VIDEO SECTION */}
        <div className="mb-20 md:mb-28">
          <div className="border-b border-outline-variant/30 pb-3 mb-8 md:mb-14">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-secondary uppercase">
              UGC • Reels • Product Campaigns • Lifestyle Content
            </p>
          </div>

          {/* Grid configured for 3 columns on mobile rows, expanding to 4 columns on large desktops */}
          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6 md:gap-10 items-start">
            {videos.map((item) => (
              <div
                key={item.id}
                /* Swapped hard heights/widths out for aspect ratios to let components scale naturally */
                className="relative w-full aspect-[9/16] rounded-[16px] min-[400px]:rounded-[24px] sm:rounded-[42px] bg-black border-[3px] min-[400px]:border-[5px] sm:border-[10px] border-on-surface/90 overflow-hidden shadow-md md:shadow-xl group cursor-pointer"
                onClick={() => setActiveVideo(item)}
              >
                {/* PHONE NOTCH — scaled dynamically */}
                <div className="absolute top-0.5 min-[400px]:top-1 sm:top-2 left-1/2 -translate-x-1/2 w-8 min-[400px]:w-12 sm:w-24 h-1.5 min-[400px]:h-2 sm:h-5 bg-on-surface/95 rounded-full z-30" />

                {/* METRIC BADGE — reduced sizing layout on micro screens */}
                <div className="absolute top-1.5 right-1.5 min-[400px]:top-3 min-[400px]:right-3 sm:top-4 sm:right-4 z-30 bg-black/40 backdrop-blur-md px-1 py-0.5 min-[400px]:px-2.5 min-[400px]:py-1 sm:px-3 sm:py-1 rounded-full flex items-center gap-0.5 sm:gap-1.5 border border-white/10">
                  <Eye className="text-white w-2 h-2 min-[400px]:w-3 min-[400px]:h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="text-[6px] min-[400px]:text-[9px] sm:text-[10px] font-bold text-white tracking-wider">{item.views}</span>
                </div>

                <div className="relative w-full h-full">
                  <video
                    src={item.video}
                    poster={item.poster}
                    muted
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />

                  {/* PLAY BUTTON — perfectly responsive formatting */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 min-[400px]:w-10 min-[400px]:h-10 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-sm sm:backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition duration-500 border border-white/10">
                      <PlayCircle className="text-white w-4 h-4 min-[400px]:w-6 min-[400px]:h-6 sm:w-9 sm:h-9" />
                    </div>
                  </div>

                  {/* DETAILS PANELS — content auto-hides or shortens cleanly based on width */}
                  <div className="absolute bottom-1.5 min-[400px]:bottom-4 sm:bottom-8 left-1.5 right-1.5 min-[400px]:left-3 min-[400px]:right-3 sm:left-5 sm:right-5 text-white">
                    
                    {/* BRAND TAG */}
                    <div className="flex items-center gap-1 sm:gap-2.5 mb-1 sm:mb-3 bg-white/10 w-fit pl-0.5 pr-1 py-0.5 min-[400px]:pl-1 min-[400px]:pr-2 sm:pl-1.5 sm:pr-3 sm:py-1.5 rounded-full backdrop-blur-md border border-white/15">
                      <div className="w-3 h-3 min-[400px]:w-5 min-[400px]:h-5 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center p-0.5 shadow-sm shrink-0">
                        <img 
                          src={item.logo} 
                          alt={`${item.brand} logo`} 
                          className="w-full h-full object-contain" 
                        />
                      </div>
                      <span className="text-[5px] min-[400px]:text-[8px] sm:text-[11px] text-white uppercase tracking-wider min-[400px]:tracking-widest font-bold max-w-[40px] sm:max-w-none truncate">
                        {item.brand}
                      </span>
                    </div>

                    {/* TEXT LABELS */}
                    <p className="text-[5px] min-[400px]:text-[9px] sm:text-xs text-white/70 uppercase tracking-wide mb-0.5 sm:mb-1 hidden min-[360px]:block truncate">
                      {item.deliverable}
                    </p>
                    <p className="text-[7px] min-[400px]:text-sm sm:text-xl font-medium tracking-wide text-white line-clamp-1">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PHOTO SECTION */}
        <div className="mb-20 md:mb-28">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 md:mb-14 border-b border-outline-variant/30 pb-3">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-secondary uppercase">
              Brand Shoots • Product Features • Lifestyle • Fashion
            </p>
          </div>
          
          {/* Changed layout rules to 2 balanced, elegant columns on mobile viewports */}
          <div className="columns-2 xl:columns-4 gap-3 sm:gap-6 space-y-3 sm:space-y-6">
            {images.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-xl sm:rounded-2xl group break-inside-avoid bg-surface-dim shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-102 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* TEXT INFO */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-5 sm:left-5 sm:right-5 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-[6px] sm:text-[10px] bg-white/20 text-white border border-white/20 px-1 py-0.5 sm:px-2 sm:py-0.5 rounded uppercase tracking-widest font-semibold inline-block mb-1 sm:mb-2">
                    {item.brand}
                  </span>
                  <h4 className="text-xs sm:text-lg font-light tracking-wide normal-case text-white font-sans line-clamp-1">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INVITATIONS & APPEARANCES SECTION */}
        <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-outline-variant/30">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 md:mb-14">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-secondary uppercase">
              Invitations / appearances
            </p>
          </div>

          <div className="columns-2 xl:columns-3 gap-3 sm:gap-6">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl break-inside-avoid shadow-sm group bg-surface-dim">
              <img 
                src={standaloneYoutube.image} 
                alt={standaloneYoutube.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-102" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="absolute bottom-2 left-2 sm:bottom-5 sm:left-5 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-[9px] sm:text-sm tracking-widest font-sans font-light uppercase">{standaloneYoutube.title}</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
            onClick={() => setActiveVideo(null)}
          >
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
              onClick={() => setActiveVideo(null)}
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative h-full max-h-[80vh] sm:max-h-[85vh] aspect-[9/16] bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={activeVideo.video}
                poster={activeVideo.poster}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}