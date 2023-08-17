import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import PostContent from '@/components/posts/details/post-content';
import { getAllPosts, getPostData } from '@/lib/posts-util';
import { Post } from '@/models';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPathsResult } from 'next/types';
import Head from 'next/head';

interface PostDetailPageProps {
  post: Post;
}

const PostDetailPage: NextPage<PostDetailPageProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt}/>
      </Head>
      <PostContent post={post}/>
    </>
  )
}

export default PostDetailPage;

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<PostDetailPageProps, Params> = async (context) => {
  const { params } = context;
  const slug = params?.slug;

  if (!slug) {
    return {
      notFound: true
    };
  }

  const post = await getPostData(slug);

  if (!post) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post: post
    },
    revalidate: 60
  }
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await getAllPosts();
  const paths: GetStaticPathsResult<Params>['paths'] = posts.map(p => ({ params: { slug: p.slug } }));
  return {
    paths: paths,
    fallback: 'blocking'
  };
}
