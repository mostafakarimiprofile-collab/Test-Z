/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Zap, Leaf, CheckCircle2 } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "AURA - Deep Calm",
    tagline: "Total relaxation for the modern mind.",
    color: "from-brand-purple to-brand-magenta",
    price: "$34.00",
    features: ["L-Theanine", "Ashwagandha", "Magnesium"]
  },
  {
    id: 2,
    name: "ZENITH - Focus Burst",
    tagline: "Mental clarity without the jitters.",
    color: "from-brand-orange to-brand-magenta",
    price: "$38.00",
    features: ["Lion's Mane", "B12", "Green Tea"]
  }
];

export default function ProductSection() {
  return (
    <section id="products" className="py-24 px-6 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
            >
              Beyond the <span className="italic text-brand-mint">Ordinary</span>.
            </motion.h2>
            <p className="text-xl text-white/60">
              Not just a supplement. A daily ritual designed to optimize your biological potential. 
              Pure, potent, and incredibly delicious.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10">
              <Star className="text-brand-orange mb-2" fill="currentColor" />
              <span className="font-bold">4.9/5</span>
              <span className="text-xs text-white/40">Rating</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10">
              <CheckCircle2 className="text-brand-mint mb-2" />
              <span className="font-bold">98%</span>
              <span className="text-xs text-white/40">Calm</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="group relative h-[600px] rounded-[40px] overflow-hidden bg-white/5 border border-white/10 flex flex-col justify-end p-8 md:p-12"
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${product.color} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
              
              {/* Mock Product Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 z-0">
                <motion.div 
                   animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-full h-full bg-gradient-to-br ${product.color} rounded-[20%] shadow-[0_40px_100px_rgba(0,0,0,0.5)] flex items-center justify-center p-4 relative`}
                >
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-white/10 rounded-[18%]" />
                    <span className="text-white font-display text-4xl font-bold opacity-30 select-none">NEURA</span>
                </motion.div>
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-4xl font-black tracking-tight mb-2">{product.name}</h3>
                    <p className="text-white/60 text-lg">{product.tagline}</p>
                  </div>
                  <div className="text-2xl font-black text-brand-mint">{product.price}</div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {product.features.map(f => (
                    <span key={f} className="px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium flex items-center gap-2">
                       <Zap className="w-3 h-3 text-brand-orange" />
                       {f}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-4 bg-white text-brand-dark rounded-2xl font-black uppercase tracking-wider text-sm transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                  >
                    Add to Cart
                  </motion.button>
                  <motion.button 
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="py-4 border border-white/20 rounded-2xl font-bold text-sm tracking-wide transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center opacity-40">
          <div className="flex flex-col items-center gap-2 uppercase tracking-widest text-[10px] font-black">
            <Leaf className="w-6 h-6 mb-2" />
            100% Organic
          </div>
          <div className="flex flex-col items-center gap-2 uppercase tracking-widest text-[10px] font-black">
            <CheckCircle2 className="w-6 h-6 mb-2" />
            Non-GMO
          </div>
          <div className="flex flex-col items-center gap-2 uppercase tracking-widest text-[10px] font-black">
            <Zap className="w-6 h-6 mb-2" />
            Bio-Available
          </div>
          <div className="flex flex-col items-center gap-2 uppercase tracking-widest text-[10px] font-black">
            <Star className="w-6 h-6 mb-2" />
            Premium Grade
          </div>
        </div>
      </div>
    </section>
  );
}
