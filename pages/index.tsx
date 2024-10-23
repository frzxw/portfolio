import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { Analytics } from "@vercel/analytics/react";

import Experiences from '@/components/Experiences';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import FluidGradientBackground from '@/components/FluidGradientBackground';
import FadeInSection from '@/components/FadeInSection';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experiences', 'projects', 'certifications'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <title>Fariz Wibisono - Computer Science Undergraduate</title>
        <meta name="description" content="Fariz Wibisono's portfolio showcasing full-stack development, data science, AI, and machine learning projects and experiences." />
      </Helmet>
      <div className="relative min-h-screen font-body text-white">
        <FluidGradientBackground />

        <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-20 backdrop-blur-md">
          <nav className="container mx-auto px-6 py-4 flex flex-wrap justify-between items-center">
            <div
              className="text-lg sm:text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient-text cursor-pointer"
              onClick={() => window.location.reload()}
            >
              frzxw
            </div>
            <ul className="hidden sm:flex flex-wrap space-x-4 sm:space-x-8">
              {['About', 'Experiences', 'Projects', 'Certifications'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`text-sm font-medium transition-colors duration-300 ${activeSection === item.toLowerCase()
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-white hover:text-blue-300'}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden sm:flex space-x-4 mt-4 sm:mt-0">
              <a href="https://github.com/frzxw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition duration-300">
                <FaGithub size={18} />
              </a>
              <a href="https://linkedin.com/in/frzxw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition duration-300">
                <FaLinkedin size={18} />
              </a>
            </div>
            <div className="sm:hidden">
              {isModalOpen ? (
                <FaTimes size={24} className="text-white cursor-pointer" onClick={() => setIsModalOpen(false)} />
              ) : (
                <FaBars size={24} className="text-white cursor-pointer" onClick={() => setIsModalOpen(true)} />
              )}
            </div>
          </nav>
        </header>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: '100vh' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black bg-opacity-50 flex flex-col items-center justify-center"
            >
              <ul className="flex flex-col space-y-8 text-center mt-16">
                {['About', 'Experiences', 'Projects', 'Certifications'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`text-lg font-medium transition-colors duration-300 ${activeSection === item.toLowerCase()
                        ? 'text-blue-400'
                        : 'text-white hover:text-blue-300'}`}
                      onClick={() => setIsModalOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="relative z-10">
          <section id="about" className="min-h-screen flex items-center justify-center p-8">
            <FadeInSection>
              <div className="text-center max-w-3xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient-text">
                  Fariz Wibisono
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl mb-6 font-display">Universitas Pendidikan Indonesia</h2>
                <p className="text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
                  Passionate about integrating full-stack development with data science, artificial intelligence, and machine learning.
                  I aim to design and implement advanced applications that address complex challenges and contribute to technological advancements.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#projects" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 text-sm">
                    View Projects
                  </a>
                  <a href="#" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 text-sm">
                    Download CV
                  </a>
                </div>
              </div>
            </FadeInSection>
          </section>

          <Experiences />

          <Projects />

          <Certifications />
          
          <footer className="relative z-10 bg-opacity-20 backdrop-blur-md py-4 bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="container mx-auto text-center text-xs sm:text-sm text-white flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div>© {new Date().getFullYear()} Fariz Wibisono. All rights reserved.</div>
              <div className="flex space-x-4 sm:hidden">
                <a href="https://github.com/frzxw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition duration-300">
                  <FaGithub size={18} />
                </a>
                <a href="https://linkedin.com/in/frzxw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition duration-300">
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
      <Analytics />
    </>
  );
}