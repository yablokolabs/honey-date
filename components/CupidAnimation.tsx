'use client';

import { motion } from 'framer-motion';

interface CupidConfig {
  initialX: number;
  initialY: number;
  animateX: number;
  animateY: number;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
}

// Predefined Cupid positions for consistent SSR/CSR rendering
const CUPID_CONFIGURATIONS: CupidConfig[] = [
  // Left side Cupids
  { initialX: 3, initialY: 15, animateX: 8, animateY: 85, size: 40, delay: 0, duration: 20, rotation: 45 },
  { initialX: 8, initialY: 25, animateX: 12, animateY: 90, size: 35, delay: 3, duration: 22, rotation: -30 },
  { initialX: 5, initialY: 40, animateX: 10, animateY: 95, size: 45, delay: 6, duration: 24, rotation: 60 },
  { initialX: 12, initialY: 55, animateX: 18, animateY: 10, size: 38, delay: 9, duration: 21, rotation: -45 },
  { initialX: 7, initialY: 70, animateX: 15, animateY: 20, size: 42, delay: 12, duration: 23, rotation: 30 },
  
  // Right side Cupids
  { initialX: 92, initialY: 20, animateX: 88, animateY: 80, size: 36, delay: 2, duration: 21, rotation: -60 },
  { initialX: 95, initialY: 35, animateX: 90, animateY: 90, size: 44, delay: 5, duration: 23, rotation: 45 },
  { initialX: 88, initialY: 50, animateX: 93, animateY: 15, size: 39, delay: 8, duration: 22, rotation: -30 },
  { initialX: 90, initialY: 65, animateX: 85, animateY: 25, size: 41, delay: 11, duration: 24, rotation: 50 },
  { initialX: 94, initialY: 80, animateX: 89, animateY: 30, size: 37, delay: 14, duration: 20, rotation: -45 },
  
  // Center Cupids (floating across)
  { initialX: 45, initialY: 10, animateX: 55, animateY: 85, size: 48, delay: 1, duration: 25, rotation: 20 },
  { initialX: 50, initialY: 30, animateX: 48, animateY: 95, size: 40, delay: 4, duration: 23, rotation: -40 },
  { initialX: 55, initialY: 50, animateX: 45, animateY: 15, size: 43, delay: 7, duration: 22, rotation: 35 },
  { initialX: 48, initialY: 70, animateX: 52, animateY: 20, size: 38, delay: 10, duration: 24, rotation: -50 },
  { initialX: 52, initialY: 88, animateX: 50, animateY: 12, size: 45, delay: 13, duration: 21, rotation: 25 },
];

// Cupid SVG Component
const CupidSVG = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Cupid's body */}
    <circle cx="50" cy="35" r="12" fill="#FFD1DC" stroke="#FF69B4" strokeWidth="1.5" />
    
    {/* Cupid's head */}
    <circle cx="50" cy="20" r="8" fill="#FFE4E1" stroke="#FF69B4" strokeWidth="1.5" />
    
    {/* Eyes */}
    <circle cx="47" cy="19" r="1.5" fill="#FF1493" />
    <circle cx="53" cy="19" r="1.5" fill="#FF1493" />
    
    {/* Smile */}
    <path d="M 47 22 Q 50 24 53 22" stroke="#FF1493" strokeWidth="1" fill="none" strokeLinecap="round" />
    
    {/* Wings - left */}
    <ellipse cx="42" cy="35" rx="8" ry="12" fill="#FFF0F5" opacity="0.8" stroke="#FFB6C1" strokeWidth="1" />
    <ellipse cx="40" cy="35" rx="5" ry="9" fill="#FFE4E1" opacity="0.6" />
    
    {/* Wings - right */}
    <ellipse cx="58" cy="35" rx="8" ry="12" fill="#FFF0F5" opacity="0.8" stroke="#FFB6C1" strokeWidth="1" />
    <ellipse cx="60" cy="35" rx="5" ry="9" fill="#FFE4E1" opacity="0.6" />
    
    {/* Bow and arrow */}
    <line x1="45" y1="40" x2="70" y2="30" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Arrow */}
    <line x1="65" y1="32" x2="75" y2="28" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
    <path d="M 75 28 L 73 26 M 75 28 L 73 30" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Bow */}
    <path d="M 42 38 Q 40 40 42 42" stroke="#8B4513" strokeWidth="1.5" fill="none" />
    <line x1="42" y1="38" x2="42" y2="42" stroke="#CD853F" strokeWidth="0.5" />
    
    {/* Hearts around Cupid */}
    <path d="M 30 25 Q 30 22 32 22 Q 34 22 34 25 Q 34 28 30 32 Q 26 28 26 25 Q 26 22 28 22 Q 30 22 30 25" fill="#FF69B4" opacity="0.6" />
    <path d="M 70 40 Q 70 37 72 37 Q 74 37 74 40 Q 74 43 70 47 Q 66 43 66 40 Q 66 37 68 37 Q 70 37 70 40" fill="#FF1493" opacity="0.6" />
  </svg>
);

interface CupidAnimationProps {
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

export default function CupidAnimation({ density = 'medium', className = '' }: CupidAnimationProps) {
  // Adjust number of Cupids based on density
  // Reduce count for less overlap, especially with larger Cupids
  const cupidCount = density === 'low' ? 2 : density === 'high' ? 5 : 3;
  // Spread Cupids out by skipping some configs and increasing spacing
  const cupids = CUPID_CONFIGURATIONS.filter((_, i) => i % Math.ceil(CUPID_CONFIGURATIONS.length / cupidCount) === 0).slice(0, cupidCount);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {cupids.map((config, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            left: `${config.initialX + index * 15}%`,
            top: `${config.initialY + index * 10}%`,
            rotate: config.rotation,
          }}
          animate={{
            opacity: [0, 0.3, 0.5, 0.3, 0],
            left: `${config.animateX + index * 15}%`,
            top: `${config.animateY + index * 10}%`,
            rotate: [config.rotation, config.rotation + 360],
          }}
          transition={{
            duration: config.duration + 2,
            repeat: Infinity,
            delay: config.delay + index,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          <img src="/cupid.svg" alt="Cupid" width={config.size * 10} height={config.size * 10} style={{ width: config.size * 10, height: config.size * 10, pointerEvents: 'none', userSelect: 'none' }} />
        </motion.div>
      ))}
    </div>
  );
}
