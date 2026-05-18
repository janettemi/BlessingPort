"use client";

import { PlayCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

// Categorized video data
const videos = [
  { id: 1, title: "Fashion Campaign", category: "OOTD & Beauty", video: "src/public/video/video1.webm" },
  { id: 2, title: "Skincare Reel", category: "Beauty", video: "src/public/video/video2.webm" },
  { id: 3, title: "Watch Campaign", category: "Watches & Accessories", video: "src/public/video/video3.webm" },
  { id: 4, title: "Lifestyle Content", category: "Lifestyle & Travel", video: "src/public/video/video4.webm" },
  { id: 5, title: "Beauty Reel", category: "Beauty", video: "src/public/video/video9.webm" },
  { id: 6, title: "Brand Shoot", category: "Beauty & Lifestyle", video: "src/public/video/Video.webm" },
  { id: 7, title: "Fashion glasses Campaign", category: "Glasses & Accessories", video: "src/public/video/Video11.webm" },
  { id: 8, title: "Haircare Campaign", category: "Hair maintenance oils", video: "src/public/video/Video12.webm" },
  { id: 9, title: "Brand Shoot", category: "Beauty & Lifestyle", video: "src/public/video/video14.webm" },
  { id: 10, title: "Creative Direction", category: "Creative Direction", video: "src/public/video/video10.webm" },
  { id: 11, title: "Hotel Campaign", category: "House & Lifestyle", video: "src/public/video/housev.webm" },
  { id: 12, title: "Creative Direction", category: "House shoots & Lifestyle", video: "src/public/video/ShootH.webm" }
];

// Clean photography assets
const images = [
  { id: 1, title: "Brand Shoot", image: "src/public/image/image2.jpeg" },
  { id: 2, title: "Skin care", image: "src/public/image/image3.jpeg" },
  { id: 3, title: "Risk watch campaign", image: "src/public/image/image4.jpeg" },
  { id: 4, title: "Beauty Editorial", image: "src/public/image/image5.jpeg" },
  { id: 5, title: "Brand Shoot", image: "src/public/image/nimbi.jpeg" },
  { id: 6, title: "Lifestyle Content", image: "src/public/image/BrandShoot.jpeg" },
  { id: 7, title: "Creative Direction", image: "src/public/image/Beuty.jpeg" }
];

// Isolated YouTube Image path
const standaloneYoutube = {
  id: 8,
  title: "Youtube Content",
  image: "src/public/image/youtube.jpeg"
};

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[0] | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeVideo]);

  return (
    <section className="py-20 px-4 md:px-6 overflow-hidden" id="work">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-24">
          <p className="uppercase tracking-[0.3em] text-sm text-slate-400 mb-4">
            Brand Collaborations & Featured Campaigns
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Creating Engaging Content for Modern Brands
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed">
            A collection of short-form videos, UGC campaigns, and creative brand
            collaborations designed to connect with audiences, increase engagement,
            and showcase products in authentic ways.
          </p>
        </div>

        {/* VIDEO SECTION */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-14">
            <p className="text-slate-500 text-sm uppercase tracking-[0.2em]">
              UGC • Reels • Product Campaigns • Lifestyle Content
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
            {videos.map((item) => (
              <div
                key={item.id}
                className="relative w-full max-w-[300px] h-[500px] rounded-[42px] bg-black border-[10px] border-slate-800 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.18)]"
              >
                {/* PHONE NOTCH */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-800 rounded-full z-30" />

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
                  <div className="absolute inset-0 bg-black/30" />

                  {/* PLAY BUTTON */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center group-hover:scale-110 transition duration-500">
                      <PlayCircle size={50} className="text-white" />
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="absolute bottom-8 left-6 text-white">
                    <p className="uppercase text-[11px] tracking-[0.3em] mb-2">
                      {item.category}
                    </p>

                    <h3 className="text-2xl font-bold leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PHOTO SECTION */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-14">
            <p className="text-slate-500 text-sm uppercase tracking-[0.2em]">
              Brand Shoots • Product Features • Lifestyle • Fashion
            </p>
          </div>
          
          {/* MASONRY (ORIGINAL STYLING REINSTATED) */}
          <div className="columns-1 sm:columns-2 xl:columns-4 gap-6 space-y-6">
            {images.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-[28px] group break-inside-avoid"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-105 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* TEXT */}
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition duration-500">
                  <h4 className="text-2xl font-semibold">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STANDALONE INVITATIONS / APPEARANCES SECTION */}
        <div className="mt-20 pt-16 border-t border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-14">
            <p className="text-slate-500 text-sm uppercase tracking-[0.2em]">
              Invitations / appearances
            </p>
          </div>

          {/* Re-uses original layout styling rules, starting where all images start, without centering */}
          <div className="columns-1 sm:columns-2 xl:columns-3 gap-6">
            <div className="relative overflow-hidden rounded-[28px] break-inside-avoid">
              <img 
                src={standaloneYoutube.image} 
                alt={standaloneYoutube.title}
                className="w-full object-cover" 
              />
            </div>
          </div>
        </div>

      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setActiveVideo(null)}
        >
          {/* CLOSE BUTTON */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
            onClick={() => setActiveVideo(null)}
          >
            <X size={40} />
          </button>

          {/* VIDEO CONTAINER */}
          <div
            className="relative h-full max-h-[90vh] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo.video}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}