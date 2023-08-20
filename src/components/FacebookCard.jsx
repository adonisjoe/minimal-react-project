import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const FacebookCard = () => {
  return (
    <Link className='home-card card-free-facebook-gift-cards' to='/facebook'>
      <div className='home-card-title'>Free Facebook Gift Cards</div>
      <div className='home-card-front'>
        <svg
          width='100%'
          height='100%'
          version='1.0'
          style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
          viewBox='0 0 13889 19444'
        >
          <defs>
            <style type='text/css'>{`.svgh10color{fill:#4c66a4}`}</style>
          </defs>
          <g>
            <path
              className='svgh10color'
              d='M604 0l12681 0c332,0 604,272 604,604l0 18237c0,332 -272,603 -604,603l-12681 0c-332,0 -604,-271 -604,-603l0 -18237c0,-332 272,-604 604,-604zm4546 1389l1100 0c0,-384 311,-695 695,-695 383,0 694,311 694,695l1100 0c222,0 404,182 404,405l0 0c0,223 -182,405 -404,405l-3589 0c-222,0 -405,-182 -405,-405l0 0c0,-223 183,-405 405,-405z'
            />
          </g>
        </svg>
        <div className='home-card-logo'>
          <svg
            width='100%'
            height='100%'
            style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
            viewBox='0 0 16667 23611'
          >
            <defs>
              <style type='text/css'>
                {`.filfacebook0 {fill:none} .filfacebook1 {fill:white} `}
              </style>
            </defs>
            <g>
              <rect className='filfacebook0' width='16667' height='23611' />
              <path
                className='filfacebook1'
                d='M7826 10437c-37,115 -4,2382 -15,2732 722,72 1712,270 1740,-681 10,-347 54,-887 -153,-1106 -269,-285 -623,-175 -1006,-79l-3 -936 -563 70zm4411 789c-668,123 -652,559 -636,1262 16,676 622,814 1143,722 647,-114 634,-587 619,-1265 -12,-594 -516,-832 -1126,-719zm-1890 -5c-680,117 -661,539 -651,1247 14,983 1403,952 1688,364 106,-218 80,-599 76,-866 -10,-672 -578,-837 -1113,-745zm-2794 1889l-78 -434c-170,27 -754,163 -895,1 -5,-5 -133,-228 -5,-256 21,-5 32,-5 53,-6 41,-2 98,2 142,2l806 -1c1,-575 32,-1039 -480,-1176 -221,-59 -526,-47 -723,29 -502,195 -436,694 -424,1219 20,882 980,813 1604,622zm-4799 -1816l71 435c625,-50 922,-193 875,358 -605,4 -1066,-76 -995,660 80,820 981,350 1072,331l23 109 481 0c-53,-1569 392,-2238 -1527,-1893zm-1176 -21l-290 2 -10 470 301 0 0 1443 577 -1 -1 -1442 423 0 38 -468 -460 -3c-12,-522 10,-412 445,-410l81 -450c-322,-43 -621,-111 -880,52 -269,170 -210,440 -224,807zm4252 1901l-67 -482c-161,15 -399,78 -564,21 -179,-61 -158,-265 -158,-486 0,-218 -32,-428 145,-501 158,-65 413,3 577,15 15,-112 77,-397 53,-483 -339,-63 -749,-98 -1039,60 -303,165 -311,478 -311,909 0,424 14,724 313,888 320,175 690,110 1051,59zm7777 -2734l-1 2748 576 -1 -1 -2822 -574 75zm1163 2745l619 3c-43,-150 -509,-906 -514,-966 -7,-73 437,-825 496,-976l-627 -1c-56,183 -487,871 -476,978 8,76 431,799 502,962zm-4281 -1481c-279,67 -216,323 -217,623 0,287 82,485 410,404 256,-64 202,-345 202,-625 1,-281 -77,-479 -395,-402zm1906 1c-281,59 -218,328 -218,622 -1,285 82,482 409,404 256,-62 202,-352 202,-625 1,-294 -69,-468 -393,-401zm-4001 104c-7,82 -22,782 10,890 1,4 4,11 6,16 133,31 377,20 473,-59 121,-100 92,-302 92,-489 0,-487 -23,-554 -581,-358zm-1870 177l502 0c1,-202 -26,-325 -236,-326 -231,-1 -265,110 -266,326zm-2823 726l3 -224c-193,-4 -463,-55 -449,159 15,219 328,110 446,65z'
              />
            </g>
          </svg>
        </div>
      </div>
      <div className='home-card-back'>
        <svg
          width='100%'
          height='100%'
          version='1.0'
          style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
          viewBox='0 0 13889 19444'
        >
          <defs>
            <style type='text/css'>{`.svgshadow{fill:#50565B}`}</style>
          </defs>
          <g>
            <path
              className='svgshadow'
              d='M604 0l12681 0c332,0 604,272 604,604l0 18237c0,332 -272,603 -604,603l-12681 0c-332,0 -604,-271 -604,-603l0 -18237c0,-332 272,-604 604,-604zm4546 1389l1100 0c0,-384 311,-695 695,-695 383,0 694,311 694,695l1100 0c222,0 404,182 404,405l0 0c0,223 -182,405 -404,405l-3589 0c-222,0 -405,-182 -405,-405l0 0c0,-223 183,-405 405,-405z'
            />
          </g>
        </svg>
      </div>
    </Link>
  );
};

export default FacebookCard;
