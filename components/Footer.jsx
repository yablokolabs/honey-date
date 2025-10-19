'use client';

import { motion } from 'framer-motion';
import { Typography, Space } from 'antd';
import { InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <Space size="large" className="mb-6">
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, y: -5 }}
            transition={{ duration: 0.3 }}
            style={{ color: '#FFFFFF', fontSize: '2rem' }}
          >
            <InstagramOutlined />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, y: -5 }}
            transition={{ duration: 0.3 }}
            style={{ color: '#FFFFFF', fontSize: '2rem' }}
          >
            <WhatsAppOutlined />
          </motion.a>
        </Space>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
            fontWeight: 500,
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            display: 'block',
          }}
        >
          © 2025 HoneyDate.club — Where Love Meets Over Coffee & Cocktails
        </Text>
      </div>
    </motion.footer>
  );
}
