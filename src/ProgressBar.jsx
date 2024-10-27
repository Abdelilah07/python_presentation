import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ currentSlide, totalSlides }) => {
  const percentage = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="progress-bar-container">
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
};

export default ProgressBar;