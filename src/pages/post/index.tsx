import { NextPage } from 'next';
import AllPosts from '@/components/posts/all-posts';
import { Post } from '@/models';

const Dummy_Posts: Post[] = [
  {
    slug: 'getting-started-nextjs1',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs1.png',
    date: '2022-02-10',
    excerpt: 'NextJS is a React Framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR,',
  },
  {
    slug: 'getting-started-nextjs2',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs2.png',
    date: '2022-02-10',
    excerpt: 'NextJS is a React Framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR,',
  },
  {
    slug: 'getting-started-nextjs3',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs3.png',
    date: '2022-02-10',
    excerpt: 'NextJS is a React Framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR,',
  },
  {
    slug: 'getting-started-nextjs4',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs4.png',
    date: '2022-02-10',
    excerpt: 'NextJS is a React Framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR,',
  },
];

const AllPostsPage: NextPage = () => {
  return (
    <AllPosts posts={Dummy_Posts} />
  )
}

export default AllPostsPage;
