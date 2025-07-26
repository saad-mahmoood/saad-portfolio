import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Saad Mahmood</h3>
            <p className="text-gray-300 mb-4">
              Full Stack Developer passionate about creating innovative web solutions 
              and contributing to the tech community in Pakistan.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/saad-mahmoood"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/saadmahmoood"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:saad@example.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const section = document.querySelector(`#${link.toLowerCase()}`);
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <p className="text-gray-300 mb-4">
              Open to new opportunities and interesting projects. 
              Let's build something amazing together!
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 Lahore, Pakistan</p>
              <p>📧 saadmhmoood@gmail.com</p>
              <p>📱 +92 322 0615475 </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} Saad Mahmood. Made with{' '}
            <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" />
            in Lahore, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}