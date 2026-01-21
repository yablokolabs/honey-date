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
    <section className="w-full relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 mb-section !important">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Card
              className="glassmorphism romantic-glow"
              style={{
                borderRadius: '20px',
                padding: '36px',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                height: '100%',
                boxShadow: '0 10px 40px rgba(255, 105, 180, 0.2)',
              }}
            >
              <Title level={3} style={{ color: '#5A3A31', marginBottom: '16px', fontSize: '1.4rem', textAlign: 'left' }}>
                Event Schedule
              </Title>
              <Text style={{ fontSize: '0.95rem', color: '#5A3A31', display: 'block', lineHeight: '1.8', textAlign: 'left' }}>
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
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Card
              className="glassmorphism romantic-glow"
              style={{
                borderRadius: '20px',
                padding: '36px',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                height: '100%',
                boxShadow: '0 10px 40px rgba(255, 105, 180, 0.2)',
              }}
            >
              <Title level={3} style={{ color: '#5A3A31', marginBottom: '16px', fontSize: '1.4rem', textAlign: 'left' }}>
                What You Get
              </Title>
              <Text style={{ fontSize: '0.95rem', color: '#5A3A31', display: 'block', lineHeight: '1.8', textAlign: 'left' }}>
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
            className="glassmorphism romantic-glow"
            style={{
              borderRadius: '20px',
              padding: '40px 32px',
              border: '2px solid rgba(255, 255, 255, 0.4)',
              boxShadow: '0 10px 40px rgba(255, 105, 180, 0.2)',
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12">
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
                    className="mb-6 !important flex justify-center"
                  >
                    {step.icon}
                  </motion.div>
                  <Title level={4} style={{ color: '#5A3A31', marginBottom: '10px', fontSize: '1.1rem', textAlign: 'center' }}>
                    {step.title}
                  </Title>
                  <Text style={{ fontSize: '0.85rem', color: '#8B6B61', display: 'block', textAlign: 'center', lineHeight: '1.5' }}>
                    {step.description}
                  </Text>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* New section for couple experiences */}
        <motion.div
          className="mt-section text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title level={3} style={{ color: '#5A3A31', marginBottom: '40px', fontSize: '1.8rem', textAlign: 'center' }}>
            AI-Generated Couple Experiences
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Matchmaking",
                description: "Our AI analyzes compatibility for better matches",
                icon: ""
              },
              {
                title: "Bustling Social Atmosphere",
                description: "Vibrant environment where connections naturally flourish",
                icon: ""
              },
              {
                title: "Romantic Settings",
                description: "Carefully designed spaces for intimate conversations",
                icon: ""
              }
            ].map((item: FeatureItem, index: number) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white bg-opacity-30 backdrop-blur-sm rounded-2xl p-10 text-center"
              >
                <div className="text-3xl sm:text-4xl mb-10 !important">{item.icon}</div>
                <h4 className="text-xl sm:text-2xl font-bold text-pink-900 mb-6 !important">{item.title}</h4>
                <p className="text-pink-700 text-sm sm:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}