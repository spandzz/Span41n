import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, systemTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
    ];

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-dark-bg/80 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 group">
                        <span className="font-heading font-extrabold text-2xl tracking-tighter text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            Span<span className="text-primary-600 dark:text-primary-400">41n</span>.
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.path}>
                                <span className={`text-sm font-semibold transition-colors duration-200 
                                    ${router.pathname === link.path 
                                        ? 'text-primary-600 dark:text-primary-400' 
                                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}
                                `}>
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                        
                        {mounted && (
                            <button
                                onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                                aria-label="Toggle Dark Mode"
                            >
                                {currentTheme === 'dark' ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
                            </button>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        {mounted && (
                            <button
                                onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                            >
                                {currentTheme === 'dark' ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
                            </button>
                        )}
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-gray-600 dark:text-gray-300 focus:outline-none"
                            aria-label="Menu"
                        >
                            {isOpen ? <IoMdClose size={26} /> : <IoMdMenu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-dark-bg border-b border-gray-100 dark:border-gray-800 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.path}>
                                    <span 
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors
                                            ${router.pathname === link.path 
                                                ? 'bg-primary-50 dark:bg-primary-900/10 text-primary-600 dark:text-primary-400' 
                                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}
                                        `}
                                    >
                                        {link.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
