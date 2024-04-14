import React from 'react';
import DrawerAppBar from './Header';
import Footer from './Footer';

// import midPart from './midPart';

import Hrest from './Hrest';



const Layout = ({ children }) => {
  return (
    <div>
      <DrawerAppBar />
      <Hrest/>
      <div className='content'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
