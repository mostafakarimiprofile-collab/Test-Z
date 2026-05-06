/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Tech Founder",
    text: "Neura is a game changer for high-stress days. No brain fog, just pure calm focus.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Product Designer",
    text: "The aesthetic is what caught my eye, but the results are what keep me coming back.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Creative Director",
    text: "Finally, a gummy that tastes like actual fruit. My daily ritual is incomplete without it.",
    rating: 5
  },
  {
    name: "Elena Rossi",
    role: "Yoga Instructor",
    text: "I recommend Neura to all my students. It's the perfect supplement for a balanced life.",
    rating: 5
  }
];

export default function SocialProof() {
  return (
    <section className="py-24 px-6 bg-brand-paper overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-lg">
             <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-6xl font-black mb-4 tracking-tighter"
            >
              The Word is <span className="text-brand-magenta italic">Out</span>.
            </motion.h2>
            <p className="text-xl text-brand-dark/60">
              Thousands of people are reclaiming their peace with NEURA.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-brand-orange" fill="currentColor" />
              ))}
            </div>
            <span className="font-black text-2xl">4.9/5 Average</span>
            <span className="text-brand-dark/40 uppercase tracking-widest text-xs font-bold">Based on 12,000+ Reviews</span>
          </div>
        </div>

        {/* Testimonial Scrolling Row */}
        <div className="flex gap-6 overflow-hidden py-4 mask-fade">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 shrink-0"
          >
            {[...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
              <div 
                key={idx}
                className="w-[350px] p-8 rounded-[32px] bg-white border border-brand-purple/5 shadow-xl shadow-brand-purple/5 flex flex-col"
              >
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-brand-purple/20" />
                </div>
                <p className="text-lg text-brand-dark/80 mb-8 font-medium leading-relaxed italic">
                  "{t.text}"
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center font-black text-brand-purple">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">{t.name}</h4>
                    <span className="text-xs text-brand-dark/40 uppercase tracking-tight">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Press Section */}
        <div className="mt-24 pt-16 border-t border-brand-dark/5">
          <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-brand-dark/30 mb-12">
            As Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-20 grayscale">
            {["VOGUE", "WIRED", "COSMO", "GQ", "FORBES"].map(p => (
              <span key={p} className="text-2xl font-black italic tracking-tighter">{p}</span>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}
