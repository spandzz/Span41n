import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', icon: '/html5.svg' },
  { name: 'CSS', icon: '/css.svg' },
  { name: 'JavaScript', icon: '/js.svg' },
  { name: 'Next.js', icon: '/nextjs.svg' },
  { name: 'Python', icon: '/python.svg' },
  { name: 'Git', icon: '/git.svg' },
  { name: 'Node.js', icon: '/nodejs.svg' },
  { name: 'Tailwind CSS', icon: '/tailwindcss.svg' },
  { name: 'Wazuh', icon: '/wazuh.svg' },
];

const Skills = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-dark-card/50 my-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-gray-900 dark:text-white mb-6">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The tools, frameworks, and technologies I use to bring creative ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-dark-bg rounded-2xl shadow-sm hover:shadow-xl dark:hover:shadow-primary-900/20 border border-gray-100 dark:border-gray-800 transition-all duration-300"
            >
              <div className="relative w-16 h-16 mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
