import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

const HomeLayout = () => {
  return (
    <div className='relative'>
      <Nav />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
