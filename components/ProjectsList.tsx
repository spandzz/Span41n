import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../lib/data';

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              A selection of my recent work and open source contributions.
            </p>
          </div>
          <Link href="/projects">
            <span className="inline-flex items-center font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors cursor-pointer group text-lg">
              View All <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-white dark:bg-dark-card rounded-2xl shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-primary-900/10 transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-primary-100 dark:hover:border-primary-900/50 overflow-hidden"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                   <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                   <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                     v{project.version}
                   </span>
                </div>
               
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 flex-1 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Visit Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;