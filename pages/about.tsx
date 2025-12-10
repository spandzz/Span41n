import React from 'react';
import Layout from '../components/layout';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { FaGithub, FaMedium, FaDev, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

export default function About() {
  const socials = [
    { name: 'GitHub', icon: <FaGithub />, link: 'https://github.com/spandzz' },
    { name: 'Dev.to', icon: <FaDev />, link: 'https://dev.to/sehgalspandan' },
    { name : "LinkeIn", icon: <FaLinkedin/>, link: "https://linkedin.com/in/sehgalspandan"},
  ];

  return (
    <Layout>
      <NextSeo
        title="About Me | Span41n"
        description="Learn more about Spandan Sehgal, a passionate developer and student."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-10 max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            About Me
          </h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Hello there! 👋
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I&apos;m <span className="font-bold text-blue-600 dark:text-blue-400">Spandan Sehgal</span>, 
              a passionate student and developer exploring the vast world of Information Technology.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I have a deep curiosity for how things work and love rebuilding them to understand the mechanics. 
              Over the past 4 years, I&apos;ve dived into web development, mastering HTML, CSS, JavaScript, and Tailwind CSS.
              Currently, I&apos;m focusing on expanding my skills in <span className="font-semibold text-gray-900 dark:text-white">Python</span> and <span className="font-semibold text-gray-900 dark:text-white">Next.js</span>.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Beyond coding, I regularly write blogs to share useful resources, tutorials, and insights. 
              My goal is to create high-quality products that simplify tasks and to contribute back to the developer community.
            </p>
          </div>

          <div className="mt-12">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Connect with me
            </h4>
            <div className="flex flex-wrap justify-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:-translate-y-1"
                >
                  <span className="text-xl">{social.icon}</span>
                  <span className="font-medium">{social.name}</span>
                </a>
              ))}
              <a
                href="mailto:spandansehgal@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <span className="text-xl"><FaEnvelope /></span>
                <span className="font-medium">Email Me</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}