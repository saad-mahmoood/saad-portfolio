import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Lightbulb, Award, Target, Zap } from 'lucide-react';
import Card from '../ui/Card';

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Clean Code Advocate',
      description: 'I write maintainable, scalable code following industry best practices and modern design patterns.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Collaboration',
      description: 'Strong collaboration skills with experience in agile development environments and cross-functional teams.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Problem Solver',
      description: 'I love tackling complex challenges and finding innovative solutions using cutting-edge technologies.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality Focused',
      description: 'Committed to delivering high-quality software with comprehensive testing and documentation.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Goal Oriented',
      description: 'Results-driven approach with focus on meeting deadlines and exceeding project expectations.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies and frameworks, staying current with industry trends.'
    }
  ];

  const certifications = [
    'IBM Full Stack Software Developer Professional Certificate',
    'Meta Back-End Developer Specialization',
    'Agile & DevOps Specialization'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate Computer Science graduate with expertise in full-stack development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                I'm a recent Computer Science graduate from <strong>UCP Lahore</strong> with a deep passion for 
                building modern web applications. My journey into programming started during my 
                early university years, and I've been fascinated by the power of technology to 
                solve real-world problems ever since.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                I specialize in <strong>MERN stack development</strong> with hands-on experience from my 
                internships at <strong>DHA Lahore Official</strong> and <strong>lalaland.pk</strong>. I'm particularly 
                interested in creating seamless user experiences and writing clean, maintainable 
                code that scales well.
              </p>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Beyond coding, I'm passionate about continuous learning and staying updated with 
                the latest technologies. I've completed several professional certifications from 
                Meta and actively contribute to open-source projects.
              </p>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border border-blue-200/50 dark:border-gray-600/50">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2 text-blue-600" />
                Certifications
              </h3>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-3">
              {['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Next.js', 'Express.js', 'Kotlin'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-700/50 shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="relative">
                  {/* Glassy Card Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-900/40 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
                  
                  <div className="relative p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {highlight.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}