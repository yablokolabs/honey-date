'use client';

import '@ant-design/v5-patch-for-react-19';
import { Card, Button, Space, Typography } from 'antd';
import { motion } from 'framer-motion';
import { HeartOutlined, CalendarOutlined, CoffeeOutlined } from '@ant-design/icons';
import Logo from './Logo';

const { Text } = Typography;

export default function HeroSection() {
  const floatingHearts = Array.from({ length: 8 });

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden">
      {floatingHearts.map((_, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: '100vh',
            x: `${Math.random() * 100}vw`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            y: '-20vh',
            x: `${Math.random() * 100}vw`,
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: index * 1.5,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            fontSize: `${20 + Math.random() * 20}px`,
            color: '#FFFFFFaa',
            pointerEvents: 'none',
          }}
        >
          <HeartOutlined />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="hero-card relative z-10"
      >
        <Card
          className="glassmorphism"
          variant="filled"
          style={{
            textAlign: 'center',
            borderRadius: '24px',
            padding: '32px 24px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
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
              >
                <Logo width={200} height={200} />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Text
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                  color: '#5A3A31',
                  fontWeight: 700,
                  lineHeight: '1.3',
                  display: 'block',
                  textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
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
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    color: '#8B6B61',
                    fontWeight: 500,
                    marginTop: '8px',
                    display: 'block',
                    lineHeight: '1.6',
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
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}
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
                    padding: '14px 32px',
                    fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
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
                    padding: '14px 32px',
                    fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                    borderRadius: '50px',
                    background: 'transparent',
                    border: '2px solid #FF1493',
                    color: '#FF1493',
                    fontWeight: 600,
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
                gap: '24px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: '8px',
              }}
            >
              {[
                { icon: <HeartOutlined />, text: 'Free Cocktails' },
                { icon: <CalendarOutlined />, text: 'Every Fri & Sat' },
                { icon: <CoffeeOutlined />, text: 'Instant Dates' },
              ].map((item, index) => (
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
                    color: '#5A3A31',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                  }}
                >
                  <span style={{ color: '#FF1493', fontSize: '1.2rem' }}>{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </Space>
        </Card>
      </motion.div>
    </div>
  );
}