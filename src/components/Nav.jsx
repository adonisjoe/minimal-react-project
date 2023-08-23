import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div
      className={`absolute w-full top-0 left-0 ${
        toggleMenu ? 'h-[30rem]' : ''
      }`}
    >
      <div
        id='menu-trigger'
        onClick={() =>
          setToggleMenu((prevToggle) => {
            return !prevToggle;
          })
        }
      >
        <div className='menu-trigger'></div>
        <div className='menu-trigger'></div>
        <div className='menu-trigger'></div>
      </div>
      <nav
        style={{ display: `${toggleMenu ? 'block' : 'none'}` }}
        id='menu'
        className='bg-[#65666b]/90 h-96'
      >
        {console.log(`${toggleMenu ? 'toggle' : 'none'}`)}
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
    </div>
  );
};

export default Nav;
