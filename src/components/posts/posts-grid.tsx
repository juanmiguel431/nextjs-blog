import React from 'react';
import classes from '@/styles/posts-grid.module.css';
import PostItem from '@/components/posts/post-item';
import { Post } from '@/models';

interface PostsGridProps {
  posts: Post[];
}

const PostsGrid: React.FC<PostsGridProps> = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((p) => <PostItem key={p.title} post={p}/>)}
    </ul>
  );
};

export default PostsGrid;
