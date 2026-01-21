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
      className="relative w-full pt-section"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Title level={3} style={{ color: '#FFFFFF', marginBottom: '24px', fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', textAlign: 'left', textShadow: '0 2px 8px rgba(0,0,0,0.4)', fontWeight: 600 }}>
              HoneyDate.club
            </Title>
            <Text
              style={{
                color: 'rgba(255, 255, 255, 0.95)',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                fontWeight: 400,
                display: 'block',
                textAlign: 'left',
                lineHeight: '1.8',
                marginBottom: '28px',
                textShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }}
            >
              Bangalore's premier speed-dating café-bar where love meets over coffee and cocktails.
              Creating meaningful connections in a vibrant, romantic atmosphere.
            </Text>
            <Space size={28}>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  color: '#FFFFFF',
                  fontSize: '1.8rem',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                  display: 'inline-block'
                }}
              >
                <InstagramOutlined />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  color: '#FFFFFF',
                  fontSize: '1.8rem',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                  display: 'inline-block'
                }}
              >
                <WhatsAppOutlined />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  color: '#FFFFFF',
                  fontSize: '1.8rem',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                  display: 'inline-block'
                }}
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
            className="space-y-8"
          >
            <Title level={4} style={{ color: '#FFFFFF', marginBottom: '24px', fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)', textAlign: 'left', textShadow: '0 2px 8px rgba(0,0,0,0.4)', fontWeight: 600 }}>
              Quick Links
            </Title>
            <ul className="space-y-4">
              {['Events', 'Membership', 'Gallery', 'Testimonials', 'Contact Us'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ listStyle: 'none' }}
                >
                  <motion.a
                    href="#"
                    whileHover={{ color: '#FFD700' }}
                    style={{
                      color: 'rgba(255, 255, 255, 0.95)',
                      fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                      textDecoration: 'none',
                      display: 'inline-block',
                      textShadow: '0 1px 3px rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {item}
                  </motion.a>
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
            className="space-y-8"
          >
            <Title level={4} style={{ color: '#FFFFFF', marginBottom: '24px', fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)', textAlign: 'left', textShadow: '0 2px 8px rgba(0,0,0,0.4)', fontWeight: 600 }}>
              Stay Updated
            </Title>
            <Text
              style={{
                color: 'rgba(255, 255, 255, 0.95)',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                display: 'block',
                textAlign: 'left',
                marginBottom: '24px',
                lineHeight: '1.8',
                textShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }}
            >
              Subscribe to our newsletter for event updates and special offers
            </Text>
            <div className="flex flex-col gap-4">
              <Input
                placeholder="Your email address"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="rounded-full"
                style={{
                  height: '48px',
                  padding: '0 20px',
                  background: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(10px)',
                  border: '1.5px solid rgba(255, 255, 255, 0.4)',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="primary"
                  onClick={handleSubscribe}
                  className="rounded-full w-full"
                  style={{
                    height: '48px',
                    background: 'linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)',
                    border: 'none',
                    padding: '0 32px',
                    boxShadow: '0 6px 20px rgba(255, 20, 147, 0.5)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                  }}
                >
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-white border-opacity-30 mt-16 sm:mt-20 pt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Text
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: 'clamp(0.85rem, 2vw, 1rem)',
              fontWeight: 500,
              display: 'block',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '0.3px',
            }}
          >
            © 2025 HoneyDate.club — Where Love Meets Over Coffee & Cocktails
          </Text>
        </motion.div>
      </div>
    </motion.footer>
  );
}