import { motion } from 'framer-motion';
import TOCSlide from './TOCSlide';
import pythonLogo from './assets/python-logo.png';
import guidoImage from './assets/guido.jpg';
import googleLogo from './assets/google-logo.svg';
import nasaLogo from './assets/nasa-logo.svg';
import netflixLogo from './assets/netflix-logo.svg';
import pythonPopularityChart from './assets/python-popularity-chart.png';
import djangoLogo from './assets/django-logo.svg';
import tensorflowLogo from './assets/TensorFlow_logo.svg';
import pandasLogo from './assets/Pandas_logo.svg';
import matplotlibLogo from './assets/Matplotlib_icon.svg';
import {
  Workflow,
  TrendingUp,
  PocketKnife,
  MousePointerClick,
  ZapIcon,
  LibraryBig,
  MessageCircleQuestion,
  Blocks,
  CogIcon,
} from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ImageWithFallback = ({ src, alt, className }) => (
  <motion.div
    variants={itemVariants}
    className={`relative rounded-lg overflow-hidden ${className}`}
  >
    <img src={src || '/api/placeholder/600/400'} alt={alt} className="w-full h-full object-cover" />
  </motion.div>
);

const BulletPoint = ({ children }) => (
  <li className="flex items-start space-x-2">
    <span className="text-blue-500">•</span>
    <span className="text-gray-600 dark:text-gray-300">{children}</span>
  </li>
);

const slides = [
  // Slide 1: Title Slide
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: { transition: { staggerChildren: 0.1 } },
    }}
    className="h-full flex flex-col items-center justify-center space-y-8 text-center p-8"
  >
    <motion.h1 variants={itemVariants} className="text-5xl font-bold text-gray-900 dark:text-white">
      Introduction to Python
    </motion.h1>
    <motion.h2 variants={itemVariants} className="text-2xl text-gray-600 dark:text-gray-300">
      How It Can Improve Workflow
    </motion.h2>
    <ImageWithFallback
      src={pythonLogo}
      alt="Python Programming"
      className="w-64 h-64 mx-auto mt-8"
    />
    <motion.p variants={itemVariants} className="text-gray-500 dark:text-gray-400">
      Presented by Us
    </motion.p>
  </motion.div>,

  // Table of Contents
  <TOCSlide />,

  // Slide 2: What is Python?
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: { transition: { staggerChildren: 0.1 } },
    }}
    className="h-full grid grid-cols-2 gap-8 p-8"
  >
    <div className="space-y-6">
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold text-gray-900 dark:text-white"
      >
        What is Python?
      </motion.h2>
      <motion.ul variants={itemVariants} className="space-y-4">
        <BulletPoint>High-level, interpreted programming language</BulletPoint>
        <BulletPoint>Created in 1991 by Guido van Rossum</BulletPoint>
        <BulletPoint>Emphasizes code readability and simplicity</BulletPoint>
        <BulletPoint>One of the most popular programming languages worldwide</BulletPoint>
        <BulletPoint>Used from web development to machine learning</BulletPoint>
      </motion.ul>
    </div>
    <div className="grid grid-rows-2 gap-4 mx-auto">
      <ImageWithFallback src={pythonLogo} alt="Python Logo" className="w-52" />
      <ImageWithFallback src={guidoImage} alt="Guido van Rossum" className="size-52" />
    </div>
  </motion.div>,

  // Slide 3: Why Python is Popular
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: { transition: { staggerChildren: 0.1 } },
    }}
    className="h-full grid grid-cols-2 gap-8 p-8"
  >
    <div className="space-y-6">
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold text-gray-900 dark:text-white"
      >
        Why Python is Popular
      </motion.h2>
      <motion.ul variants={itemVariants} className="space-y-4">
        <BulletPoint>
          <strong>Easy to Learn:</strong> Simple and intuitive syntax makes it beginner-friendly
        </BulletPoint>
        <BulletPoint>
          <strong>Versatile:</strong> Web development, automation, data analysis, and machine
          learning
        </BulletPoint>
        <BulletPoint>
          <strong>Cross-Platform:</strong> Runs on Windows, macOS, and Linux
        </BulletPoint>
        <BulletPoint>
          <strong>Active Community:</strong> Extensive documentation and resources
        </BulletPoint>
        <BulletPoint>
          <strong>Vast Libraries:</strong> Rich ecosystem of packages and frameworks
        </BulletPoint>
      </motion.ul>
    </div>
    <div className="space-y-16">
      <ImageWithFallback src={pythonPopularityChart} alt="Python Popularity Graph" className="" />
      <div className="flex gap-4 items-center justify-center">
        {[googleLogo, nasaLogo, netflixLogo].map((logo, index) => (
          <ImageWithFallback
            key={index}
            src={logo}
            alt={`${logo.split('-')[0]} Logo`}
            className="h-40 w-auto p-2"
          />
        ))}
      </div>
    </div>
  </motion.div>,

  // Slide 4: Python's Key Features
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: { transition: { staggerChildren: 0.1 } },
    }}
    className="h-full flex flex-col p-8 space-y-8"
  >
    <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white">
      Python's Key Features
    </motion.h2>
    <div className="grid grid-cols-3 gap-8 flex-grow items-center">
      <motion.div variants={itemVariants} className="space-y-4 text-center">
        <MousePointerClick className="w-32 h-32 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Simple Syntax</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Clean and readable code structure for better collaboration
        </p>
      </motion.div>
      <motion.div variants={itemVariants} className="space-y-4 text-center">
        <ZapIcon className="w-32 h-32 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Dynamic Typing</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Flexible variable types for faster development
        </p>
      </motion.div>
      <motion.div variants={itemVariants} className="space-y-4 text-center">
        <LibraryBig className="w-32 h-32 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Rich Libraries</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Extensive built-in and third-party packages
        </p>
      </motion.div>
    </div>
  </motion.div>,

  // Slide 5: Automation
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: { transition: { staggerChildren: 0.1 } },
    }}
    className="h-full grid grid-cols-2 gap-8 p-8"
  >
    <div className="space-y-6">
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold text-gray-900 dark:text-white"
      >
        How Python Improves Workflow: Automation
      </motion.h2>
      <motion.ul variants={itemVariants} className="space-y-4">
        <BulletPoint>Automate repetitive tasks like file management</BulletPoint>
        <BulletPoint>Web scraping and data collection</BulletPoint>
        <BulletPoint>Automated email handling and reporting</BulletPoint>
        <BulletPoint>Reduces human error and saves time</BulletPoint>
      </motion.ul>
      <motion.div
        variants={itemVariants}
        className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
      >
        <h3 className="font-semibold mb-2">Example Use Cases:</h3>
        <ul className="space-y-2">
          <li>• Automated file renaming systems</li>
          <li>• Daily report generation</li>
          <li>• Scheduled email responses</li>
        </ul>
      </motion.div>
    </div>
    {/* <ImageWithFallback
            src={automationFlowchart}
            alt="Automation Flowchart"
            className="w-full h-full p-5"
        /> */}
    <motion.div variants={itemVariants} className="w-full h-full p-5">
      <Workflow className="w-full h-full" />
    </motion.div>
  </motion.div>,

  // Slide 6: Data Processing
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: { transition: { staggerChildren: 0.1 } },
    }}
    className="h-full grid grid-cols-2 gap-8 p-8"
  >
    <div className="space-y-6">
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold text-gray-900 dark:text-white"
      >
        Data Processing and Analysis
      </motion.h2>
      <motion.ul variants={itemVariants} className="space-y-4">
        <BulletPoint>
          <strong>Efficient Data Handling:</strong> Process large datasets with pandas and NumPy
        </BulletPoint>
        <BulletPoint>
          <strong>Data Visualization:</strong> Create insightful visualizations with matplotlib
        </BulletPoint>
        <BulletPoint>
          <strong>Automated Reports:</strong> Generate reports from sales data automatically
        </BulletPoint>
        <BulletPoint>
          <strong>Real-time Analysis:</strong> Process and analyze data on the fly
        </BulletPoint>
      </motion.ul>
    </div>
    <div className="flex flex-col justify-start gap-4 items-center">
      <ImageWithFallback src={pandasLogo} alt="Data Analysis Example" className="" />
      <ImageWithFallback src={matplotlibLogo} alt="Data Visualization Example" className="" />
    </div>
  </motion.div>,

  // Slide 7: Rapid Scripting and Prototyping
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: { transition: { staggerChildren: 0.1 } },
    }}
    className="h-full grid grid-cols-2 gap-8 p-8"
  >
    <div className="space-y-6">
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold text-gray-900 dark:text-white"
      >
        Rapid Scripting and Prototyping
      </motion.h2>
      <motion.ul variants={itemVariants} className="space-y-4">
        <BulletPoint>Quick development of small-scale prototypes</BulletPoint>
        <BulletPoint>Easy integration with other technologies</BulletPoint>
        <BulletPoint>Perfect for MVP development</BulletPoint>
        <BulletPoint>Faster time to market</BulletPoint>
      </motion.ul>
    </div>
    <motion.div variants={itemVariants} className="w-full h-full p-5">
      <ZapIcon className="w-full h-full" />
    </motion.div>
  </motion.div>,
  // Slide 8: Integration with Other Tools
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: { transition: { staggerChildren: 0.1 } },
    }}
    className="h-full grid grid-cols-2 gap-8 p-8"
  >
    <div className="space-y-6">
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold text-gray-900 dark:text-white"
      >
        Integration with Other Tools
      </motion.h2>
      <motion.ul variants={itemVariants} className="space-y-4">
        <BulletPoint>
          <strong>Databases:</strong> SQL, MongoDB, PostgreSQL integration
        </BulletPoint>
        <BulletPoint>
          <strong>Web APIs:</strong> Seamless interaction with web services
        </BulletPoint>
        <BulletPoint>
          <strong>Cloud Platforms:</strong> Easy deployment and scaling
        </BulletPoint>
      </motion.ul>
    </div>
    <motion.div variants={itemVariants} className="w-full h-full p-5">
      <Blocks className="w-full h-full" />
    </motion.div>
  </motion.div>,
  // Slide 9: Real-life Use Cases
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: { transition: { staggerChildren: 0.1 } },
    }}
    className="h-full grid grid-cols-2 gap-8 p-8"
  >
    <div className="space-y-6">
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold text-gray-900 dark:text-white"
      >
        Real-life Use Cases of Python
      </motion.h2>
      <motion.ul variants={itemVariants} className="space-y-4">
        <BulletPoint>
          <strong>Web Development:</strong> Django and Flask frameworks
        </BulletPoint>
        <BulletPoint>
          <strong>Data Science & AI:</strong> TensorFlow, Keras, scikit-learn
        </BulletPoint>
        <BulletPoint>
          <strong>IT Automation:</strong> Server management and monitoring
        </BulletPoint>
        <BulletPoint>
          <strong>Business Automation:</strong> Chatbots and data entry
        </BulletPoint>
      </motion.ul>
      <motion.div
        variants={itemVariants}
        className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
      >
        <h3 className="font-semibold mb-2">Success Stories:</h3>
        <ul className="space-y-2">
          <li>• Dropbox</li>
          <li>• Instagram</li>
          <li>• YouTube</li>
        </ul>
      </motion.div>
    </div>
    <div className="flex flex-col gap-4 items-center justify-start">
      <ImageWithFallback src={djangoLogo} alt="Web Development Example" className="" />
      <ImageWithFallback src={tensorflowLogo} alt="AI Application Example" className="" />
    </div>
  </motion.div>,

  // Slide 10: Python in Business Processes
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: { transition: { staggerChildren: 0.1 } },
    }}
    className="h-full grid grid-cols-2 gap-8 p-8"
  >
    <div className="space-y-6">
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold text-gray-900 dark:text-white"
      >
        Python in Business Processes
      </motion.h2>
      <motion.ul variants={itemVariants} className="space-y-4">
        <BulletPoint>Streamline workflow through automation</BulletPoint>
        <BulletPoint>Scale operations efficiently</BulletPoint>
        <BulletPoint>Manage inventory and process orders</BulletPoint>
        <BulletPoint>Generate automated financial reports</BulletPoint>
      </motion.ul>
      <motion.div
        variants={itemVariants}
        className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
      >
        <h3 className="font-semibold mb-2">Key Benefits:</h3>
        <ul className="space-y-2">
          <li>• Reduced operational costs</li>
          <li>• Improved efficiency</li>
          <li>• Better resource allocation</li>
        </ul>
      </motion.div>
    </div>
    <motion.div variants={itemVariants} className="w-full h-full p-5">
      <CogIcon className="w-full h-full" />
    </motion.div>
  </motion.div>,

  // Slide 11: Conclusion
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: { transition: { staggerChildren: 0.1 } },
    }}
    className="h-full flex flex-col items-center justify-center space-y-8 p-8"
  >
    <motion.h2
      variants={itemVariants}
      className="text-4xl font-bold text-gray-900 dark:text-white text-center"
    >
      Conclusion
    </motion.h2>
    <div className="grid grid-cols-3 gap-8 w-full">
      <motion.div variants={itemVariants} className="text-center space-y-4">
        <MousePointerClick className="w-32 h-32 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Simplicity</h3>
        <p className="text-gray-600 dark:text-gray-300">Easy to learn and implement</p>
      </motion.div>
      <motion.div variants={itemVariants} className="text-center space-y-4">
        <PocketKnife className="w-32 h-32 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Versatility</h3>
        <p className="text-gray-600 dark:text-gray-300">Wide range of applications</p>
      </motion.div>
      <motion.div variants={itemVariants} className="text-center space-y-4">
        <TrendingUp className="w-32 h-32 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Productivity</h3>
        <p className="text-gray-600 dark:text-gray-300">Enhanced workflow efficiency</p>
      </motion.div>
    </div>
  </motion.div>,

  // Slide 12: Q&A
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: { transition: { staggerChildren: 0.1 } },
    }}
    className="h-full flex flex-col items-center justify-center space-y-8 text-center p-8"
  >
    <motion.h2 variants={itemVariants} className="text-5xl font-bold text-gray-900 dark:text-white">
      Q&A
    </motion.h2>
    <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300">
      Any questions?
    </motion.p>
    <motion.div variants={itemVariants}>
      <MessageCircleQuestion className="w-32 h-32 mx-auto" />
    </motion.div>
    <motion.div variants={itemVariants} className="text-gray-500 dark:text-gray-400 mt-8">
      <p>Thank you for your time</p>
    </motion.div>
  </motion.div>,
];

export default slides;
