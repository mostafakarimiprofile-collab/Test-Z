/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-brand-purple rounded-full blur-[2px]" />
              <span className="font-display text-4xl font-bold tracking-tight text-white italic">NEURA</span>
            </div>
            <p className="text-white/40 leading-relaxed mb-8">
              Revolutionizing daily wellness with bio-available adaptogens and premium organic ingredients. 
              Join the movement towards sustainable mental clarity.
            </p>
            <div className="flex gap-4">
              <motion.a whileHover={{ scale: 1.1 }} href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-purple/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-purple/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-purple/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div>
             <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-brand-mint">Shop</h4>
             <ul className="space-y-4 text-white/60">
               <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Subscriptions</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Bundles</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
             </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-brand-orange">Company</h4>
             <ul className="space-y-4 text-white/60">
               <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Science</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
             </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-white">Join the Ritual</h4>
            <p className="text-white/40 mb-6">Stay updated on new releases and wellness tips.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-purple transition-colors"
              />
              <button className="absolute right-2 top-2 p-2 bg-brand-purple rounded-xl hover:bg-brand-purple/80 transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10 gap-8">
          <div className="text-white/20 text-sm">
            © 2026 NEURA INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-white/20 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
