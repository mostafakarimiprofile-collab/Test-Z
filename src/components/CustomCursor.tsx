/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-brand-purple/30 rounded-full blur-[10px] pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-purple rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: 'spring', damping: 20, stiffness: 500, mass: 0.2 }}
      />
    </>
  );
}
