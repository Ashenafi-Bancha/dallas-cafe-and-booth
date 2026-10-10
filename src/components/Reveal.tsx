import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export const easeOut = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, delay = 0, className }: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
