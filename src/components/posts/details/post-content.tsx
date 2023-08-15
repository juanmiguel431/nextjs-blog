import React from 'react';
import PostHeader from '@/components/posts/details/post-header';
import { Post } from '@/models';
import classes from '@/styles/post-content.module.css';
import ReactMarkdown from 'react-markdown';

interface PostContentProps {
  title: string;
  image: string;
}

const dummy_post: Post = {
  slug: 'getting-started-nextjs1',
  title: 'Getting Started With NextJS',
  image: 'getting-started-nextjs1.png',
  date: '2022-02-10',
  excerpt: 'NextJS is a React Framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.',
  content: '# This is a first post'
};

const PostContent: React.FC = () => {
  // const { title, image } = props;
  const imagePath = `/images/posts/${dummy_post.slug}/${dummy_post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={dummy_post.title} image={imagePath}/>
      <ReactMarkdown>{dummy_post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent;
