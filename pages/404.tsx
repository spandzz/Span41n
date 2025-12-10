import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';

export default function Custom404() {
  return (
    <Layout>
      <NextSeo title="404 - Page Not Found" description="The page you are looking for does not exist." />
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-extrabold text-gray-200 dark:text-gray-800">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-4">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Go Back Home
            </Link>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}