import { Project, Experience, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Marketplace Platform',
    description: 'Full-stack MERN e-commerce platform with advanced features like real-time inventory, AI-powered recommendations, and multi-vendor support',
    longDescription: 'A comprehensive e-commerce marketplace built with React, Node.js, and MongoDB. Features include user authentication with JWT, real-time inventory management, AI-powered product recommendations, multi-vendor dashboard, integrated payment processing with Stripe, advanced search and filtering, order tracking, and admin analytics dashboard. Implements microservices architecture for scalability.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.io', 'Stripe API', 'JWT', 'Docker', 'AWS S3'],
    githubUrl: 'https://github.com/saad-mahmoood/ecommerce-marketplace',
    liveUrl: 'https://ecommerce-marketplace-demo.vercel.app',
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '2',
    title: 'Real-Time Collaboration Platform',
    description: 'Advanced project management and team collaboration tool with real-time features, video conferencing, and AI-powered insights',
    longDescription: 'A comprehensive collaboration platform built with Next.js and PostgreSQL. Features real-time document editing, video conferencing integration, AI-powered project insights, advanced task management, team chat, file sharing with version control, time tracking, and detailed analytics. Uses WebRTC for peer-to-peer communication and implements real-time synchronization with Socket.io.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Socket.io', 'WebRTC', 'Redis', 'Docker', 'Vercel'],
    githubUrl: 'https://github.com/saad-mahmoood/collaboration-platform',
    liveUrl: 'https://collab-platform-demo.vercel.app',
    imageUrl: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '3',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Enterprise-grade analytics platform with machine learning insights, real-time data processing, and interactive visualizations',
    longDescription: 'An advanced analytics dashboard that processes large datasets in real-time using React and Python. Features include machine learning-powered insights, predictive analytics, custom report generation, real-time data streaming, interactive charts with D3.js, automated alerts, and multi-tenant architecture. Integrates with multiple data sources and provides RESTful APIs for third-party integrations.',
    techStack: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'D3.js', 'TensorFlow', 'Docker', 'Kubernetes', 'AWS'],
    githubUrl: 'https://github.com/saad-mahmoood/analytics-dashboard',
    liveUrl: 'https://analytics-dashboard-demo.vercel.app',
    imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '4',
    title: 'Smart IoT Device Management System',
    description: 'Enterprise IoT platform for device monitoring, data collection, and automated control with real-time dashboards',
    longDescription: 'A comprehensive IoT management system built with MERN stack and MQTT protocol. Features include real-time device monitoring, automated data collection, predictive maintenance alerts, remote device control, energy consumption analytics, and scalable architecture supporting thousands of devices. Implements edge computing for reduced latency and includes mobile app for on-the-go management.',
    techStack: ['React', 'Node.js', 'MongoDB', 'MQTT', 'InfluxDB', 'Grafana', 'Docker', 'Kubernetes', 'React Native'],
    githubUrl: 'https://github.com/saad-mahmoood/iot-management-system',
    liveUrl: 'https://iot-platform-demo.vercel.app',
    imageUrl: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '5',
    title: 'Blockchain-Based Supply Chain Tracker',
    description: 'Decentralized supply chain management system using blockchain technology for transparency and traceability',
    longDescription: 'A revolutionary supply chain tracking system built on Ethereum blockchain with React frontend. Features include immutable transaction records, real-time shipment tracking, smart contract automation, multi-party verification, QR code integration, and comprehensive audit trails. Ensures complete transparency from manufacturer to end consumer with cryptographic security.',
    techStack: ['React', 'Solidity', 'Web3.js', 'Ethereum', 'IPFS', 'Node.js', 'MongoDB', 'MetaMask Integration'],
    githubUrl: 'https://github.com/saad-mahmoood/blockchain-supply-chain',
    liveUrl: 'https://supply-chain-tracker-demo.vercel.app',
    imageUrl: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '6',
    title: 'AI-Powered Learning Management System',
    description: 'Intelligent LMS with personalized learning paths, automated grading, and advanced analytics for educational institutions',
    longDescription: 'A next-generation learning management system powered by AI and built with modern web technologies. Features include personalized learning recommendations, automated essay grading using NLP, interactive virtual classrooms, progress tracking with predictive analytics, plagiarism detection, and adaptive testing. Supports multiple content formats and integrates with popular educational tools.',
    techStack: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'WebRTC', 'OpenAI API', 'Docker', 'AWS'],
    githubUrl: 'https://github.com/saad-mahmoood/ai-learning-platform',
    liveUrl: 'https://ai-lms-demo.vercel.app',
    imageUrl: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'MERN Stack Developer Intern',
    company: 'DHA Lahore Official',
    duration: 'July 2024 - September 2024',
    description: 'Developed dynamic, responsive MERN stack pages for the Internship Portal using React.js. Assisted in developing RESTful APIs with Node.js and Express while managing scalable data using MongoDB. Collaborated with senior developers on feature implementation and code optimization.',
    type: 'work'
  },
  {
    id: '2',
    title: 'Android Development Intern',
    company: 'lalaland.pk',
    duration: 'August 2023 - October 2023',
    description: 'Developed an Android application in Kotlin for delivery personnel with XML layouts and Retrofit integration. Consumed Laravel-based REST APIs while managing data with MySQL for backend operations. Implemented real-time location tracking and push notifications.',
    type: 'work'
  },
  {
    id: '3',
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Engineering & Technology, Lahore',
    duration: '2020 - 2024',
    description: 'Graduated with distinction in Computer Science. Focused on software engineering, algorithms, data structures, and web development. Active member of the programming society and participated in multiple hackathons.',
    type: 'education'
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', icon: '🟨', category: 'language' },
  { name: 'TypeScript', icon: '🔷', category: 'language' },
  { name: 'Python', icon: '🐍', category: 'language' },
  { name: 'Java', icon: '☕', category: 'language' },
  { name: 'C++', icon: '⚡', category: 'language' },
  { name: 'Kotlin', icon: '🎯', category: 'language' },
  { name: 'Solidity', icon: '⛓️', category: 'language' },
  
  // Frontend Frameworks & Libraries
  { name: 'React.js', icon: '⚛️', category: 'framework' },
  { name: 'Next.js', icon: '▲', category: 'framework' },
  { name: 'Vue.js', icon: '💚', category: 'framework' },
  { name: 'Angular', icon: '🅰️', category: 'framework' },
  { name: 'React Native', icon: '📱', category: 'framework' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'framework' },
  { name: 'Material-UI', icon: '🎭', category: 'framework' },
  { name: 'Framer Motion', icon: '🎬', category: 'framework' },
  
  // Backend Technologies
  { name: 'Node.js', icon: '🟢', category: 'backend' },
  { name: 'Express.js', icon: '🚀', category: 'backend' },
  { name: 'FastAPI', icon: '⚡', category: 'backend' },
  { name: 'Django', icon: '🎸', category: 'backend' },
  { name: 'Laravel', icon: '🔴', category: 'backend' },
  { name: 'GraphQL', icon: '📊', category: 'backend' },
  
  // Databases
  { name: 'MongoDB', icon: '🍃', category: 'database' },
  { name: 'PostgreSQL', icon: '🐘', category: 'database' },
  { name: 'MySQL', icon: '🗄️', category: 'database' },
  { name: 'Redis', icon: '🔴', category: 'database' },
  { name: 'InfluxDB', icon: '📈', category: 'database' },
  { name: 'Firebase', icon: '🔥', category: 'database' },
  
  // DevOps & Cloud
  { name: 'Docker', icon: '🐳', category: 'tool' },
  { name: 'Kubernetes', icon: '☸️', category: 'tool' },
  { name: 'AWS', icon: '☁️', category: 'tool' },
  { name: 'Vercel', icon: '△', category: 'tool' },
  { name: 'Git', icon: '📚', category: 'tool' },
  { name: 'GitHub Actions', icon: '⚙️', category: 'tool' },
  
  // Specialized Technologies
  { name: 'Socket.io', icon: '🔌', category: 'tool' },
  { name: 'WebRTC', icon: '📹', category: 'tool' },
  { name: 'MQTT', icon: '📡', category: 'tool' },
  { name: 'Blockchain', icon: '⛓️', category: 'tool' },
  { name: 'TensorFlow', icon: '🧠', category: 'tool' },
  { name: 'OpenAI API', icon: '🤖', category: 'tool' }
];