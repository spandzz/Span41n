import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  version: string;
}

export interface Post {
  slug: string;
  frontmatter: {
    title: string;
    author?: string;
    category?: string;
    date: string;
    bannerImage?: string;
    description: string;
  };
}

export function getProjects(): Project[] {
  const filePath = path.join(process.cwd(), 'public', 'projects.json');
  try {
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading projects.json", error);
    return [];
  }
}

export function getSortedPosts(limit?: number): Post[] {
  const postsDirectory = path.join(process.cwd(), 'posts');
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      frontmatter: data as Post['frontmatter'],
    };
  });

  const sortedPosts = allPostsData.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime();
    const dateB = new Date(b.frontmatter.date).getTime();
    return dateB - dateA; // Newest first
  });

  if (limit) {
    return sortedPosts.slice(0, limit);
  }

  return sortedPosts;
}
