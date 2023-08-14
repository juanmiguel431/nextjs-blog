import React from 'react';
import classes from '@/styles/all-posts.module.css';
import PostsGrid from '@/components/posts/posts-grid';
import { Post } from '@/models';

interface AllPostsProps {
  posts: Post[]
}

const AllPosts: React.FC<AllPostsProps> = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  )
}

export default AllPosts;
