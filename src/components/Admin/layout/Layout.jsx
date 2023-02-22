import React from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="md:flex">
        <div className="fixed md:static w-full bottom-0 md:w-3/12">
          <Sidebar />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}

export default Layout;
