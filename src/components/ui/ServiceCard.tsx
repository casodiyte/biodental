import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  delay?: number;
}

export default function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-[var(--color-surface)] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group flex flex-col items-start gap-4 border border-[var(--color-bg)] hover:border-[var(--color-primary)]"
    >
      {icon && (
        <div className="w-12 h-12 rounded-full bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 transition-transform">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-serif font-semibold text-[var(--color-text)]">
        {title}
      </h3>
      {description && (
        <p className="text-sm opacity-80 text-[var(--color-text)] leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
