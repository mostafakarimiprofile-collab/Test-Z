/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Brain, Smile, Moon, Zap } from 'lucide-react';

const steps = [
  {
    icon: Brain,
    title: "Calm the Chaos",
    description: "Adaptogens like Ashwagandha immediately begin regulating cortisol levels, signaling your nervous system to downshift.",
    color: "bg-brand-purple"
  },
  {
    icon: Smile,
    title: "Elevate the Mood",
    description: "Natural L-Theanine promotes alpha wave production in the brain, creating a state of relaxed alertness and joy.",
    color: "bg-brand-orange"
  },
  {
    icon: Moon,
    title: "Deepen the Rest",
    description: "As your day winds down, the biological foundation laid by NEURA ensures a more restorative, uninterrupted sleep cycle.",
    color: "bg-brand-magenta"
  },
  {
    icon: Zap,
    title: "Sustain the Flow",
    description: "Unlike caffeine, our blend provides a consistent, steady energy that lasts all day without the crash.",
    color: "bg-brand-mint"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-brand-paper">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
          >
            The <span className="italic text-brand-purple">Science</span> of Chill.
          </motion.h2>
          <p className="text-xl text-brand-dark/60 max-w-2xl mx-auto">
            A precisely engineered approach to mental well-being. Here is how one NEURA gummy optimizes your day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative p-8 rounded-[32px] bg-white shadow-xl shadow-brand-purple/5 group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-6 transition-transform`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">{step.title}</h3>
              <p className="text-brand-dark/60 leading-relaxed">
                {step.description}
              </p>
              
              <div className="absolute top-8 right-8 text-5xl font-black text-brand-purple/5 select-none">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 p-1 bg-gradient-to-r from-brand-purple via-brand-orange to-brand-magenta rounded-[40px]"
        >
          <div className="p-12 md:p-20 bg-brand-dark rounded-[38px] text-center">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              Ready to <span className="text-brand-orange">Reset</span> Your Biology?
            </h3>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Join the 50,000+ individuals who have upgraded their mental performance with NEURA.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-brand-dark rounded-full font-black uppercase tracking-widest text-lg shadow-2xl shadow-white/20"
            >
              Experience Neura
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
