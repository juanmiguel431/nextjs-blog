import { GetStaticProps, NextPage } from 'next';
import Hero from '@/components/home-page/hero';
import FeaturedPosts from '@/components/home-page/featured-posts';
import { Post } from '@/models';
import { getFeaturedPosts } from '@/lib/posts-util';

interface HomePageProps {
  posts: Post[];
}

const HomePage: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <>
      <Hero/>
      <FeaturedPosts posts={posts} />
    </>
  )
}

export default HomePage;

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const featurePost = await getFeaturedPosts();
  return {
    props: {
      posts: featurePost
    },
    revalidate: 60
  };
}
