import React from 'react';
import DrawerAppBar from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <DrawerAppBar />
      <div className='content'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
