import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import ScrollToTopButton from './ScrollToTop';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-4 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {children}
        <Analytics />
        <SpeedInsights />
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
