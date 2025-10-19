'use client';

import { motion } from 'framer-motion';
import { Card, Typography } from 'antd';

const { Text } = Typography;

const galleryItems = [
  {
    title: 'Speed-Date Fridays',
    description: 'Meet 10+ singles in one night',
    gradient: 'linear-gradient(135deg, rgba(255, 20, 147, 0.9), rgba(255, 105, 180, 0.8))',
  },
  {
    title: 'Instant Dine Dates',
    description: 'Matched? Book your table now',
    gradient: 'linear-gradient(135deg, rgba(255, 127, 137, 0.9), rgba(255, 182, 193, 0.8))',
  },
  {
    title: 'Signature Cocktails',
    description: 'Exclusive couple drinks',
    gradient: 'linear-gradient(135deg, rgba(255, 218, 185, 0.9), rgba(255, 160, 122, 0.8))',
  },
  {
    title: "Singles' Night Specials",
    description: 'First drink on us',
    gradient: 'linear-gradient(135deg, rgba(255, 105, 180, 0.9), rgba(255, 20, 147, 0.8))',
  },
];

export default function Gallery() {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max px-4">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="flex-shrink-0"
              >
                <Card
                  className="glassmorphism cursor-pointer"
                  style={{
                    width: '300px',
                    height: '400px',
                    borderRadius: '20px',
                    background: item.gradient,
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '24px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
                      pointerEvents: 'none',
                    }}
                  />
                  <div className="relative z-10">
                    <Text
                      style={{
                        fontSize: '1.75rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        display: 'block',
                        marginBottom: '8px',
                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        color: '#FFFFFF',
                        display: 'block',
                        textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      {item.description}
                    </Text>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
