import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiDevdotto } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <span className="font-heading font-extrabold text-2xl tracking-tighter text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">
                Span<span className="text-primary-600 dark:text-primary-400">41n</span>.
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              Crafting digital experiences with precision and passion. Always learning, always building.
            </p>
            <div className="mt-6 flex space-x-5">
              <a href="https://github.com/spandzz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/sehgalspandan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <FaLinkedin size={22} />
              </a>
              <a href="https://dev.to/spandyboss" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <SiDevdotto size={22} />
              </a>
              <a href="mailto:spandansehgal@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Pages</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Blog'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Uses</a></li>
              <li><a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Guestbook</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Spandan Sehgal. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Built with Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
