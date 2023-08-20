import React from 'react';
import { Outlet } from 'react-router-dom';

const YoutubeLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default YoutubeLayout;
