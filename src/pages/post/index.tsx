import { GetStaticProps, NextPage } from 'next';
import AllPosts from '@/components/posts/all-posts';
import { Post } from '@/models';
import { getAllPosts } from '@/lib/posts-util';

interface AllPostsPageProps {
  posts: Post[];
}

const AllPostsPage: NextPage<AllPostsPageProps> = ({ posts }) => {
  return (
    <AllPosts posts={posts}/>
  )
}

export default AllPostsPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts: posts
    },
    revalidate: 60
  }
};
