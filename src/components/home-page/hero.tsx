import React from 'react';
import classes from '../../styles/hero.module.css';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/juan-miguel.jpg"
          alt="Juan Miguel"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Juan Miguel</h1>
      <p>
        I blog about web development, specially frontend frameworks like Angular or React.
      </p>
    </section>
  );
}

export default Hero;
