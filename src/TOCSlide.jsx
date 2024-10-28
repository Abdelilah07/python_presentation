import React from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TOCSlide = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: { transition: { staggerChildren: 0.1 } },
    }}
    className="h-full flex flex-col p-8"
  >
    <motion.h2
      variants={itemVariants}
      className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
    >
      Table of Contents
    </motion.h2>

    <div className="grid grid-cols-2 gap-x-12 gap-y-4">
      <motion.div variants={itemVariants} className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Introduction</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 font-medium">1.</span>
              <span className="text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer">
                Introduction to Python
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 font-medium">2.</span>
              <span className="text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer">
                What is Python?
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 font-medium">3.</span>
              <span className="text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer">
                Why Python is Popular
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Core Concepts</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 font-medium">4.</span>
              <span className="text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer">
                Python's Key Features
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 font-medium">5.</span>
              <span className="text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer">
                Automation
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 font-medium">6.</span>
              <span className="text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer">
                Data Processing
              </span>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Applications</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 font-medium">7.</span>
              <span className="text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer">
                Rapid Scripting and Prototyping
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 font-medium">8.</span>
              <span className="text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer">
                Integration with Other Tools
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 font-medium">9.</span>
              <span className="text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer">
                Real-life Use Cases
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Conclusion</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 font-medium">10.</span>
              <span className="text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer">
                Python in Business Processes
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 font-medium">11.</span>
              <span className="text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer">
                Summary and Key Takeaways
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 font-medium">12.</span>
              <span className="text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer">
                Q&A Session
              </span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>

    <motion.div
      variants={itemVariants}
      className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
    >
      <p className="text-gray-600 dark:text-gray-300">
        Click on any topic to navigate directly to that slide
      </p>
    </motion.div>
  </motion.div>
);
export default TOCSlide;
