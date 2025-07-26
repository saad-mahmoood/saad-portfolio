import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';
import Card from '../ui/Card';

export default function Skills() {
  const categories = {
    language: 'Programming Languages',
    framework: 'Frontend & Mobile',
    backend: 'Backend Technologies',
    database: 'Databases & Storage',
    tool: 'DevOps & Specialized Tools'
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
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
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies I use to build scalable, modern applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {Object.entries(categories).map(([category, title], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative">
                {/* Glassy Card Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-900/40 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-2xl group-hover:shadow-3xl transition-all duration-500"></div>
                
                {/* 3D Hover Effect */}
                <motion.div
                  className="relative p-8 rounded-2xl"
                  whileHover={{ 
                    rotateX: 5,
                    rotateY: 5,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                      {title}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {groupedSkills[category]?.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (categoryIndex * 0.1) + (index * 0.05),
                          type: "spring",
                          stiffness: 100
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.1,
                          rotateZ: 5,
                          transition: { duration: 0.2 }
                        }}
                        className="group/skill"
                      >
                        <div className="relative">
                          {/* Skill Item Glassy Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 dark:from-gray-700/60 dark:to-gray-800/20 backdrop-blur-lg rounded-xl border border-white/30 dark:border-gray-600/30 shadow-lg group-hover/skill:shadow-xl transition-all duration-300"></div>
                          
                          <div className="relative flex items-center space-x-3 p-4 rounded-xl">
                            <motion.span 
                              className="text-3xl filter drop-shadow-lg"
                              whileHover={{ 
                                scale: 1.2,
                                rotate: 360,
                                transition: { duration: 0.5 }
                              }}
                            >
                              {skill.icon}
                            </motion.span>
                            <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>
                          
                          {/* Hover Glow Effect */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover/skill:from-blue-500/20 group-hover/skill:to-purple-500/20 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500/30 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-emerald-500/30 rounded-full animate-bounce delay-3000"></div>
      </div>
    </section>
  );
}