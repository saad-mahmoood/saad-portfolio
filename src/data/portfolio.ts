import { Project, Experience, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
    longDescription: 'A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with modern technologies and best practices.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/saadmahmood',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '2',
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates',
    longDescription: 'A comprehensive task management system with team collaboration features, real-time notifications, file sharing, and progress tracking. Perfect for remote teams and project coordination.',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Socket.io', 'TypeScript', 'NextAuth'],
    githubUrl: 'https://github.com/saadmahmood',
    liveUrl: 'https://taskmanager-demo.vercel.app',
    imageUrl: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'React-based weather application with location services and forecasts',
    longDescription: 'An interactive weather dashboard providing current conditions, 7-day forecasts, and location-based weather data. Features include weather maps, historical data, and personalized alerts.',
    techStack: ['React', 'TypeScript', 'Weather API', 'Chart.js', 'Geolocation API'],
    githubUrl: 'https://github.com/saadmahmood',
    liveUrl: 'https://weather-dashboard-demo.vercel.app',
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '4',
    title: 'Social Media Analytics',
    description: 'Data visualization dashboard for social media metrics',
    longDescription: 'A comprehensive analytics dashboard that aggregates social media data from multiple platforms, providing insights through interactive charts and real-time monitoring capabilities.',
    techStack: ['Vue.js', 'D3.js', 'Python', 'Flask', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/saadmahmood',
    liveUrl: 'https://analytics-demo.vercel.app',
    imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Full Stack Developer Intern',
    company: 'TechCorp Solutions',
    duration: 'Jun 2024 - Aug 2024',
    description: 'Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with senior developers on feature implementation and code reviews.',
    type: 'work'
  },
  {
    id: '2',
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    duration: 'Jan 2024 - May 2024',
    description: 'Built responsive user interfaces and implemented modern design systems. Worked closely with UX designers to create pixel-perfect implementations.',
    type: 'work'
  },
  {
    id: '3',
    title: 'Bachelor of Computer Science',
    company: 'University of Engineering & Technology, Lahore',
    duration: '2020 - 2024',
    description: 'Graduated with distinction. Focused on software engineering, algorithms, and web development. Active member of the programming society.',
    type: 'education'
  },
  {
    id: '4',
    title: 'Intermediate in Computer Science',
    company: 'Government College Lahore',
    duration: '2018 - 2020',
    description: 'Completed pre-engineering with computer science. Developed foundational programming skills in C++ and Java.',
    type: 'education'
  }
];

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', icon: '🟨', category: 'language' },
  { name: 'TypeScript', icon: '🔷', category: 'language' },
  { name: 'Python', icon: '🐍', category: 'language' },
  { name: 'Java', icon: '☕', category: 'language' },
  { name: 'C++', icon: '⚡', category: 'language' },
  
  // Frameworks & Libraries
  { name: 'React', icon: '⚛️', category: 'framework' },
  { name: 'Next.js', icon: '▲', category: 'framework' },
  { name: 'Node.js', icon: '🟢', category: 'framework' },
  { name: 'Express', icon: '🚀', category: 'framework' },
  { name: 'Vue.js', icon: '💚', category: 'framework' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'framework' },
  
  // Databases
  { name: 'MongoDB', icon: '🍃', category: 'database' },
  { name: 'PostgreSQL', icon: '🐘', category: 'database' },
  { name: 'MySQL', icon: '🗄️', category: 'database' },
  { name: 'Redis', icon: '🔴', category: 'database' },
  
  // Tools
  { name: 'Git', icon: '📚', category: 'tool' },
  { name: 'Docker', icon: '🐳', category: 'tool' },
  { name: 'VS Code', icon: '💻', category: 'tool' },
  { name: 'Figma', icon: '🎨', category: 'tool' },
  { name: 'AWS', icon: '☁️', category: 'tool' },
  { name: 'Vercel', icon: '△', category: 'tool' }
];