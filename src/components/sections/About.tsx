import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Lightbulb } from 'lucide-react';
import Card from '../ui/Card';

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'I write maintainable, scalable code following best practices and modern patterns.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Player',
      description: 'Strong collaboration skills with experience in agile development environments.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Problem Solver',
      description: 'I love tackling complex challenges and finding innovative solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate full-stack developer with a strong foundation in modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm a fresh Computer Science graduate from UET Lahore with a deep passion for 
                building modern web applications. My journey into programming started during my 
                early university years, and I've been fascinated by the power of technology to 
                solve real-world problems ever since.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I specialize in full-stack development with expertise in React, Node.js, and 
                modern JavaScript frameworks. I'm particularly interested in creating seamless 
                user experiences and writing clean, maintainable code that scales well.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                When I'm not coding, you'll find me playing football, reading about emerging 
                technologies, or contributing to open-source projects. I'm always eager to learn 
                new technologies and take on challenging projects that push my boundaries.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {['React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Next.js'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400">
                        {highlight.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}