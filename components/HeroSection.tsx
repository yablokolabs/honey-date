'use client';

import '@ant-design/v5-patch-for-react-19';
import { Button, Space, Typography } from 'antd';
import { motion } from 'framer-motion';
import { HeartOutlined, CalendarOutlined, CoffeeOutlined } from '@ant-design/icons';
import Logo from './Logo';
import CupidAnimation from './CupidAnimation';

const { Text } = Typography;

// Define type for heart configurations
interface HeartConfig {
  initialX: number;
  initialY: number;
  animateX: number;
  animateY: number;
  size: number;
  delay: number;
  duration: number;
}

// Predefined heart positions and sizes to avoid random values that cause hydration issues
// Using fixed values for both initial and animate properties to ensure SSR/CSR consistency
const HEART_CONFIGURATIONS: HeartConfig[] = [
  // Left side hearts - varied starting heights
  { initialX: 5, initialY: 100, animateX: 15, animateY: -10, size: 18, delay: 0, duration: 10 },
  { initialX: 10, initialY: 110, animateX: 25, animateY: -15, size: 22, delay: 1.5, duration: 11 },
  { initialX: 15, initialY: 95, animateX: 35, animateY: -5, size: 15, delay: 3, duration: 9 },
  { initialX: 20, initialY: 105, animateX: 10, animateY: -20, size: 20, delay: 4.5, duration: 12 },
  { initialX: 25, initialY: 115, animateX: 45, animateY: -8, size: 16, delay: 6, duration: 10 },
  
  // Center-left hearts - mixed heights
  { initialX: 35, initialY: 100, animateX: 55, animateY: -12, size: 19, delay: 7.5, duration: 8 },
  { initialX: 40, initialY: 120, animateX: 30, animateY: -18, size: 17, delay: 9, duration: 11 },
  { initialX: 45, initialY: 90, animateX: 65, animateY: -6, size: 21, delay: 10.5, duration: 9 },
  { initialX: 50, initialY: 108, animateX: 40, animateY: -14, size: 18, delay: 12, duration: 10 },
  
  // Center-right hearts - varied elevations
  { initialX: 55, initialY: 115, animateX: 75, animateY: -9, size: 16, delay: 13.5, duration: 11 },
  { initialX: 60, initialY: 95, animateX: 50, animateY: -16, size: 20, delay: 15, duration: 9 },
  { initialX: 65, initialY: 125, animateX: 85, animateY: -4, size: 17, delay: 16.5, duration: 12 },
  { initialX: 70, initialY: 102, animateX: 60, animateY: -11, size: 19, delay: 18, duration: 8 },
  
  // Right side hearts - different starting points
  { initialX: 75, initialY: 118, animateX: 95, animateY: -7, size: 15, delay: 19.5, duration: 10 },
  { initialX: 80, initialY: 88, animateX: 70, animateY: -19, size: 22, delay: 21, duration: 11 },
  { initialX: 85, initialY: 112, animateX: 100, animateY: -3, size: 18, delay: 22.5, duration: 9 },
  { initialX: 90, initialY: 98, animateX: 80, animateY: -13, size: 20, delay: 24, duration: 12 },
  { initialX: 95, initialY: 106, animateX: 85, animateY: -17, size: 16, delay: 25.5, duration: 10 },
  
  // Additional scattered hearts for fuller coverage - extreme positions
  { initialX: 2, initialY: 122, animateX: 20, animateY: -2, size: 14, delay: 27, duration: 11 },
  { initialX: 98, initialY: 92, animateX: 80, animateY: -21, size: 19, delay: 28.5, duration: 9 },
  { initialX: 30, initialY: 114, animateX: 50, animateY: -5, size: 17, delay: 30, duration: 10 },
  { initialX: 70, initialY: 96, animateX: 90, animateY: -8, size: 15, delay: 31.5, duration: 12 },
];

// Define type for feature items
interface FeatureItem {
  icon: React.ReactNode;
  text: string;
}

export default function HeroSection() {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden">
      {/* Cupid Animations Background */}
      <CupidAnimation density="high" />
      
      {/* Floating Hearts (keeping some for variety) */}
      {HEART_CONFIGURATIONS.slice(0, 10).map((config, index) => (
        <motion.div
          key={`heart-${index}`}
          initial={{
            opacity: 0,
            left: `${config.initialX}vw`,
            top: `${config.initialY}vh`,
          }}
          animate={{
            opacity: [0, 0.4, 0],
            left: `${config.animateX}vw`,
            top: `${config.animateY}vh`,
          }}
          transition={{
            duration: config.duration,
            repeat: Infinity,
            delay: config.delay,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            fontSize: `${config.size}px`,
            color: '#FFFFFFaa',
            pointerEvents: 'none',
            zIndex: 0,
          }}
          className="sm:text-sm md:text-base"
        >
          <HeartOutlined />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="hero-content relative z-10 text-center max-w-4xl w-full px-4"
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                delay: 0.3,
                duration: 0.5,
                type: 'spring',
                stiffness: 200
              }
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.9 }}
            className="romantic-glow"
            style={{ borderRadius: '50%' }}
          >
            <Logo width={750} height={400} className="sm:w-48 sm:h-48 mx-auto" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Text
            style={{
              fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
              color: '#FFFFFF',
              fontWeight: 700,
              lineHeight: '1.3',
              display: 'block',
              textAlign: 'center',
              textShadow: '0 3px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 105, 180, 0.5)',
              marginBottom: '12px',
            }}
          >
            Bangalore's Most Romantic Café-Bar for Singles
          </Text>
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <Text
              style={{
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                color: '#FFFFFF',
                fontWeight: 500,
                marginTop: '8px',
                display: 'block',
                textAlign: 'center',
                lineHeight: '1.6',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
              }}
            >
              Weekly speed-dating events, instant dine-dates & couple cocktails that spark connection
            </Text>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}
          className="flex-col sm:flex-row"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            whileHover={{
              scale: 1.08,
              boxShadow: '0 8px 30px rgba(255, 20, 147, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="primary"
              size="large"
              icon={<CalendarOutlined />}
              style={{
                height: 'auto',
                padding: '12px 24px',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)',
                border: 'none',
                fontWeight: 600,
                boxShadow: '0 4px 20px rgba(255, 20, 147, 0.5)',
              }}
            >
              Join This Week's Event
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{
              scale: 1.08,
              backgroundColor: 'rgba(255, 255, 255, 0.2)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="large"
              icon={<CoffeeOutlined />}
              style={{
                height: 'auto',
                padding: '12px 24px',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                borderRadius: '50px',
                background: 'transparent',
                border: '2px solid #FF1493',
                color: '#FFFFFF',
                fontWeight: 600,
                boxShadow: '0 4px 20px rgba(255, 20, 147, 0.3)',
              }}
            >
              See Menu
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '16px',
          }}
        >
          {[
            { icon: <HeartOutlined />, text: 'Free Cocktails' },
            { icon: <CalendarOutlined />, text: 'Every Fri & Sat' },
            { icon: <CoffeeOutlined />, text: 'Instant Dates' },
          ].map((item: FeatureItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#FFFFFF',
                fontSize: '0.85rem',
                fontWeight: 500,
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
              }}
              className="text-xs sm:text-sm"
            >
              <span style={{ color: '#FF1493', fontSize: '1rem' }} className="text-lg">{item.icon}</span>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-pink-200 text-lg"
        >
          ↓
        </motion.div>
      </motion.div>
    </div>
  );
}