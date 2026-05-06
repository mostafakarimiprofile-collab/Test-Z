/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "When will I feel the effects?",
    answer: "Most users notice a shift toward calm within 30-45 minutes. For cumulative adaptogenic benefits, we recommend daily use for at least 2 weeks."
  },
  {
    question: "Is Neura non-GMO and Vegan?",
    answer: "Absolutely. We pride ourselves on using 100% plant-based ingredients. Our gummies are pectin-based, never gelatin-based."
  },
  {
    question: "Can I take more than one?",
    answer: "Our recommended serving size is one gummy. However, depending on your stress levels, it is safe to take up to two gummies per day."
  },
  {
    question: "Are there any side effects?",
    answer: "Neura is made with natural, clinically-backed ingredients. However, we always recommend consulting with your physician if you are pregnant or on medication."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-brand-paper">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
          >
            Got <span className="text-brand-orange">Questions</span>?
          </motion.h2>
          <p className="text-xl text-brand-dark/60">
            Everything you need to know about your new favorite ritual.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-purple/5"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-brand-purple/[0.02] transition-colors"
              >
                <span className="text-xl font-bold tracking-tight text-brand-dark">{faq.question}</span>
                <div className={`p-2 rounded-full transition-colors ${openIndex === idx ? 'bg-brand-purple text-white' : 'bg-brand-purple/5 text-brand-purple'}`}>
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-brand-dark/60 leading-relaxed text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
