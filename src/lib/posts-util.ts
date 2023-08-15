import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/models';

const currentWorkingDir = process.cwd();
const postDirectory = path.join(currentWorkingDir, 'src', 'posts');

export async function getPostData(fileName: string): Promise<Post> {
  const filePath = path.join(postDirectory, fileName);
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const result = matter(fileContent);
  const data = result.data as Post;

  return {
    ...data,
    slug: fileName.replace(/\.md$/, ''),
    content: result.content
  };
}

export async function getAllPosts() {
  const postFiles = await fs.readdir(postDirectory);
  const posts = await Promise.all(postFiles.map(p => getPostData(p)));
  posts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);
  return posts;
}

export async function getFeaturedPosts() {
  const posts = await getAllPosts();
  return posts.filter(p => p.featured);
}
