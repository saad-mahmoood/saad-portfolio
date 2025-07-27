import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import ToastContainer from './components/ToastContainer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors">
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <ToastContainer />
      </motion.main>
      
      <Footer />
    </div>
  );
}

export default App;