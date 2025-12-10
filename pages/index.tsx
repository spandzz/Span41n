import React from "react";
import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import Landing from "../components/Landing";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ProjectsList from "../components/ProjectsList";
import { getProjects, Project } from "../lib/data";

interface HomeProps {
  projects: Project[];
}

export default function Home({ projects }: HomeProps) {
  return (
    <Layout>
      <NextSeo
        title="Span41n | Developer & Creator"
        description="Personal portfolio of Span41n. Full Stack Developer, Open Source Enthusiast, and Creator."
        canonical="https://span41n.com/"
      />

      <Landing />
      
      <Skills />
      
      <div className="my-20">
        <hr className="w-24 h-1 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full border-none" />
      </div>

      <ProjectsList projects={projects} />
      
      <div className="my-20">
        <hr className="w-24 h-1 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full border-none" />
      </div>

      <Contact />

    </Layout>
  );
}

export async function getStaticProps() {
  const projects = getProjects();
  return {
    props: {
      projects,
    },
  };
}