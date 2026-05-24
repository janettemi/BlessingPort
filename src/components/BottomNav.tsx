import { motion } from 'motion/react';
import { Home, Play, Heart, User } from 'lucide-react';
import { useState } from 'react';

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', icon: Home, href: '#' },
    { id: 'reels', icon: Play, href: '#work' },
    { id: 'favorites', icon: Heart, href: '#about' },
    { id: 'profile', icon: User, href: '#contact' },
  ];

  return (
    <div className="fixed bottom-10 w-full flex justify-center z-50 px-4">
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="glass-panel rounded-full px-4 py-2 flex items-center gap-2 shadow-[0_30px_60px_rgba(108,88,109,0.15)] border-white/40"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <motion.a
              key={tab.id}
              href={tab.href}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-full transition-all duration-300 relative ${
                isActive 
                  ? 'bg-tertiary-container text-tertiary' 
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <Icon size={20} fill={isActive ? "currentColor" : "none"} />
              {isActive && (
                <motion.div 
                  layoutId="bubble"
                  className="absolute inset-0 bg-tertiary-container rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.a>
          );
        })}
      </motion.nav>
    </div>
  );
}
