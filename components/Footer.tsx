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
      className="py-12 sm:py-16 px-4 relative w-full max-w-full"
    >
      <div className="w-full max-w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Title level={3} style={{ color: '#FFFFFF', marginBottom: '24px', fontSize: '1.8rem' }}>
              HoneyDate.club
            </Title>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: '0.9rem',
                fontWeight: 400,
                display: 'block',
                lineHeight: '1.6',
                marginBottom: '24px',
              }}
            >
              Bangalore's premier speed-dating café-bar where love meets over coffee and cocktails. 
              Creating meaningful connections in a vibrant, romantic atmosphere.
            </Text>
            <Space size="large">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ duration: 0.3 }}
                style={{ color: '#FFFFFF', fontSize: '1.5rem' }}
              >
                <InstagramOutlined />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ duration: 0.3 }}
                style={{ color: '#FFFFFF', fontSize: '1.5rem' }}
              >
                <WhatsAppOutlined />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
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
            <Title level={4} style={{ color: '#FFFFFF', marginBottom: '24px', fontSize: '1.5rem' }}>
              Quick Links
            </Title>
            <ul className="space-y-3">
              {['Events', 'Membership', 'Gallery', 'Testimonials', 'Contact Us'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-white text-base sm:text-lg hover:underline">
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
            <Title level={4} style={{ color: '#FFFFFF', marginBottom: '24px', fontSize: '1.5rem' }}>
              Stay Updated
            </Title>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: '0.9rem',
                display: 'block',
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
                style={{ padding: '0 16px' }}
              />
              <Button
                type="primary"
                onClick={handleSubscribe}
                className="rounded-full h-12"
                style={{
                  background: 'linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)',
                  border: 'none',
                  padding: '0 24px',
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
              color: '#FFFFFF',
              fontSize: 'clamp(0.8rem, 2vw, 1.05rem)',
              fontWeight: 500,
              display: 'block',
            }}
          >
            © 2025 HoneyDate.club — Where Love Meets Over Coffee & Cocktails
          </Text>
        </motion.div>
      </div>
    </motion.footer>
  );
}