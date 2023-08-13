import React from 'react';
import Link from 'next/link';
import classes from '@/styles/main-navigation.module.css';
import Logo from './logo';

const MainNavigation: React.FC = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li><Link href="/post" >Posts</Link></li>
          <li><Link href="/contact" >Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
