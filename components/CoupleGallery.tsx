"use client";

import { motion } from 'framer-motion';

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export default function CoupleGallery() {
  const highlights: FeatureItem[] = [
    { title: 'Vibrant Social Scene', description: 'Our bustling events create the perfect atmosphere for natural connections', icon: '' },
    { title: 'Romantic Settings', description: 'Carefully curated environments that encourage meaningful conversations', icon: '' },
    { title: 'Success Stories', description: 'Countless couples have found love through our events', icon: '' },
  ];

  return (
    <section className="w-full overflow-hidden">
      <motion.div className="w-full space-y-section-md text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <motion.div className="text-center mb-section !important" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-pink-900 mb-5 gradient-text">Couples in Action</h2>
          <p className="text-xl md:text-2xl font-bold text-pink-400 mb-4">Real Connections, Real Moments</p>
          <p className="text-lg md:text-xl font-semibold text-pink-600">Join our weekly events and become part of our success stories</p>
        </motion.div>

        <motion.div 
          className="rounded-3xl overflow-hidden shadow-2xl romantic-glow" 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          {/* Use h-auto + object-contain so the full image is visible (no cropping) */}
          <div className="relative w-full h-auto">
            <img
              src="/honey_date_event.jpg"
              alt="Couples enjoying Honey Date events"
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>

        <motion.div className="mt-section grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12, scale: 1.05 }}
              className="glassmorphism rounded-2xl p-10 text-center"
              style={{
                boxShadow: '0 10px 40px rgba(255, 105, 180, 0.2)',
              }}
            >
              <div className="text-3xl sm:text-4xl mb-8">{h.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-pink-900 mb-4">{h.title}</h3>
              <p className="text-pink-700 text-sm">{h.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}