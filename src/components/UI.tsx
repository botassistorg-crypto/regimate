import React from 'react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl", className)}>
    {children}
  </div>
);

export const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ x: 20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -20, opacity: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
