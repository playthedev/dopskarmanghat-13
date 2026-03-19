import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  backgroundImage: string;
  showHero?: boolean;
}

const Hero: React.FC<HeroProps> = ({ title, backgroundImage, showHero = true }) => {
  if (!showHero) return null;

  return (
    <div className="relative h-[200px] md:h-[400px] overflow-hidden">
      {/* Background Image */}
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#1B2B65]/90 to-[#1B2B65]/70"></div> */}

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 