import React from "react";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import { getProjects, Project } from "../lib/data";
import { FaGithub, FaExternalLinkAlt, FaCodeBranch } from "react-icons/fa";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Layout>
      <NextSeo
        title="Projects | Span41n"
        description="A showcase of my open-source projects and experiments."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 md:py-24"
      >
        <div className="text-center mb-16">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-gray-900 dark:text-white tracking-tight">
            Projects
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my work, experiments, and open source contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col h-full bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-primary-900/10 transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl text-primary-600 dark:text-primary-400">
                    <FaGithub size={24} />
                  </div>
                  <span className="flex items-center text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 uppercase tracking-wide">
                    v{project.version}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white bg-gray-900 dark:bg-primary-600 rounded-xl hover:bg-gray-800 dark:hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
                  >
                    View Project <FaExternalLinkAlt className="ml-2" size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export async function getStaticProps() {
  const projects = getProjects();
  return {
    props: {
      projects,
    },
  };
}

export default Projects;
