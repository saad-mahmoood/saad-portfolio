import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Instagram, Download, MapPin, Phone } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/30 to-blue-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500/30 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500/30 rounded-full animate-bounce delay-2000"></div>
      <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-emerald-500/30 rounded-full animate-bounce delay-3000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              {/* Glowing Ring Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
              </div>
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocI9gFN5ccAZF85_uYXVZQfZyK_7-TpyTUNLcXEe7s3_4wuXwdiR=s432-c-no"
                alt="Saad Mahmood"
                className="relative w-40 h-40 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
              />
              {/* Status Indicator */}
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 animate-pulse"></div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 animate-gradient-x">
              Saad Mahmood
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Full Stack Software Enginner @ Saher Flow Solutions
            </h2>
            <div className="flex items-center justify-center space-x-6 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span>+92 322 0615475</span>
              </div>
            </div>
          </motion.div>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about building scalable web applications with{' '}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">React</span>,{' '}
            <span className="text-green-600 dark:text-green-400 font-semibold">Node.js</span>, and{' '}
            <span className="text-purple-600 dark:text-purple-400 font-semibold">modern technologies</span>.
            Experienced in MERN stack development with a focus on clean code and user experience.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/Saad Mahmood - Resume.pdf"
                download="Saad_Mahmood_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open(
                    'https://www.upwork.com/freelancers/~01cb17e6c23f63b80f?mp_source=share',
                    '_blank'
                  )
                }
                className="w-full sm:w-auto border-2 border-green-500 text-green-600 hover:bg-green-50 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-900/20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.014-2.439-5.463-5.439-5.463z"/>
                </svg>
                <span>Hire on Upwork</span>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center space-x-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[
              { href: 'https://github.com/saad-mahmoood', icon: Github, color: 'hover:text-gray-900 dark:hover:text-white' },
              { href: 'https://linkedin.com/in/saadmahmoood', icon: Linkedin, color: 'hover:text-blue-600' },
              { href: 'https://www.instagram.com/saadmahmoood/', icon: Instagram, color: 'hover:text-red-500' },
              {
                href: 'https://www.upwork.com/freelancers/~01cb17e6c23f63b80f?mp_source=share',
                icon: () => (
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.014-2.439-5.463-5.439-5.463z"/>
                  </svg>
                ),
                color: 'hover:text-green-600'
              }
            ].map(({ href, icon: Icon, color }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 dark:text-gray-400 ${color} transition-all duration-300 transform hover:scale-125`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <Icon className="w-8 h-8" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10 backdrop-blur-sm"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </motion.div>
    </section>
  );
}