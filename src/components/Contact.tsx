import { motion } from 'motion/react';
import { Mail, ArrowUpRight, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 px-4 overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-20 rounded-[64px] dreamy-shadow relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute -top-40 -right-40 w-96 h-96 sunset-soft-gradient blur-[120px] opacity-20 rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
            
            {/* LEFT COLUMN: Main Heading & Primary Email */}
            <div className="md:col-span-6 flex flex-col justify-between">
              <div>
                <h2 className="text-5xl md:text-7xl leading-[1.1] text-primary mb-8 font-bold tracking-tight">
                  Let's create something timeless.
                </h2>
                <p className="text-lg text-on-surface-variant mb-12 font-medium max-w-md">
                  Now accepting collaborations, brand partnerships, and creative direction bookings for 2026/2027.
                </p>
              </div>

              {/* Primary Contact Link */}
              <motion.a 
                href="mailto:hello@blessingnnona.com"
                whileHover={{ x: 8 }}
                className="inline-flex items-center gap-6 group"
              >
                <div className="w-16 h-16 rounded-full bg-primary-container/40 flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={26} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant/60 mb-1">Drop an email</p>
                  <span className="text-xl font-bold text-primary/90 tracking-wide break-all">Blessing9604@gmail.com</span>
                </div>
              </motion.a>
            </div>

            {/* RIGHT COLUMN: Social Channels & External Links */}
            <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center space-y-10">
              
              {/* Media Kit Info Block */}
              <div className="p-6 rounded-3xl bg-surface-container/50 border border-white/10 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-primary mt-1">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-primary mb-1">Direct Bookings</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      For urgent campaign inquiries or to request a full Media Kit with rate cards, reach out via email or directly through social channels.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels Section */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant/60 mb-6 font-bold">
                  Connect on Socials
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/its___blessing?igsh=MWRlaTlhZHRsanJkdg%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-surface-container/30 hover:bg-white hover:text-black transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      {/* Official Brand Instagram SVG */}
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                      <span className="font-semibold text-sm">Instagram</span>
                    </div>
                    <span className="text-xs text-on-surface-variant/60 group-hover:text-black/60 flex items-center gap-1">
                      @its___blessing <ArrowUpRight size={14} />
                    </span>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@itz_udy?_r=1&_t=ZN-96Fpe1V9cMY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-surface-container/30 hover:bg-white hover:text-black transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      {/* Official Brand TikTok SVG */}
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.17 1.12 1.22 2.69 1.95 4.34 2.1v3.61c-1.63-.03-3.22-.53-4.57-1.44-.13-.09-.26-.19-.38-.29v6.19c-.04 2.44-1.12 4.77-2.97 6.36-2.58 2.22-6.42 2.45-9.26.54-2.84-1.92-4.14-5.51-3.18-8.83C3.06 9.17 6.32 6.94 9.77 7.37c1.19.15 2.31.69 3.2 1.5.01-2.95-.01-5.9 0-8.85zM9.13 11.23c-1.84-.13-3.62 1.05-4.17 2.81-.55 1.76-.02 3.73 1.3 4.88 1.34 1.17 3.39 1.3 4.87.32 1.48-.98 2.25-2.8 1.9-4.54l-.01-3.52c-1.21.41-2.5.58-3.89.05z"/>
                      </svg>
                      <span className="font-semibold text-sm">TikTok</span>
                    </div>
                    <span className="text-xs text-on-surface-variant/60 group-hover:text-black/60 flex items-center gap-1">
                      @itz_udy <ArrowUpRight size={14} />
                    </span>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@its___blessing?si=IN3Fk2udRm4Nlr39"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-surface-container/30 hover:bg-white hover:text-black transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      {/* Official Brand YouTube SVG */}
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span className="font-semibold text-sm">YouTube</span>
                    </div>
                    <span className="text-xs text-on-surface-variant/60 group-hover:text-black/60 flex items-center gap-1">
                      @its___blessing <ArrowUpRight size={14} />
                    </span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}