'use client';

import { motion } from 'framer-motion';

// Define type for feature items
interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

const CoupleGallery = () => {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-900 mb-4">
            Couples in Action
          </h2>
          <p className="text-xl text-pink-700 max-w-2xl mx-auto">
            See the magic happen as singles become couples at HoneyDate.club
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Event Image Container */}
          <div className="relative h-64 sm:h-80 md:h-[500px]">
            {/* Actual event image */}
            <img 
              src="/honey_date_event.jpg" 
              alt="Couples enjoying Honey Date events" 
              className="w-full h-full object-cover"
            />
            
            {/* Overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Image caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
              <h3 className="text-xl sm:text-2xl font-bold">Real Connections, Real Moments</h3>
              <p className="text-sm sm:text-base">Join our weekly events and become part of our success stories</p>
            </div>
          </div>
        </motion.div>

        {/* Event Highlights */}
        <motion.div 
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            {
              title: "Vibrant Social Scene",
              description: "Our bustling events create the perfect atmosphere for natural connections",
              icon: "🎉"
            },
            {
              title: "Romantic Settings",
              description: "Carefully curated environments that encourage meaningful conversations",
              icon: "🌹"
            },
            {
              title: "Success Stories",
              description: "Countless couples have found love through our events",
              icon: "💑"
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
};

export default CoupleGallery;