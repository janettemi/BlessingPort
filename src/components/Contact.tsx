import { motion } from 'motion/react';
import { Mail, AtSign, Youtube, Music2, Instagram } from 'lucide-react';

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
            <div className="md:col-span-5">
              <h2 className="text-5xl md:text-7xl leading-[1.1] text-primary mb-10">
                Let's create something timeless.
              </h2>
              <p className="text-lg text-on-surface-variant mb-12 font-medium">
                Now accepting collaborations and creative direction bookings for 2024/2025.
              </p>
              
              <div className="space-y-8">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6"
                >
                  <div className="w-14 h-14 rounded-full bg-primary-container/40 flex items-center justify-center text-primary border border-primary/10">
                    <Mail size={24} />
                  </div>
                  <span className="text-lg font-semibold text-primary/80 tracking-wide">hello@blessingnnona.com</span>
                </motion.div>
                
                  {/* Social Handles */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="flex  gap-4"
                  >

                    <a
                      href="https://www.instagram.com/its___blessing?igsh=MWRlaTlhZHRsanJkdg%3D%3D&utm_source=qr"
                      target="_blank"
                      className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <Instagram size={20} />
                    </a>

                    <a
                      href="https://www.tiktok.com/@itz_udy?_r=1&_t=ZN-96Fpe1V9cMY"
                      target="_blank"
                      className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <Music2 size={20} />
                    </a>

                    <a
                      href="https://www.youtube.com/@its___blessing?si=IN3Fk2udRm4Nlr39"
                      target="_blank"
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <Youtube size={20} />
                  </a>

                </motion.div>
                  </div>
               </div>

            <div className="md:col-span-6 md:col-start-7">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    className="w-full px-8 py-5 rounded-2xl bg-surface-container border-none focus:ring-2 focus:ring-primary-container transition-all placeholder:text-on-surface-variant/50 text-on-surface"
                    placeholder="Your Name" 
                    type="text" 
                  />
                  <input 
                    className="w-full px-8 py-5 rounded-2xl bg-surface-container border-none focus:ring-2 focus:ring-primary-container transition-all placeholder:text-on-surface-variant/50 text-on-surface"
                    placeholder="Email Address" 
                    type="email" 
                  />
                </div>
                <select className="w-full px-8 py-5 rounded-2xl bg-surface-container border-none focus:ring-2 focus:ring-primary-container transition-all text-on-surface appearance-none">
                  <option>Brand Collaboration</option>
                  <option>Creative Direction</option>
                  <option>Social Media Reel</option>
                  <option>Media Kit Request</option>
                </select>
                <textarea 
                  className="w-full px-8 py-5 rounded-2xl bg-surface-container border-none focus:ring-2 focus:ring-primary-container transition-all placeholder:text-on-surface-variant/50 text-on-surface min-h-[160px]"
                  placeholder="Tell me about your vision" 
                  rows={4}
                />
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 rounded-full sunset-soft-gradient text-white font-bold tracking-[0.2em] shadow-xl hover:shadow-2xl transition-all duration-300 uppercase text-sm"
                  type="submit"
                >
                  Send Proposal
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
