'use client';

import '@ant-design/v5-patch-for-react-19';
import { Card, Button, Space, Typography, Input } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useState } from 'react';

const { Title, Text } = Typography;
const { InputGroup } = Input;

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNotifyClick = () => {
    if (!email) {
      alert('Please enter your email address');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // In a real application, you would send this to your backend
    // For now, we'll just show an alert with the email
    alert(`Thank you for your interest! We'll notify ${email} when HoneyDate.club goes live. A reference copy has been sent to founder@honeydate.club`);
    
    // Reset form
    setEmail('');
    setIsSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="hero-card"
      >
        <Card
          className="glassmorphism"
          variant="filled"
          style={{
            textAlign: 'center',
            borderRadius: '24px',
            padding: '24px',
          }}
        >
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
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
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <HeartFilled
                style={{
                  fontSize: '72px',
                  color: '#FF1493',
                  filter: 'drop-shadow(0 4px 8px rgba(255, 20, 147, 0.3))'
                }}
                // Heart beating animation
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Title
                level={1}
                style={{
                  margin: 0,
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Honey Date 💞
              </Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Text
                style={{
                  fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                  color: '#5A3A31',
                  fontWeight: 500,
                  lineHeight: '1.6',
                  display: 'block',
                  textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
                }}
              >
                Where Love Meets Over Coffee & Cocktails
              </Text>
              <Text
                style={{
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                  color: '#8B6B61',
                  fontWeight: 400,
                  marginTop: '8px',
                  display: 'block'
                }}
              >
                Coming Soon to Bangalore
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {!isSubmitted ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                  >
                    <motion.div
                      whileFocus={{ 
                        scale: 1.02,
                        boxShadow: '0 0 0 2px rgba(255, 20, 147, 0.2)'
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Input
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          maxWidth: '300px',
                          margin: '0 auto 16px',
                          padding: '12px',
                          borderRadius: '50px',
                        }}
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 6px 24px rgba(255, 20, 147, 0.5)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="primary"
                      size="large"
                      onClick={handleNotifyClick}
                      style={{
                        height: 'auto',
                        padding: '12px 40px',
                        fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                        borderRadius: '50px',
                        background: 'linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)',
                        border: 'none',
                        fontWeight: 600,
                        boxShadow: '0 4px 16px rgba(255, 20, 147, 0.4)',
                        transition: 'all 0.3s ease'
                      }}
                      // Add pulse animation to button
                      animate={{
                        boxShadow: [
                          '0 4px 16px rgba(255, 20, 147, 0.4)',
                          '0 4px 20px rgba(255, 20, 147, 0.6)',
                          '0 4px 16px rgba(255, 20, 147, 0.4)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                    >
                      Notify Me When Live
                    </Button>
                  </motion.div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Text
                    style={{
                      fontSize: '1.1rem',
                      color: '#5A3A31',
                      fontWeight: 500,
                  display: 'block'
                    }}
                  >
                    Thank you! We'll notify you at {email} when we launch.
                  </Text>
                </motion.div>
              )}
            </motion.div>
          </Space>
        </Card>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: 'fixed',
          bottom: '20px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
            fontWeight: 500,
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          © 2025 HoneyDate.club — Crafted with ❤️ in Bangalore
        </Text>
      </motion.footer>
    </div>
  );
}