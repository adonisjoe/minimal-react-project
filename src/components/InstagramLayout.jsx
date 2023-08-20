import React from 'react';
import { Outlet } from 'react-router-dom';
import InstagramHeader from './InstagramHeader';
import FormInfo from './FormInfo';

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
