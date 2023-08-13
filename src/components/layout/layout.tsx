import React, { PropsWithChildren } from 'react';
import MainNavigation from '@/components/layout/main-navigation';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <MainNavigation/>
      <main>{children}</main>
    </>
  );
}

export default Layout;
