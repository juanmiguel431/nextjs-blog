import React from 'react';
import classes from '@/styles/featured-posts.module.css';
import PostsGrid from '@/components/posts/posts-grid';
import { Post } from '@/models';

interface FeaturedPostsProps {
  posts: Post[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({posts}) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
