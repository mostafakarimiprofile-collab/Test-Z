/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShoppingCart, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-brand-paper/80 backdrop-blur-md"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-purple rounded-full blur-[2px]" />
        <span className="font-display text-2xl font-bold tracking-tight text-brand-purple italic">NEURA</span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-medium text-brand-dark/70">
        <a href="#benefits" className="hover:text-brand-purple transition-colors">Benefits</a>
        <a href="#ingredients" className="hover:text-brand-purple transition-colors">Ingredients</a>
        <a href="#story" className="hover:text-brand-purple transition-colors">Our Story</a>
        <a href="#faq" className="hover:text-brand-purple transition-colors">FAQ</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-brand-purple/10 rounded-full transition-colors relative">
          <ShoppingCart className="w-5 h-5 text-brand-purple" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-brand-orange rounded-full" />
        </button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-purple text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-brand-purple/20 hidden sm:block"
        >
          Shop Now
        </motion.button>
        <button className="md:hidden p-2">
          <Menu className="w-6 h-6 text-brand-purple" />
        </button>
      </div>
    </motion.nav>
  );
}
