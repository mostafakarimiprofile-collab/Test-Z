/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] bg-brand-purple/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, 50, 0],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] bg-brand-orange/10 rounded-full blur-[120px]"
        />
      </div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 text-center max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-bold mb-8"
        >
          <span className="w-2 h-2 bg-brand-purple rounded-full animate-pulse" />
          The New Standard in Stress Relief
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl font-black text-brand-dark leading-[0.95] mb-8 tracking-tighter"
        >
          Calm Your Mind.<br />
          <span className="text-brand-purple italic">Elevate</span> Your Day.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-brand-dark/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Experience the world's most advanced anti-stress gummy. 
          Clinically backed adaptogens met with exquisite organic flavors. 
          Relaxation, redefined.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-5 bg-brand-purple text-white rounded-full font-black text-lg shadow-2xl shadow-brand-purple/40 uppercase tracking-widest"
          >
            Feel Better Instantly
          </motion.button>
          <motion.button 
            whileHover={{ backgroundColor: "rgba(80, 0, 136, 0.05)" }}
            className="w-full sm:w-auto px-10 py-5 text-brand-purple font-bold text-lg rounded-full border-2 border-brand-purple/20 transition-colors"
          >
            How it works
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16 flex items-center justify-center gap-8 text-brand-dark/40"
        >
          <span className="text-xs font-bold uppercase tracking-widest">★ Verified by 50k+ Customers</span>
          <span className="text-xs font-bold uppercase tracking-widest">★ 100% Vegan & Bio-Available</span>
        </motion.div>
      </motion.div>

      {/* Floating Gummy Placeholder (Visual) */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[5%] md:right-[15%] w-32 md:w-64 h-32 md:h-64 z-20 pointer-events-none"
      >
        <div className="w-full h-full bg-gradient-to-br from-brand-orange to-brand-magenta rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-sm opacity-60 shadow-[0_0_50px_rgba(253,118,26,0.5)]" />
      </motion.div>
    </section>
  );
}
