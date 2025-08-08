import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import Card from '../ui/Card';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  techStack: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'MERN Intern',
    company: 'DHA Lahore Official',
    location: 'Lahore, Pakistan',
    period: 'July 2024 - Sep 2024',
    description:
      'Developed dynamic, responsive MERN stack pages for the Internship Portal using React.js. Assisted in developing RESTful APIs with Node.js and Express while managing scalable data using MongoDB.',
    techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
  {
    role: 'Android Development Intern',
    company: 'lalaland.pk',
    location: 'Lahore, Pakistan',
    period: 'Aug 2023 - Oct 2023',
    description:
      'Developed an Android app in Kotlin for delivery personnel with XML layouts and Retrofit integration, consuming Laravel-based REST APIs while managing data with MySQL for backend operations.',
    techStack: ['Kotlin', 'XML', 'Retrofit', 'MySQL', 'REST APIs'],
  },
    {
    role: 'Software Engineer',
    company: 'Saher Flow Solutions',
    location: 'Thuwal, Saudi Arabia',
    period: 'Aug 2025 - Present',
    description:
      'Developed their official site ann IOS app in Flutter for realtime stalletite updates and notifications, utilizing Firebase for backend services and real-time data synchronization.',
    techStack: ['MERN', 'Flutter', 'BodBus', 'MySQL', 'REST APIs'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey so far working with dynamic teams and technologies to build scalable, user-centric applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.company}, {exp.location}</span>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
