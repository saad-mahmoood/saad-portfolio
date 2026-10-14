export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  screenshots: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  techStack: string[];
}

export interface Skill {
  name: string;
  icon: string;
  category: 'language' | 'framework' | 'tool' | 'database';
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}