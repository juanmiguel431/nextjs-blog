import React from 'react';
import PostHeader from '@/components/posts/details/post-header';
import { Post } from '@/models';
import classes from '@/styles/post-content.module.css';
import ReactMarkdown from 'react-markdown';

interface PostContentProps {
  post: Post;
}

const PostContent: React.FC<PostContentProps> = ({post}) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath}/>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent;
