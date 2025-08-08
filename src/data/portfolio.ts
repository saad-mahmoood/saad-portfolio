import { Project, Experience, Skill } from '../types';

export const projects: Project[] = [
{
  id: '1',
  title: 'Guidera: University Guidance Platform',
  description: 'AI-powered university guidance and analytics platform with real-time insights, entry test preparation, and intelligent degree recommendations.',
  longDescription: `Guidera is an advanced AI-powered university guidance platform designed for Pakistani students. It provides personalized  degree recommendations based on user profile and preferences using machine learning models trained on real student data. The system includes real-time analytics dashboards, entry test preparation with mock assessments and AI explanations, intelligent deadline tracking, and comprehensive university listings (fees, courses, criteria, campuses, etc.). It features a powerful chatbot trained to handle career queries, university FAQs, and entry test topics. Guidera supports RESTful APIs, real-time data streaming, and multi-tenant support for future scalability. `,
  techStack: [
    'React.js',
    'Node.js',
    'Express.js',
    'PostgreSQL', 
    'Python', 
    'FastAPI', 
    'Flutter', 
    'Express.js', 
    'Firebase',
    'Redis', 
    'D3.js', 
    'TensorFlow',
    'RandomForest',  
    'TabNet',
    'xGBoost',
    'FFN',
    'Ollama',
    'Phi' 
   
  ],
  githubUrl: 'https://github.com/guidera-git',
  liveUrl: 'https://www.linkedin.com/posts/saadmahmoood_fyp-guidera-finalyearproject-activity-7350023708771545090-0sh8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKXoi0Bc_U_UYaa91EhIVTn4PzUgr5fuG0',
  imageUrl: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1753618025/guidera-login_trfoh5.png',
  screenshots: [
    'https://res.cloudinary.com/drnak5yb2/image/upload/v1753616658/poster_kqkw5k.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://res.cloudinary.com/drnak5yb2/image/upload/v1753618026/find-uni_a9kgfu.png?auto=compress&cs=tinysrgb&w=800',
    'https://res.cloudinary.com/drnak5yb2/image/upload/v1753618026/guidera-save_mxaev1.png?auto=compress&cs=tinysrgb&w=800',
    'https://res.cloudinary.com/drnak5yb2/image/upload/v1753618029/guidera-analytics_z4tb9p.png?auto=compress&cs=tinysrgb&w=800',
    'https://res.cloudinary.com/drnak5yb2/image/upload/v1753618025/gudera-test_igktue.png',
    'https://res.cloudinary.com/drnak5yb2/image/upload/v1753618023/guidera-home_bmhmst.png',
    'https://res.cloudinary.com/drnak5yb2/image/upload/v1753618021/chatbot_u5etve.png'
  
  ]
}
,
  {
    id: '2',
    title: 'Professional Task Management Platform',
    description: 'A modern, real-time task management platform designed for professional teams to plan, organize, and collaborate efficiently with intuitive UI and smart automation.',
    longDescription: 'TaskFlow is a professional task and project management platform built with a modern full-stack architecture. It offers a streamlined experience for creating, assigning, and tracking tasks across teams in real time. The platform supports authentication, role-based access, deadline tracking, task prioritization, and an intelligent dashboard for workload overview. It integrates real-time communication using Socket.io and uses PostgreSQL for relational data persistence. Built with Next.js App Router and styled with Tailwind CSS, the UI ensures both performance and responsiveness. The backend is containerized with Docker and orchestrated with modern DevOps practices.',
    techStack: ['React.js', 'TypeScript', 'Supabase', 'Tailwind', 'Web3.js', 'Netlify'],
    githubUrl: 'https://github.com/saad-mahmoood/task-flow',
    liveUrl: 'https://saad-taskflow.netlify.app/',
    imageUrl: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1753614809/taskflow-dashboard_zkvrol.png',
    screenshots: [
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1753614809/taskflow-dashboard_zkvrol.png',
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1753614816/taskflow-account_rvid6s.png',
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1753614809/taskflow-tasks_z0y5ev.png'
    ]
  },
    {
    id: '3',
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
    id: '4',
    title: 'Saher Flow Solutions Official Site',
    description: 'Full-stack MERN application for official deployemnt of SaherFlow Solutions, featuring real-time satellite updates and notifications.',
    longDescription: 'Previous wordpress iste was pethtaic and not user friendly, so we decided to build a full-stack MERN application for the official deployment of SaherFlow Solutions. The site features real-time satellite updates and notifications, utilizing Firebase for backend services and real-time data synchronization. The site is designed to be responsive and user-friendly, with a focus on providing real-time information to users.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.io', 'Stripe API', 'JWT', 'Docker', 'AWS S3'],
    githubUrl: 'https://github.com/saad-mahmoood/saherflow-website.git',
    liveUrl: 'https://saad-saherflow.netlify.app/',
    imageUrl: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754639160/news_tqu5ko.png',
    screenshots: [
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1754639158/home1_hhrmuu.png',
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1754639157/product_w9p5sr.png',
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1754639157/service_erpdpv.png',
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1754639156/home5_cevf0i.png',
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1754639156/careers_jkyj3i.png',
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1754639156/contact_n0uvb1.png'
      
    ]
  },
  

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