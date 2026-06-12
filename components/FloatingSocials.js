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
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function FloatingSocials() {
  const socials = [
    {
      name: 'X (Twitter)',
      url: 'https://x.com',
      icon: XIcon,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: InstagramIcon,
    },
  ];

  return (
    <div className="fixed z-40 bottom-6 right-6 md:right-6 md:top-1/2 md:bottom-auto md:-translate-y-1/2 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="flex flex-row md:flex-col items-center gap-1.5 p-1.5 rounded-full bg-zinc-950/70 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_-6px_rgba(0,0,0,0.3)] pointer-events-auto transition-all duration-300"
      >
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-250 cursor-pointer"
              aria-label={social.name}
              title={social.name}
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </motion.div>
    </div>
  );
}
