import { GetStaticProps, NextPage } from 'next';
import AllPosts from '@/components/posts/all-posts';
import { Post } from '@/models';
import { getAllPosts } from '@/lib/posts-util';
import Head from 'next/head';

interface AllPostsPageProps {
  posts: Post[];
}

const AllPostsPage: NextPage<AllPostsPageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming-related tutorials and posts!"/>
      </Head>
      <AllPosts posts={posts}/>
    </>
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
