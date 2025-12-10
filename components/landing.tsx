import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-12 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
         <div className="absolute top-20 left-20 w-72 h-72 bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-3xl" />
         <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl" />
      </div>

      <div className="z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-purple-500 rounded-full blur-lg opacity-75 animate-pulse" />
            <Image
              src="/pf.jpeg"
              alt="Spandan Sehgal"
              layout="fill"
              objectFit="cover"
              priority
              className="rounded-full border-4 border-white dark:border-dark-card relative z-10"
            />
          </div>
          
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl text-gray-900 dark:text-white mb-6 tracking-tight">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400">Future</span> of Web.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Hi, I&apos;m <span className="font-semibold text-gray-900 dark:text-white">Spandan Sehgal</span>. 
            A Full Stack Developer passionate about crafting beautiful, scalable, and user-centric digital experiences using modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:spandansehgal@gmail.com"
              className="px-8 py-4 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-1 w-full sm:w-auto"
            >
              Get in Touch
            </a>
            <Link
              href="/projects"
              className="px-8 py-4 rounded-full bg-white dark:bg-dark-card text-gray-900 dark:text-white font-semibold border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all hover:-translate-y-1 w-full sm:w-auto"
            >
              View Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
