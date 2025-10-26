'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Typography, Space, Input, Button } from 'antd';
import { InstagramOutlined, WhatsAppOutlined, MailOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;
const { Search } = Input;

export default function Footer() {
  const [email, setEmail] = useState<string>('');

  const handleSubscribe = () => {
    if (email) {
      // In a real app, you would send this to your backend
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-8 sm:py-12 px-4 relative w-full max-w-full"
    >
      <div className="w-full max-w-full px-4 glassmorphism rounded-3xl p-6 sm:p-10 romantic-glow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Title level={3} style={{ color: '#FFFFFF', marginBottom: '16px', fontSize: '1.6rem', textAlign: 'left', textShadow: '0 2px 5px rgba(0,0,0,0.3)' }}>
              HoneyDate.club
            </Title>
            <Text
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.85rem',
                fontWeight: 400,
                display: 'block',
                textAlign: 'left',
                lineHeight: '1.5',
                marginBottom: '16px',
              }}
            >
              Bangalore's premier speed-dating café-bar where love meets over coffee and cocktails. 
              Creating meaningful connections in a vibrant, romantic atmosphere.
            </Text>
            <Space size="large">
              <motion.a
                href="#"
                whileHover={{ scale: 1.3, y: -5, color: '#FF1493' }}
                transition={{ duration: 0.3 }}
                style={{ color: '#FFFFFF', fontSize: '1.5rem' }}
              >
                <InstagramOutlined />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.3, y: -5, color: '#25D366' }}
                transition={{ duration: 0.3 }}
                style={{ color: '#FFFFFF', fontSize: '1.5rem' }}
              >
                <WhatsAppOutlined />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.3, y: -5, color: '#FFD700' }}
                transition={{ duration: 0.3 }}
                style={{ color: '#FFFFFF', fontSize: '1.5rem' }}
              >
                <MailOutlined />
              </motion.a>
            </Space>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Title level={4} style={{ color: '#FFFFFF', marginBottom: '16px', fontSize: '1.3rem', textAlign: 'left', textShadow: '0 2px 5px rgba(0,0,0,0.3)' }}>
              Quick Links
            </Title>
            <ul className="space-y-2">
              {['Events', 'Membership', 'Gallery', 'Testimonials', 'Contact Us'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 8, color: '#FFD700' }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-white text-sm sm:text-base hover:underline">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Title level={4} style={{ color: '#FFFFFF', marginBottom: '16px', fontSize: '1.3rem', textAlign: 'left', textShadow: '0 2px 5px rgba(0,0,0,0.3)' }}>
              Stay Updated
            </Title>
            <Text
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.9rem',
                display: 'block',
                textAlign: 'left',
                marginBottom: '16px',
                lineHeight: '1.5',
              }}
            >
              Subscribe to our newsletter for event updates and special offers
            </Text>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                placeholder="Your email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="rounded-full h-12"
                style={{ 
                  padding: '0 16px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#FFFFFF',
                }}
              />
              <Button
                type="primary"
                onClick={handleSubscribe}
                className="rounded-full h-12"
                style={{
                  background: 'linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)',
                  border: 'none',
                  padding: '0 24px',
                  boxShadow: '0 4px 15px rgba(255, 20, 147, 0.4)',
                }}
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-white border-opacity-20 mt-12 sm:mt-16 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Text
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: 'clamp(0.8rem, 2vw, 1rem)',
              fontWeight: 500,
              display: 'block',
              textShadow: '0 1px 3px rgba(0,0,0,0.2)',
            }}
          >
            © 2025 HoneyDate.club — Where Love Meets Over Coffee & Cocktails
          </Text>
        </motion.div>
      </div>
    </motion.footer>
  );
}