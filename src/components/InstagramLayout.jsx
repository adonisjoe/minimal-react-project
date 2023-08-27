import React from 'react';
import { Outlet } from 'react-router-dom';
import InstagramHeader from './InstagramHeader';

const InstagramLayout = ({
  toggleMenu,
  instagramPostLikes,
  instagramFollowers,
  onCapitalise,
}) => {
  return (
    <div className='bg'>
      <InstagramHeader toggleMenu={toggleMenu} />
      <Outlet />
    </div>
  );
};

export default InstagramLayout;
