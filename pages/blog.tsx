import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import Link from 'next/link';
import { BsArrowRight, BsSearch } from 'react-icons/bs';
import { getSortedPosts, Post } from '../lib/data';

interface BlogsProps {
  posts: Post[];
}

const Blogs: React.FC<BlogsProps> = ({ posts }) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredPosts = posts.filter((post) =>
    post.frontmatter.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Layout>
      <NextSeo
        title="Blog | Span41n"
        description="Insights on web development, tutorials, and tech trends."
      />
      
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-gray-900 dark:text-white mb-6">
              Writings
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
              Thoughts, tutorials, and insights about the ever-evolving world of software development.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BsSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-card text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all shadow-sm"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </motion.div>
        </div>

        <div className="grid gap-8 md:gap-10 max-w-6xl mx-auto px-4 md:grid-cols-1 lg:grid-cols-1">
          {filteredPosts.map((post, index) => {
            const { slug, frontmatter } = post;
            const { title, date, description, category, bannerImage } = frontmatter;

            return (
              <motion.article
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col h-full bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-blue-600 dark:hover:border-gray-700 transition-all duration-300"
              >
                <Link href={`/posts/${slug}`} className="flex-1 flex flex-col">
                  {/* Image Placeholder or Actual Image could go here if available */}
                  <div className="h-full w-full  relative overflow-hidden">
                     {/* If bannerImage exists, utilize next/image here. For now, a pattern or gradient. */}
                     {/* <div className="absolute inset-0 bg-primary-500/5 group-hover:scale-105 transition-transform duration-500" /> */}
                     {category && (
                       <div className="absolute top-4 left-4">
                         <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-primary-600/90 backdrop-blur-sm rounded-full shadow-sm">
                           {category}
                         </span>
                       </div>
                     )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">
                      <time dateTime={date}>{date}</time>
                      <span>•</span>
                      <span>5 min read</span> {/* Placeholder reading time */}
                    </div>
                    
                    <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                      {description}
                    </p>

                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold text-sm group-hover:translate-x-1 transition-transform mt-auto">
                      Read Article <BsArrowRight className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-12">
            No posts found matching &quot;{searchValue}&quot;.
          </div>
        )}
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = getSortedPosts();
  return {
    props: {
      posts,
    },
  };
}

export default Blogs;