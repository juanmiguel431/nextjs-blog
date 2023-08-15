import React from 'react';
import Image from 'next/image';
import classes from '@/styles/post-header.module.css';

interface PostHeaderProps {
  title: string;
  image: string;
}

const PostHeader: React.FC<PostHeaderProps> = (props) => {
  const { title, image } = props
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  )
}

export default PostHeader;
