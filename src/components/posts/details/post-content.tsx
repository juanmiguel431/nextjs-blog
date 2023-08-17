import React from 'react';
import PostHeader from '@/components/posts/details/post-header';
import { Post } from '@/models';
import classes from '@/styles/post-content.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Components } from 'react-markdown/lib/ast-to-react';

interface PostContentProps {
  post: Post;
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  // const customRenderers: Components = {
  const customRenderers = {
    p: (paragraph: any) => {
      const { node } = paragraph;
      const element = node.children[0];
      if (element.tagName === 'img') {
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${element.properties.src}`}
              alt={element.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    }
  }

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath}/>
      <ReactMarkdown
        components={customRenderers}>
        {post.content}
      </ReactMarkdown>
    </article>
  )
}

export default PostContent;
