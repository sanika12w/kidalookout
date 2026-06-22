'use client';

import { motion } from 'framer-motion';

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="url(#instagramGradient)"
    {...props}
  >
    <defs>
      <radialGradient id="instagramGradient" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="15%" stopColor="#F58529" />
        <stop offset="45%" stopColor="#DD2A7B" />
        <stop offset="70%" stopColor="#8134AF" />
        <stop offset="100%" stopColor="#515BD4" />
      </radialGradient>
    </defs>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

export default function FloatingSocials() {
  const socials = [
    {
      name: 'X (Twitter)',
      url: 'https://x.com',
      icon: XIcon,
      classes: 'text-white hover:bg-white/10 hover:shadow-[0_0_12px_rgba(255,255,255,0.25)]'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: InstagramIcon,
      classes: 'hover:bg-white/10 hover:shadow-[0_0_14px_rgba(214,36,159,0.35)]'
    },
  ];

  return (
    <div className="fixed z-40 safe-socials pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="flex flex-col items-center gap-1.5 p-1.5 rounded-full bg-zinc-950/70 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_-6px_rgba(0,0,0,0.3)] pointer-events-auto transition-all duration-300"
      >
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-250 cursor-pointer ${social.classes}`}
              aria-label={social.name}
              title={social.name}
            >
              <Icon className="w-4.5 h-4.5" />
            </a>
          );
        })}
      </motion.div>
    </div>
  );
}
