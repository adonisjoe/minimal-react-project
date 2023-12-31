import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id='header'>
      <Link to='..' id='logo' title='Gift Card Rebel'>
        <svg
          id='logo-svg'
          width='100%'
          height='100%'
          viewBox='0 0 13889 3106'
          preserveAspectRatio='none'
          style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
        >
          <defs>
            <style type='text/css'>
              {`.logofil0 {fill:#1F2227} 
                    .logofil1 {fill:#1F2227;
                    fillRule:nonzero} `}
            </style>
          </defs>
          <g id='Body'>
            <g id='_1387141822048'>
              <path
                className='logofil0'
                d='M1232 3106c-120,0 -63,-81 -127,-125 -90,-60 -122,-28 -103,-190 -76,5 -78,138 -43,144 -136,-29 -101,-146 -110,-157 -12,7 -64,36 -63,47 -11,-49 -32,-94 -14,-142 -73,54 -144,4 -187,-63 170,0 -36,-171 -122,-116 -7,-45 27,-60 38,-72 -55,-59 -109,-3 -85,97 -293,-204 -346,-421 -199,-691 -89,8 -163,-7 -189,-87 95,51 155,39 250,-55 -88,1 -181,3 -278,21 451,-251 196,-576 337,-1093 52,-190 188,-351 353,-464 320,-218 620,-212 832,11 447,-134 548,235 575,599 29,383 -53,707 319,952 -90,4 -179,-2 -267,-20 78,87 139,83 247,53 -49,72 -93,94 -175,95 116,306 54,449 -208,643 9,-96 -78,-93 -108,-61 11,12 45,27 38,72 -86,-55 -292,116 -122,116 -42,67 -114,117 -187,63 18,48 -3,93 -14,142 1,-11 -51,-40 -63,-47 -9,11 26,128 -109,157 34,-6 32,-139 -44,-144 6,53 -1,128 -44,164 -76,64 -174,50 -128,151zm-686 -1793l53 0c16,-132 100,-182 288,-182 102,0 264,7 278,126l70 0c14,-119 176,-126 278,-126 188,0 271,50 288,182l57 0c1,-22 2,-44 3,-66 -101,-258 104,-635 -235,-785 -300,386 -848,214 -1087,706 -1,51 2,99 7,145zm50 35l-46 0c10,86 24,173 25,284 -51,-69 -92,-145 -111,-240 -47,51 -97,88 -150,111 94,285 178,340 254,244 -4,150 46,273 246,314 25,-124 150,-186 396,-174 247,-12 371,50 396,174 193,-40 246,-154 247,-297 87,74 172,-8 255,-261 -64,-22 -113,-59 -143,-115 -34,103 -75,176 -120,231 4,-89 8,-179 12,-271l-53 0c0,6 0,12 0,19 0,163 -78,278 -215,278 -157,0 -342,-187 -355,-353l-68 0c-13,166 -198,353 -356,353 -137,0 -214,-115 -214,-278 0,-7 0,-13 0,-19zm614 843c-45,0 -90,0 -136,0 94,63 117,161 50,145 -167,-41 -252,-104 -227,-207 98,-14 180,-53 237,-131 22,19 46,34 76,34 31,0 55,-15 77,-34 57,78 139,117 237,131 25,103 -60,166 -228,207 -66,16 -43,-82 50,-145 -45,0 -90,0 -136,0z'
              />
            </g>
          </g>
        </svg>
      </Link>

      <div id='intro' className=' pb-10'>
        <h1 className=''>
          <span id='intro1'>Boost your socials</span>
          <span id='intro2'>like dealer</span>
        </h1>

        <div id='scrolldown'>
          <svg
            width='100%'
            height='100%'
            style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
            viewBox='0 0 13889 7639'
          >
            <defs>
              <style type='text/css'>{`.filscroll0 {fill:#1F2227}`}</style>
            </defs>
            <g>
              <polygon
                className='filscroll0'
                points='741,0 6944,6166 13148,0 13889,736 7685,6903 7685,6903 6944,7639 6944,7639 6944,7639 6204,6903 6204,6903 0,736 '
              />
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
