"use client";

import { PlayCircle, X, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Video data utilizing image file paths for brand logos
const videos = [
  { 
    id: 1, 
    title: "Skincare Campaign", 
    brand: "Eli&Sarlondon", 
    deliverable: "UGC Reel", 
    views: "145K", 
    video: "/video/video1.webm",
    logo: "/image/Eli&Sarlondon.png" // Replace with your actual image path
  },
  { 
    id: 2, 
    title: "Skincare Reel", 
    brand: "paul's chouce", 
    deliverable: "Beauty Capsule", 
    views: "82K", 
    video: "/video/video2.webm",
    logo: "/image/paul's chouce.png"
  },
  { 
    id: 3, 
    title: "Watch Campaign", 
    brand: "Kloudy", 
    deliverable: "Product Showcase", 
    views: "210K", 
    video: "/video/video3.webm",
    logo: "/image/kloudy.png"
  },
  { 
    id: 4, 
    title: "Drink Campaign", 
    brand: "Cupp", 
    deliverable: "Aesthetic Storytelling", 
    views: "95K", 
    video: "/video/video4.webm",
    logo: "/image/cupp.jpg"
  },
  { 
    id: 5, 
    title: "Beauty Reel", 
    brand: "paul's chouce.png", 
    deliverable: "Tutorial / GRWM", 
    views: "320K", 
    video: "/video/video9.webm",
    logo: "/image/paul's chouce.png"
  },
  { 
    id: 6, 
    title: "Beauty ", 
    brand: "elf Cosmetics", 
    deliverable: "Beauty & Lifestyle", 
    views: "64K", 
    video: "/video/video.webm",
    logo: "public/image/elf.png"
  },
  { 
    id: 7, 
    title: "Fashion glasses Campaign", 
    brand: "firmoo", 
    deliverable: "Glasses & Accessories", 
    views: "115K", 
    video: "/video/Video11.webm",
    logo: "/image/firmoo.png"
  },
  { 
    id: 8, 
    title: "Hair maintenance oils", 
    brand: "FS", 
    deliverable: "Haircare Campaign", 
    views: "78K", 
    video: "/video/video12.webm",
    logo: "/image/fs.jpg"
  },
  { 
    id: 9, 
    title: "Brand Shoot", 
    brand: "Elf", 
    deliverable: "Beauty & Lifestyle", 
    views: "180K", 
    video: "/video/video14.webm",
    logo: "/image/elf.png"
  },
  { 
    id: 10, 
    title: "Shaving Campaign", 
    brand: "Nimbi", 
    deliverable: "Shaving Shot", 
    views: "93K", 
    video: "/video/video10.webm",
    logo: "/image/nimbi.png"
  },
  { 
    id: 11, 
    title: "Hotel Campaign", 
    brand: "Marriott", 
    deliverable: "Hotel shoot", 
    views: "410K", 
    video: "/video/housev.webm",
    logo: "/logos/marriott.png"
  },
  { 
    id: 12, 
    title: "Hotel Campaign", 
    brand: "Airbnb Luxe", 
    deliverable: "House shoots", 
    views: "250K", 
    video: "/video/ShootH.webm",
    logo: "/logos/airbnb.png"
  }
];

// Clean photography assets
const images = [
  { id: 1, title: "Skin care", brand: "Youth To The People", image: "/image/image2.jpeg" },
  { id: 2, title: "Skin care", brand: "Summer Fridays", image: "/image/image3.jpeg" },
  { id: 3, title: "Beauty Editorial ", brand: "Vogue", image: "/image/image4.jpeg" },
  { id: 4, title: "Risk watch campaign", brand: "Seiko", image: "/image/image5.jpeg" },
  { id: 5, title: "Shaving campaign", brand: "Athena Club", image: "/image/nimbi.jpeg" },
  { id: 6, title: "Beauty campaign", brand: "Kith Women", image: "/image/BrandShoot.jpeg" },
  { id: 7, title: "Beauty campaign", brand: "Dior Beauty", image: "/image/Beuty.jpeg" }
];

// Isolated YouTube Image path
const standaloneYoutube = {
  id: 8,
  title: "Youtube Content",
  image: "/image/youtube.jpeg"
};

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[0] | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeVideo ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [activeVideo]);

  return (
    <section className="py-24 bg-surface-container-low px-4 md:px-6 overflow-hidden" id="work">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-24">
          <p className="editorial-label text-secondary mb-4">
            Brand Collaborations & Featured Campaigns
          </p>

          <h2 className="text-4xl md:text-5xl text-primary mb-6 max-w-3xl mx-auto normal-case tracking-normal">
            Creating Engaging Content for Modern Brands
          </h2>

          <p className="editorial-body max-w-2xl mx-auto">
            A collection of short-form videos, UGC campaigns, and creative brand
            collaborations designed to connect with audiences, increase engagement,
            and showcase products in authentic ways.
          </p>
        </div>

        {/* VIDEO SECTION */}
        <div className="mb-28">
          <div className="border-b border-outline-variant/30 pb-4 mb-14">
            <p className="editorial-label text-secondary">
              UGC • Reels • Product Campaigns • Lifestyle Content
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
            {videos.map((item) => (
              <div
                key={item.id}
                className="relative w-full max-w-[290px] h-[510px] rounded-[42px] bg-black border-[10px] border-on-surface/90 overflow-hidden shadow-xl"
              >
                {/* PHONE NOTCH */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-on-surface/95 rounded-full z-30" />

                {/* METRIC BADGE */}
                <div className="absolute top-4 right-4 z-30 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
                  <Eye size={12} className="text-white" />
                  <span className="text-[10px] font-bold text-white tracking-wider">{item.views}</span>
                </div>

                <div
                  onClick={() => setActiveVideo(item)}
                  className="relative w-full h-full cursor-pointer group"
                >
                  <video
                    src={item.video}
                    muted
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                  {/* PLAY BUTTON */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition duration-500 border border-white/10">
                      <PlayCircle size={36} className="text-white" />
                    </div>
                  </div>

                  {/* BRAND DETAILS WITH LOGO */}
                  <div className="absolute bottom-8 left-5 right-5 text-white">
                   <div className="flex items-center gap-2.5 mb-3 bg-white/10 w-fit pl-1.5 pr-3 py-1.5 rounded-full backdrop-blur-md border border-white/15">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1 shadow-sm shrink-0">
                          <img 
                            src={item.logo} 
                            alt={`${item.brand} logo`} 
                            className="w-full h-full object-contain" 
                          />
                        </div>
                        
                        <span className="text-[11px] text-white uppercase tracking-widest font-bold">
                          {item.brand}
                        </span>
                      </div>
                    <p className="text-xs text-white/70 uppercase tracking-wide mb-1">
                      {item.deliverable}
                    </p>

                    <p className="text-xl font-medium tracking-wide font-sans text-white line-clamp-1">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PHOTO SECTION */}
        <div className="mb-28">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-14 border-b border-outline-variant/30 pb-4">
            <p className="editorial-label text-secondary">
              Brand Shoots • Product Features • Lifestyle • Fashion
            </p>
          </div>
          
          <div className="columns-1 sm:columns-2 xl:columns-4 gap-6 space-y-6">
            {images.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-2xl group break-inside-avoid bg-surface-dim shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-102 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* TEXT INFO WITH BRAND TAG */}
                <div className="absolute bottom-5 left-5 right-5 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-[10px] bg-white/20 text-white border border-white/20 px-2 py-0.5 rounded uppercase tracking-widest font-semibold inline-block mb-2">
                    {item.brand}
                  </span>
                  <h4 className="text-lg font-light tracking-wide normal-case text-white font-sans">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STANDALONE INVITATIONS / APPEARANCES SECTION */}
        <div className="mt-20 pt-16 border-t border-outline-variant/30">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-14">
            <p className="editorial-label text-secondary">
              Invitations / appearances
            </p>
          </div>

          <div className="columns-1 sm:columns-2 xl:columns-3 gap-6">
            <div className="relative overflow-hidden rounded-2xl break-inside-avoid shadow-sm group bg-surface-dim">
              <img 
                src={standaloneYoutube.image} 
                alt={standaloneYoutube.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-102" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="absolute bottom-5 left-5 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-sm tracking-widest font-sans font-light uppercase">{standaloneYoutube.title}</p>
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 md:p-10"
            onClick={() => setActiveVideo(null)}
          >
            {/* CLOSE BUTTON */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
              onClick={() => setActiveVideo(null)}
            >
              <X size={32} />
            </button>

            {/* VIDEO CONTAINER */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative h-full max-h-[85vh] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={activeVideo.video}
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