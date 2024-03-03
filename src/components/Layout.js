import React from 'react';
import DrawerAppBar from './Header';
import Footer from './Footer';
import midPart from './midPart';

const Layout = ({ children }) => {
  return (
    <div>
      <DrawerAppBar />
      <midPart/>
      <div className='content'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
