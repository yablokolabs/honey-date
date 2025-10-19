'use client';

import { motion } from 'framer-motion';
import { Card, Typography, Steps } from 'antd';
import { HeartOutlined, UserAddOutlined, CoffeeOutlined, SmileOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export default function EventInfo() {
  const steps = [
    {
      title: 'Enroll',
      description: 'Register online or walk-in',
      icon: <UserAddOutlined style={{ fontSize: '2rem', color: '#FF1493' }} />,
    },
    {
      title: 'Meet',
      description: '7-minute speed dates',
      icon: <CoffeeOutlined style={{ fontSize: '2rem', color: '#FF1493' }} />,
    },
    {
      title: 'Match',
      description: 'Find your connection',
      icon: <HeartOutlined style={{ fontSize: '2rem', color: '#FF1493' }} />,
    },
    {
      title: 'Dine Date',
      description: 'Book your romantic table',
      icon: <SmileOutlined style={{ fontSize: '2rem', color: '#FF1493' }} />,
    },
  ];

  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <Title
          level={2}
          style={{
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: 700,
            marginBottom: '48px',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          How It Works
        </Title>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card
              className="glassmorphism"
              style={{
                borderRadius: '20px',
                padding: '32px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                height: '100%',
              }}
            >
              <Title level={3} style={{ color: '#5A3A31', marginBottom: '16px' }}>
                Event Schedule
              </Title>
              <Text style={{ fontSize: '1.1rem', color: '#5A3A31', display: 'block', lineHeight: '1.8' }}>
                <strong>Every Friday & Saturday</strong>
                <br />
                7:00 PM - 10:00 PM
                <br />
                <br />
                Location: Indiranagar, Bangalore
                <br />
                <br />
                Cover charge includes your first drink
              </Text>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card
              className="glassmorphism"
              style={{
                borderRadius: '20px',
                padding: '32px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                height: '100%',
              }}
            >
              <Title level={3} style={{ color: '#5A3A31', marginBottom: '16px' }}>
                What You Get
              </Title>
              <Text style={{ fontSize: '1.1rem', color: '#5A3A31', display: 'block', lineHeight: '1.8' }}>
                10+ curated speed dates
                <br />
                Free welcome cocktail
                <br />
                Couple-exclusive drinks menu
                <br />
                Instant dine-date booking
                <br />
                Romantic café ambiance
              </Text>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card
            className="glassmorphism"
            style={{
              borderRadius: '20px',
              padding: '48px 24px',
              border: '2px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 flex justify-center"
                  >
                    {step.icon}
                  </motion.div>
                  <Title level={4} style={{ color: '#5A3A31', marginBottom: '8px' }}>
                    {step.title}
                  </Title>
                  <Text style={{ fontSize: '0.95rem', color: '#8B6B61' }}>
                    {step.description}
                  </Text>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
