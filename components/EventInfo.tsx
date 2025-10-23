'use client';

import { motion } from 'framer-motion';
import { Card, Typography, Steps } from 'antd';
import { HeartOutlined, UserAddOutlined, CoffeeOutlined, SmileOutlined } from '@ant-design/icons';
import React from 'react';

const { Title, Text } = Typography;

// Define type for step items
interface StepItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Define type for feature items
interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export default function EventInfo() {
  const steps: StepItem[] = [
    {
      title: 'Enroll',
      description: 'Register online or walk-in',
      icon: <UserAddOutlined style={{ fontSize: '1.5rem', color: '#FF1493' }} />,
    },
    {
      title: 'Meet',
      description: '7-minute speed dates',
      icon: <CoffeeOutlined style={{ fontSize: '1.5rem', color: '#FF1493' }} />,
    },
    {
      title: 'Match',
      description: 'Find your connection',
      icon: <HeartOutlined style={{ fontSize: '1.5rem', color: '#FF1493' }} />,
    },
    {
      title: 'Dine Date',
      description: 'Book your romantic table',
      icon: <SmileOutlined style={{ fontSize: '1.5rem', color: '#FF1493' }} />,
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-full px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <Title
            level={2}
            style={{
              textAlign: 'center',
              color: '#5A3A31',
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: 700,
              marginBottom: '24px',
            }}
          >
            How It Works
          </Title>
          <p className="text-lg sm:text-xl text-pink-700 max-w-2xl mx-auto">
            Discover love through our simple 4-step process designed for meaningful connections
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
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
                padding: '24px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                height: '100%',
              }}
            >
              <Title level={3} style={{ color: '#5A3A31', marginBottom: '16px', fontSize: '1.5rem', textAlign: 'left' }}>
                Event Schedule
              </Title>
              <Text style={{ fontSize: '1rem', color: '#5A3A31', display: 'block', lineHeight: '1.8', textAlign: 'left' }}>
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
                padding: '24px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                height: '100%',
              }}
            >
              <Title level={3} style={{ color: '#5A3A31', marginBottom: '16px', fontSize: '1.5rem', textAlign: 'left' }}>
                What You Get
              </Title>
              <Text style={{ fontSize: '1rem', color: '#5A3A31', display: 'block', lineHeight: '1.8', textAlign: 'left' }}>
                10+ curated speed dates
                <br />
                Free welcome cocktail
                <br />
                Couple-exclusive drinks menu
                <br />
                Instant dine-date booking
                <br />
                Romantic café ambiance
                <br />
                AI-generated compatibility matching
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
              padding: '32px 16px',
              border: '2px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {steps.map((step: StepItem, index: number) => (
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
                  <Title level={4} style={{ color: '#5A3A31', marginBottom: '8px', fontSize: '1.2rem', textAlign: 'center' }}>
                    {step.title}
                  </Title>
                  <Text style={{ fontSize: '0.9rem', color: '#8B6B61', display: 'block', textAlign: 'center' }}>
                    {step.description}
                  </Text>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* New section for couple experiences */}
        <motion.div
          className="mt-12 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title level={3} style={{ color: '#5A3A31', marginBottom: '24px', fontSize: '1.8rem', textAlign: 'center' }}>
            AI-Generated Couple Experiences
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Personalized Matchmaking",
                description: "Our AI analyzes compatibility for better matches",
                icon: "🤖"
              },
              {
                title: "Bustling Social Atmosphere",
                description: "Vibrant environment where connections naturally flourish",
                icon: "🎉"
              },
              {
                title: "Romantic Settings",
                description: "Carefully designed spaces for intimate conversations",
                icon: "🌹"
              }
            ].map((item: FeatureItem, index: number) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 text-center mt-6"
              >
                <div className="text-3xl sm:text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl sm:text-2xl font-bold text-pink-900 mb-2">{item.title}</h4>
                <p className="text-pink-700 text-sm sm:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}