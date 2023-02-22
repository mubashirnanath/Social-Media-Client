import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../home/Navbar';
import LeftSidebar from '../home/LeftSidebar';

function Layout({ children, isFixed }) {
  return (
    <>
      <Navbar />
      <div className="md:flex gap-6">
        <div className="fixed md:static bottom-0 w-full md:w-4/12 -mb-5">
          <LeftSidebar />
        </div>
        <div className={isFixed === true ? 'w-6/12' : 'w-full'}>{children}</div>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
