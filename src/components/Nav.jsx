import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';

const Nav = ({ toggleMenu }) => {
  return (
    <nav
      style={{ display: `${toggleMenu ? 'block' : 'none'}` }}
      id='menu'
      className='bg-slate-500'
    >
      <ul>
        <li>
          <Link to='/facebook' className='menu'>
            Facebook
          </Link>
        </li>
        <li>
          <Link to='/tiktok' className='menu'>
            TikTok
          </Link>
        </li>
        <li>
          <Link to='/youtube' className='menu'>
            Youtube
          </Link>
        </li>
        <li>
          <Link to='/instagram' className='menu'>
            Instagram
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
