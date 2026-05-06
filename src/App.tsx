/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-brand-purple selection:text-white">
      <CustomCursor />
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-purple origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ProductSection />
        </motion.div>

        <HowItWorks />

        <SocialProof />

        <FAQ />
      </main>

      <Footer />

      {/* Floating Elements / Ambient Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[20%] left-[-5%] w-[40%] h-[40%] bg-brand-magenta/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-brand-orange/5 rounded-full blur-[100px]" />
      </div>
    </div>
  );
}

