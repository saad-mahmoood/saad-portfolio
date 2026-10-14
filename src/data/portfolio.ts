import { Project, Experience, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Habib Construction Services — Corporate Website',
    description:
      'My largest client delivery. I designed, built, and deployed the HCS public website on my own: cinematic homepage, 360° project explorer, awards and license pages, and a Cloudinary media pipeline.',
    longDescription: `Habib Construction Services Limited is one of Pakistan’s major infrastructure contractors. I took their public website from design through development and deployment by myself, and I still maintain it.

The site is a React and Vite rebuild with Framer Motion, dark and light theme, a hero project slider, an HCS-at-a-glance time-lapse, the Memar-e-Pakistan history timeline, a landmark projects strip, corporate video, capabilities, a partners marquee, and searchable completed and in-hand project registers.

I own the Cloudinary media pipeline (360° panoramas, slider, video, licenses), Netlify continuous deploy, mobile menu and UX fixes, client content cycles, and the monthly maintenance reports.`,
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'Three.js / 360°',
      'Cloudinary',
      'Netlify',
      'Node.js scripts',
    ],
    githubUrl: 'https://github.com/saad-mahmoood/habib-construction',
    liveUrl: 'https://www.hcs.com.pk/',
    imageUrl:
      'https://res.cloudinary.com/jzpl4h1j/image/upload/v1787253439/hcs/Slider/00-Collage.jpg',
    screenshots: [
      'https://res.cloudinary.com/jzpl4h1j/image/upload/v1787253439/hcs/Slider/00-Collage.jpg',
      'https://res.cloudinary.com/jzpl4h1j/image/upload/v1787253468/hcs/Slider/05-Azadi%20Interchange%2C%20Lahore.jpg',
      'https://res.cloudinary.com/jzpl4h1j/image/upload/v1787253472/hcs/Slider/07-Lahore%20Orange%20Line%20Metro%20Train%20Package-1%2011.9%20km%20elevated%20and%201.7%20km%20underground%20section%20with%2011%20elevated%20and%202%20underground%20stations..jpg',
    ],
  },
  {
    id: '2',
    title: 'Narration — Parent-Approved Bedtime Stories',
    description:
      'I am the app developer on this React Native product. One codebase for iOS and Android. Parents review and approve a story before a child can hear it.',
    longDescription: `I own the mobile frontend for Narration. The app is React Native and TypeScript, one codebase for iOS and Android, and it only talks to the backend /v1 API. Story generation, safety checks, approval, narration, and voice providers stay on the server.

Parent mode and child mode are separate shells. I wrote the frontend architecture for project structure, API integration, state management, and component design, mapped to the Figma user flows and wireframes. The API work covers job polling, idempotent requests, exact-version approval, and the split between adult and child sessions.

The project is running on a phone. The first flow is the welcome screens from the wireframes: intro slides, create a family account, and accept an invitation.

Version 1 on the app covers child profiles, daily context, story controls, review and approval, standard and family voice, a child player with sentence or paragraph read-along, library, favourites, the reviewed catalogue, feedback, and privacy requests. Payments, child chat, word-level karaoke, and offline downloads are outside this version.`,
    techStack: [
      'React Native',
      'TypeScript',
      'Expo',
      'React Navigation',
      'REST /v1',
    ],
    githubUrl: 'https://github.com/saad-mahmoood',
    liveUrl: 'https://github.com/saad-mahmoood',
    imageUrl:
      'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: '3',
    title: 'Saher Flow — WordPress to React',
    description:
      'Rebuilt Saher Flow Solutions’ public website from WordPress into a modern React codebase. One of three products I ship on this job.',
    longDescription: `Since August 2025 I have been a software engineer at Saher Flow Solutions. One of the three products is the public website: I replaced the WordPress site with a React and Vite build.

The new site is the company’s modern web presence, with a code-based layout instead of the old WordPress theme, and it is what I use as the public face of the NEXUS and Fieldview work.`,
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Netlify'],
    githubUrl: 'https://github.com/saad-mahmoood',
    liveUrl: 'https://saherflow.com/',
    imageUrl: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754639160/news_tqu5ko.png',
    screenshots: [
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1754639158/home1_hhrmuu.png',
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1754639157/product_w9p5sr.png',
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1754639157/service_erpdpv.png',
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1754639156/home5_cevf0i.png',
    ],
  },
  {
    id: '4',
    title: 'NEXUS — Industrial IoT Sensor Platform',
    description:
      'Saher Flow’s sensor operations platform: dashboards, alarm and email pipelines, tag processing, and admin tooling for industrial monitoring.',
    longDescription: `NEXUS is the industrial IoT platform I build at Saher Flow Solutions. It is the office system for sensor operations.

The work covers the web dashboard and API, a super-admin panel, the tag processing engine, alarms processing, a classification engine, and the email-dispatcher and alarm-email bridge. The focus is real-time industrial data, reliable notification pipelines, and production deploys with PM2.`,
    techStack: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.io',
      'PM2',
      'Tailwind CSS',
    ],
    githubUrl: 'https://github.com/saad-mahmoood',
    liveUrl: 'https://dashboard.saherflow.com/',
    imageUrl:
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: '5',
    title: 'Fieldview — Field Operations App',
    description:
      'The field app at Saher Flow Solutions, built alongside NEXUS and the React website.',
    longDescription: `Fieldview is the third product on my Saher Flow role, next to the React website and the NEXUS sensor platform.

It is the field-facing app for the same industrial operations workflow, the piece teams use away from the office dashboard. On this job my mobile work is Flutter, alongside React and Node for the web products.`,
    techStack: ['Flutter', 'REST APIs'],
    githubUrl: 'https://github.com/saad-mahmoood',
    liveUrl: 'https://github.com/saad-mahmoood',
    imageUrl:
      'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: '6',
    title: 'Faha — Automation Gateway & Bid Automation',
    description:
      'End-to-end client delivery for Faha: I designed, built, and deployed the automation gateway and the proposal packs, including Hyperfine KSA.',
    longDescription: `Faha was a full product I took from design through development and deployment. The work covers the automation gateway and the commercial proposal pipeline, including the Hyperfine KSA website proposal as DOCX, HTML, and PDF.

The point of the system is to turn a long manual bid pack into a repeatable generate, review, and send flow, with branding kept consistent across international website projects.`,
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'Node.js',
      'Python',
      'DOCX / PDF automation',
    ],
    githubUrl: 'https://github.com/saad-mahmoood/automation-gateway',
    liveUrl: 'https://github.com/saad-mahmoood/automation-gateway',
    imageUrl:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: '7',
    title: 'Guidera: University Guidance Platform',
    description:
      'AI-powered university guidance and analytics platform with real-time insights, entry test preparation, and intelligent degree recommendations.',
    longDescription: `Guidera is an advanced AI-powered university guidance platform designed for Pakistani students. It provides personalized degree recommendations based on user profile and preferences using machine learning models trained on real student data. The system includes real-time analytics dashboards, entry test preparation with mock assessments and AI explanations, intelligent deadline tracking, and comprehensive university listings (fees, courses, criteria, campuses, etc.). It features a powerful chatbot trained to handle career queries, university FAQs, and entry test topics. Guidera supports RESTful APIs, real-time data streaming, and multi-tenant support for future scalability.`,
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Python',
      'FastAPI',
      'Flutter',
      'Firebase',
      'Redis',
      'D3.js',
      'TensorFlow',
      'TabNet',
      'xGBoost',
      'Ollama',
    ],
    githubUrl: 'https://github.com/guidera-git',
    liveUrl:
      'https://www.linkedin.com/posts/saadmahmoood_fyp-guidera-finalyearproject-activity-7350023708771545090-0sh8',
    imageUrl: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1753618025/guidera-login_trfoh5.png',
    screenshots: [
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1753616658/poster_kqkw5k.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1753618026/find-uni_a9kgfu.png?auto=compress&cs=tinysrgb&w=800',
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1753618026/guidera-save_mxaev1.png?auto=compress&cs=tinysrgb&w=800',
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1753618029/guidera-analytics_z4tb9p.png?auto=compress&cs=tinysrgb&w=800',
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1753618023/guidera-home_bmhmst.png',
      'https://res.cloudinary.com/drnak5yb2/image/upload/v1753618021/chatbot_u5etve.png',
    ],
  },
  {
    id: '8',
    title: 'PSX Portfolio Tracker',
    description:
      'A daily tool for a company that trades the Pakistan Stock Exchange. It turns a long manual portfolio routine into an automated live sheet.',
    longDescription: `Built for day-to-day use inside a company. Instead of working through a long manual check of PSX holdings, the team gets one live sheet of positions, prices, and portfolio health.

The tracker is aimed at that repeated daily workflow, not at replacing a brokerage terminal.`,
    techStack: ['TypeScript', 'Live data sheet', 'Automation'],
    githubUrl: 'https://github.com/saad-mahmoood/psx-portfolio-tracker',
    liveUrl: 'https://github.com/saad-mahmoood/psx-portfolio-tracker',
    imageUrl:
      'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Software Engineer',
    company: 'Saher Flow Solutions',
    location: 'Thuwal, Saudi Arabia',
    period: 'Aug 2025 – Present',
    description:
      'Three products since August 2025. Rebuilt the company website from WordPress into React. Build NEXUS, the industrial IoT sensor platform: dashboards, alarm and email pipelines, tag processing, and admin tooling. Build Fieldview, the field app alongside that platform.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Flutter', 'MongoDB', 'Socket.io'],
  },
  {
    id: '2',
    role: 'App Developer',
    company: 'Narration',
    location: 'Remote',
    period: 'Oct 2026 – Present',
    description:
      'Frontend for a parent-approved bedtime stories app. React Native and TypeScript, one codebase for iOS and Android. Parent and child modes are separate shells, and the app only calls the /v1 API. Wrote the frontend architecture and started the welcome flow from the Figma wireframes: intro slides, create a family account, and accept an invitation.',
    techStack: ['React Native', 'TypeScript', 'Expo', 'REST /v1'],
  },
  {
    id: '3',
    role: 'Independent Product Engineer',
    company: 'HCS · Faha · client automation',
    location: 'Lahore, Pakistan',
    period: '2025 – 2026',
    description:
      'Designed, built, and deployed the Habib Construction Services website on my own — my largest client delivery. Took Faha from design through deployment, including the automation gateway and proposal packs. Built a daily PSX portfolio tracker that automates a company’s long manual holdings checks.',
    techStack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Netlify', 'Cloudinary'],
  },
  {
    id: '4',
    role: 'MERN Stack Developer Intern',
    company: 'DHA Lahore Official',
    location: 'Lahore, Pakistan',
    period: 'Jul 2024 – Sep 2024',
    description:
      'Developed dynamic, responsive MERN pages for the Internship Portal using React.js. Assisted on REST APIs with Node.js and Express, and stored data in MongoDB.',
    techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
  {
    id: '5',
    role: 'Android Development Intern',
    company: 'lalaland.pk',
    location: 'Lahore, Pakistan',
    period: 'Aug 2023 – Oct 2023',
    description:
      'Developed an Android app in Kotlin for delivery personnel, with XML layouts and Retrofit. Consumed Laravel REST APIs backed by MySQL, and added live location tracking and push notifications.',
    techStack: ['Kotlin', 'XML', 'Retrofit', 'MySQL', 'REST APIs'],
  },
];

export const skills: Skill[] = [
  { name: 'JavaScript', icon: '🟨', category: 'language' },
  { name: 'TypeScript', icon: '🔷', category: 'language' },
  { name: 'Python', icon: '🐍', category: 'language' },
  { name: 'Java', icon: '☕', category: 'language' },
  { name: 'C++', icon: '⚡', category: 'language' },
  { name: 'Kotlin', icon: '🎯', category: 'language' },

  { name: 'React.js', icon: '⚛️', category: 'framework' },
  { name: 'Next.js', icon: '▲', category: 'framework' },
  { name: 'React Native', icon: '📱', category: 'framework' },
  { name: 'Expo', icon: '📲', category: 'framework' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'framework' },
  { name: 'Framer Motion', icon: '🎬', category: 'framework' },
  { name: 'Vite', icon: '⚡', category: 'framework' },

  { name: 'Node.js', icon: '🟢', category: 'backend' },
  { name: 'Express.js', icon: '🚀', category: 'backend' },
  { name: 'FastAPI', icon: '⚡', category: 'backend' },
  { name: 'Laravel', icon: '🔴', category: 'backend' },

  { name: 'MongoDB', icon: '🍃', category: 'database' },
  { name: 'PostgreSQL', icon: '🐘', category: 'database' },
  { name: 'MySQL', icon: '🗄️', category: 'database' },
  { name: 'Redis', icon: '🔴', category: 'database' },
  { name: 'Firebase', icon: '🔥', category: 'database' },

  { name: 'Docker', icon: '🐳', category: 'tool' },
  { name: 'AWS', icon: '☁️', category: 'tool' },
  { name: 'Cloudinary', icon: '🖼️', category: 'tool' },
  { name: 'Netlify', icon: '🌐', category: 'tool' },
  { name: 'Vercel', icon: '△', category: 'tool' },
  { name: 'Git', icon: '📚', category: 'tool' },
  { name: 'GitHub Actions', icon: '⚙️', category: 'tool' },
  { name: 'PM2', icon: '🔁', category: 'tool' },
  { name: 'Socket.io', icon: '🔌', category: 'tool' },
  { name: 'Stripe', icon: '💳', category: 'tool' },
];
