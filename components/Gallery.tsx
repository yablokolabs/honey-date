'use client';

import { motion } from 'framer-motion';
import { Card, Typography } from 'antd';
import Image from 'next/image';

const { Text } = Typography;

// Define type for gallery items
interface GalleryItem {
  title: string;
  description: string;
  gradient: string;
  image: string;
}

// Define type for feature items
interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

// Updated gallery items with more couple-focused content
const galleryItems: GalleryItem[] = [
  {
    title: 'Speed-Date Fridays',
    description: 'Meet 10+ singles in one night',
    gradient: 'linear-gradient(135deg, rgba(255, 20, 147, 0.9), rgba(255, 105, 180, 0.8))',
    image: 'Speed date fridays.jpg'
  },
  {
    title: 'Romantic Dinners',
    description: 'Enjoy intimate meals for two',
    gradient: 'linear-gradient(135deg, rgba(255, 127, 137, 0.9), rgba(255, 182, 193, 0.8))',
    image: 'Romantic dinners.jpg'
  },
  {
    title: 'Signature Cocktails',
    description: 'Exclusive couple drinks',
    gradient: 'linear-gradient(135deg, rgba(255, 218, 185, 0.9), rgba(255, 160, 122, 0.8))',
    image: 'Signature cocktails.jpg'
  },
  {
    title: 'Fun Activities',
    description: 'Games and entertainment for couples',
    gradient: 'linear-gradient(135deg, rgba(255, 105, 180, 0.9), rgba(255, 20, 147, 0.8))',
    image: 'Fun activities.jpg'
  },
  {
    title: 'Weekend Getaways',
    description: 'Romantic escapes for matched couples',
    gradient: 'linear-gradient(135deg, rgba(219, 112, 147, 0.9), rgba(255, 105, 180, 0.8))',
    image: 'Weekend getaways.jpg'
  },
  {
    title: 'Photo Sessions',
    description: 'Capture your special moments',
    gradient: 'linear-gradient(135deg, rgba(255, 182, 193, 0.9), rgba(255, 192, 203, 0.8))',
    image: 'Photo sessions.jpg'
  },
];

export default function Gallery() {
  return (
    <section className="py-12 sm:py-16 px-4">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-900 mb-4">
            Romantic Moments Captured
          </h2>
          <p className="text-1xl sm:text-2xl md:text-2xl font-bold text-pink-400 mb-4">
            From first meetings to romantic moments, we create the perfect atmosphere for connections
          </p>
        </motion.div>

        {/* Responsive gallery - horizontal scroll on mobile, grid on desktop */}
        <div className="overflow-x-auto pb-4 scrollbar-hide md:overflow-visible md:pb-0 w-full max-w-full">
          <div className="flex gap-4 sm:gap-6 px-2 sm:px-4 md:hidden w-max">
            {galleryItems.map((item: GalleryItem, index: number) => (
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
                  className="glassmorphism cursor-pointer relative overflow-hidden w-64 md:w-auto"
                  style={{
                    width: '250px',
                    height: '350px',
                    borderRadius: '20px',
                    background: item.gradient,
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px',
                    position: 'relative',
                  }}
                >
                  {/* AI-generated images */}
                  <div className="absolute inset-0">
                    <Image
                      src={`/${item.image}`}
                      alt={item.title}
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 768px) 250px, 300px"
                    />
                  </div>
                  
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
                        fontSize: '1.5rem',
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
                        fontSize: '1rem',
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
          
          {/* Grid layout for desktop */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item: GalleryItem, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card
                  className="glassmorphism cursor-pointer relative overflow-hidden h-full"
                  style={{
                    borderRadius: '20px',
                    background: item.gradient,
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px',
                    position: 'relative',
                  }}
                >
                  {/* AI-generated images */}
                  <div className="absolute inset-0">
                    <Image
                      src={`/${item.image}`}
                      alt={item.title}
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 768px) 250px, 300px"
                    />
                  </div>
                  
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
                        fontSize: '1.5rem',
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
                        fontSize: '1rem',
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

        {/* Additional couple-focused content section */}
        <motion.div 
          className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            {
              title: "AI-Generated Couple Experiences",
              description: "Our AI-curated experiences ensure every moment is picture-perfect",
              icon: "💕"
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
              className="bg-white bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-pink-900 mb-2">{item.title}</h3>
              <p className="text-pink-700 text-sm sm:text-base">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}