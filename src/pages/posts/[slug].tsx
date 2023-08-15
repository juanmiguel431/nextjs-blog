import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import PostContent from '@/components/posts/details/post-content';
import { getAllPosts, getPostData } from '@/lib/posts-util';
import { Post } from '@/models';
import { ParsedUrlQuery } from 'querystring';

interface PostDetailPageProps {
  post: Post;
}

const PostDetailPage: NextPage<PostDetailPageProps> = ({ post }) => {
  return (
    <PostContent post={post}/>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map(p => `/posts/${p.slug}`);
  return {
    paths: paths,
    fallback: 'blocking'
  };
}
