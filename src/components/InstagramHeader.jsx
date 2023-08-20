import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const InstagramHeader = ({ toggleMenu }) => {
  return (
    <>
      <Nav toggleMenu={toggleMenu} />
    </>
  );
};

export default InstagramHeader;
