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
    <section className="py-16 px-4">
      <motion.div className="max-w-6xl mx-auto space-y-16 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-pink-900 mb-4">Couples in Action</h2>
          <p className="text-4xl md:text-2xl font-bold text-pink-400 mb-4">Real Connections, Real Moments</p>
          <p className="text-4xl md:text-2xl font-bold text-pink-600 mb-4">Join our weekly events and become part of our success stories</p>
        </motion.div>

        <motion.div className="rounded-3xl overflow-hidden shadow-2xl" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="relative h-64 sm:h-80 md:h-[500px]">
            <img src="/honey_date_event.jpg" alt="Couples enjoying Honey Date events" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>

        <motion.div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          {highlights.map((h, i) => (
            <motion.div key={i} whileHover={{ y: -8 }} className="bg-white bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl sm:text-4xl mb-4">{h.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-pink-900 mb-2">{h.title}</h3>
              <p className="text-pink-700 text-sm sm:text-base">{h.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}