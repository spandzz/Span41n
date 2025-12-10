import React, { useEffect } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import { motion } from 'framer-motion';
import Layout from '../../components/layout';
import MarkdownIt from 'markdown-it';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

interface PostProps {
  frontmatter: {
    title: string;
    author?: string;
    date: string;
    description: string;
    metaKeywords?: string;
    bannerImage?: string;
    category?: string;
  };
  content: string;
}

export default function Post({ frontmatter, content }: PostProps) {
  const { title, author, date, description, metaKeywords, category } = frontmatter;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <NextSeo
        title={`${title} | Span41n`}
        description={description}
        additionalMetaTags={
          metaKeywords ? [{ name: 'keywords', content: metaKeywords }] : []
        }
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date,
            authors: [author || 'Spandan Sehgal'],
            tags: category ? [category] : [],
          },
        }}
      />
      
      <article className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors mb-8 group"
            >
              <BsArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
              Back to Blog
            </Link>
            
            {category && (
              <span className="block w-fit mb-4 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 dark:text-primary-300 dark:bg-primary-900/20 rounded-full">
                {category}
              </span>
            )}

            <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-gray-900 dark:text-white leading-tight mb-6">
              {title}
            </h1>
            
            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm border-b border-gray-100 dark:border-gray-800 pb-8 mb-8">
               <div className="flex items-center gap-2">
                 {/* Optional: Avatar */}
                 <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-500 to-purple-500" />
                 <span className="font-medium text-gray-900 dark:text-white">{author || 'Spandan Sehgal'}</span>
               </div>
               <span>•</span>
               <time dateTime={date}>{date}</time>
            </div>
          </div>

          <div
            className="prose prose-lg dark:prose-invert prose-primary max-w-none 
              prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight
              prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-2xl prose-img:shadow-lg
              prose-pre:bg-gray-900 dark:prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-gray-800"
            dangerouslySetInnerHTML={{ __html: md.render(content) }}
          />
          
        </motion.div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}