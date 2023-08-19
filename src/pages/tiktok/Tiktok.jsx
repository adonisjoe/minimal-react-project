// <body
//   color="#0063d1"
//   className="ebay"
//   style="background-color: #0063d1"
//   oncontextmenu="return false"
// >

import React from 'react';
import Gcard from '../../components/Gcard';
import Nav from '../../components/Nav';
import { Link } from 'react-router-dom';

const Tiktok = ({ tiktokVideoLikes, tiktokFollowers, onCapitalise, data }) => {
  const tiktokList = data?.filter((data) => data?.platform === 'tiktok');

  return (
    <div>
      <Nav />
      <div id='menu-trigger'>
        <div className='menu-trigger'></div>
        <div className='menu-trigger'></div>
        <div className='menu-trigger'></div>
      </div>
      <div id='wrapper'>
        <div id='inner'>
          <script type='text/javascript'>
            document.getElementById('wrapper').style.opacity = '0';
            document.getElementById('menu-trigger').style.opacity = '0';
          </script>
          <div id='sky'></div>
          <div id='background'>
            <svg
              width='100%'
              height='100%'
              version='1.0'
              viewBox='0 0 13889 41667'
              preserveAspectRatio='none'
              style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
            >
              <defs>
                <style type='text/css'>{`
                .str0 {
                  stroke: #373435;
                  stroke-width: 0.0393701;
                }
                .bkcfil12 {
                  fill: none;
                }
                .bkcfil11 {
                  fill: #161a1c;
                }
                .bkcfil9 {
                  fill: #191d20;
                }
                .bkcfil8 {
                  fill: #1f2227;
                }
                .bkcfil1 {
                  fill: #2a2d34;
                }
                .bkcfil13 {
                  fill: #2c3e50;
                }
                .bkcfil10 {
                  fill: #33353b;
                }
                .bkcfil2 {
                  fill: #3f4248;
                }
                .bkcfil6 {
                  fill: #657071;
                }
                .bkcfil3 {
                  fill: #7f8c8d;
                }
                .bkcfil7 {
                  fill: #bb8481;
                }
                .bkcfil5 {
                  fill: #d8c0a6;
                }
                .bkcfil4 {
                  fill: #f0d6b9;
                }

                #Closed {
                  display: none;
                }
                  
                `}</style>
              </defs>

              <g id='Opened'>
                <g id='_1387123740432'>
                  <path
                    className='bkcfil1'
                    d='M5709 4485c2464,535 2174,1795 6101,1951l0 35231 -5707 0 0 -29180 -325 0 0 -7369 -261 -39 -79 -96 271 -498z'
                  />
                  <path
                    className='bkcfil2'
                    d='M5744 4421c2464,535 2139,1829 6066,1984l0 62c-3927,-156 -3672,-1383 -6136,-1917l0 0 70 -129z'
                  />
                  <path
                    className='bkcfil3'
                    d='M5438 4983c1725,0 2557,1613 5995,1613l0 35071 -5330 0 0 -29180 -325 0 0 -6848 -340 -656z'
                  />
                  <path
                    className='bkcfil4'
                    d='M11870 7400l8 1c80,7 140,79 133,160l0 0c-8,81 -79,141 -160,133l-432 -39c-81,-7 -141,-79 -133,-160l0 0c4,-45 28,-83 62,-107 -66,-22 -114,-84 -113,-157l0 0c1,-63 37,-117 89,-144 -62,-26 -108,-86 -112,-158l0 0c-4,-79 44,-149 113,-177 -47,-25 -80,-71 -87,-126l0 0c-10,-90 55,-171 145,-181l478 -53c90,-10 171,55 181,144l0 0c9,81 -43,154 -118,176 96,-2 178,74 183,172l0 0c5,99 -73,184 -172,189l-34 2c81,11 143,81 142,164l0 0c-1,90 -75,162 -165,162l-8 -1z'
                  />
                  <path
                    className='bkcfil5'
                    d='M11550 7519c3,-29 8,-59 18,-86 -65,-10 -129,-26 -192,-47 34,17 103,40 175,57 -7,23 -11,51 -13,75 -2,24 -3,52 -1,76 -73,4 -146,14 -182,25 66,-10 131,-14 197,-12 -5,-29 -5,-59 -2,-88zm-20 -285c0,-33 3,-66 12,-97 -73,-5 -145,-17 -217,-36 39,16 118,36 199,48 -5,26 -8,58 -8,84 0,27 2,59 6,85 -81,10 -160,28 -200,43 72,-16 145,-27 218,-31 -8,-31 -11,-64 -10,-96zm8 -322c-2,-35 -1,-73 7,-107 -81,-1 -161,-10 -242,-25 45,15 133,31 223,39 -4,29 -4,65 -3,94 2,29 6,64 13,93 -89,17 -175,42 -218,61 78,-23 158,-39 238,-49 -11,-33 -16,-70 -18,-106zm-7 -319c-3,-32 -4,-65 1,-97 -73,3 -147,0 -220,-9 41,11 122,21 204,23 -3,27 -1,58 2,85 3,26 8,57 16,83 -79,20 -155,47 -193,67 69,-25 140,-44 212,-57 -12,-30 -18,-63 -22,-95z'
                  />
                  <path
                    className='bkcfil6'
                    d='M6425 5288c-10,0 -19,12 -28,33l20 51 46 -25c-12,-38 -24,-59 -38,-59zm-78 730c11,215 42,371 78,371 34,0 62,-132 76,-322l-71 -111 -83 62z'
                  />
                </g>
              </g>
              <g id='Body'>
                <g id='_1387123743152'>
                  <polygon
                    className='bkcfil4'
                    points='5280,1349 3834,1813 3003,2612 2701,3464 3111,4015 3467,4468 3637,4678 4285,4787 4914,4678 5042,4414 5733,3809 5884,3421 5485,2374 '
                  />
                  <path
                    className='bkcfil7'
                    d='M4287 4352c-138,-66 -305,67 -485,18l0 0c151,-21 279,-76 366,-189 34,26 71,49 119,49 47,0 84,-23 118,-49 88,113 215,168 367,189l0 0c-180,49 -347,-84 -485,-18z'
                  />
                  <path
                    className='bkcfil8'
                    d='M3406 5253c-163,96 -276,53 -429,-77 230,-232 153,-452 69,-532 24,207 -43,264 -76,370 -485,-334 -574,-691 -329,-1135 -147,14 -270,-11 -313,-143 157,84 256,65 414,-90 -146,2 -300,6 -461,35 747,-412 324,-946 558,-1794 87,-313 312,-577 586,-762 529,-359 1027,-348 1379,17 740,-219 907,387 952,983 48,630 -88,1162 529,1564 -149,7 -297,-3 -443,-32 129,142 231,136 410,86 -82,118 -154,155 -291,157 192,502 51,820 -383,1138 -177,107 -179,142 -445,251l-1727 -36zm806 -2327c-24,-195 -292,-207 -461,-207 -311,0 -450,82 -477,299l-89 0c-8,-77 -13,-154 -11,-238 396,-808 1304,-525 1802,-1160 562,246 222,865 389,1290 -1,36 -3,72 -4,108l-96 0c-27,-217 -166,-299 -477,-299 -169,0 -437,12 -461,207l-115 0zm-1020 149l77 0c0,10 0,20 0,31 0,268 128,457 355,457 261,0 568,-307 589,-580l114 0c20,273 327,580 588,580 227,0 355,-189 355,-457 0,-11 0,-21 0,-31l88 0c-6,151 -13,299 -20,444 75,-88 143,-210 200,-377 49,90 130,152 237,188 -138,416 -279,550 -424,428 0,234 -88,422 -408,488 -41,-204 -248,-306 -656,-286 -409,-20 -615,82 -657,286 -332,-68 -414,-269 -407,-516 -127,158 -265,68 -421,-400 88,-38 171,-98 248,-183 31,156 99,282 184,394 -1,-182 -25,-325 -42,-466zm1095 1384c-75,0 -150,0 -225,0 155,104 192,265 82,238 -277,-67 -418,-170 -377,-340 163,-23 299,-86 393,-214 36,30 76,55 127,55 51,0 90,-25 127,-55 93,128 230,191 392,214 42,170 -99,273 -377,340 -110,27 -72,-134 83,-238 -75,0 -150,0 -225,0z'
                  />
                  <polygon
                    className='bkcfil9'
                    points='2436,12487 6103,12487 6103,41667 2436,41667 2436,13088 2475,13066 2436,13044 '
                  />
                  <path
                    className='bkcfil2'
                    d='M5810 12400l293 -93 0 -6368c132,43 265,85 398,128 4,-70 7,-147 7,-229 0,-214 -18,-400 -45,-491l-1281 -506 -905 307 -920 -307 -921 364c0,2367 0,4735 0,7102l293 93c2061,0 1020,0 3081,0z'
                  />
                  <path
                    className='bkcfil10'
                    d='M6103 12307c-1222,0 -2444,0 -3667,0 -74,0 -74,214 0,214 1223,0 2445,0 3667,0 74,0 74,-214 0,-214z'
                  />
                  <path
                    className='bkcfil11'
                    d='M5364 12521c0,340 165,567 739,567l0 -44c-545,-9 -720,-217 -739,-523zm-2189 0c0,340 -165,567 -739,567l0 -44c545,-9 720,-217 739,-523z'
                  />
                  <path
                    className='bkcfil1'
                    d='M4998 41667l0 -34544c0,-970 -1523,-1328 -1759,-1934l0 0c-61,-174 -94,-311 -111,-477 -226,-2 -503,172 -644,289 -71,59 -96,90 -79,202 -1133,674 -1913,1787 -1919,3019 17,947 494,1951 1592,2833l0 30612 2920 0zm-2888 -35164c-21,316 -32,663 -32,995l0 2440c-517,-543 -746,-1177 -748,-1771 -3,-634 241,-1242 748,-1689l32 25z'
                  />
                  <path
                    className='bkcfil4'
                    d='M2546 11061l-45 1 14 -28c140,-91 265,-203 368,-348l26 7 20 34c-108,141 -239,252 -383,334z'
                  />
                  <path
                    className='bkcfil2'
                    d='M2044 10772c85,-107 289,50 206,155l-164 207 -204 -161 162 -201zm1085 -6058c-3,-28 -5,-57 -7,-88 -226,39 -502,228 -674,371 -68,56 -74,105 -43,206 2,-39 15,-84 57,-119 167,-138 451,-331 667,-370zm-240 5963c19,-29 49,-62 61,-90 -12,-7 -37,-10 -49,-18 -1042,-655 -1549,-1555 -1571,-2402 -23,876 478,1825 1559,2510zm-484 -5474c-1182,641 -1942,1781 -1919,3019 25,-1198 784,-2293 1937,-2913 -7,-35 -9,-70 -18,-106zm760 749c65,-41 166,-89 260,-123 -168,32 -325,93 -577,307 19,41 74,46 130,-13 53,-56 123,-120 187,-171zm74 -763c288,601 1759,907 1759,1934 0,-927 -1665,-1397 -1759,-1934zm134 1202c4,112 51,109 161,92 602,-94 1117,140 1420,554 -309,-395 -848,-599 -1450,-493 -120,21 -154,-8 -131,-153z'
                  />
                  <path
                    className='bkcfil9'
                    d='M4954 7037c-315,-400 -861,-575 -1489,-447 -127,26 -174,29 -166,-128 6,-130 66,-327 187,-554 -93,237 -107,342 -112,471 -7,157 37,154 160,133 602,-106 1117,117 1420,525zm-1789 -1085c-99,87 -185,206 -234,319 -47,107 -126,95 -207,-48 -140,-248 -277,-651 -319,-1020 91,270 216,578 357,827 55,98 121,176 226,65 52,-55 112,-102 177,-143zm-916 387c-100,282 -171,744 -171,1159 0,-340 0,-680 0,-1020 53,-47 113,-96 171,-139zm880 4017c-49,137 -123,267 -200,371l-46 -41 6 -9c19,-29 35,-57 47,-86 -11,-7 -23,-14 -35,-22 76,-69 152,-140 228,-213zm-583 705c-123,69 -260,120 -397,148 21,-17 42,-33 62,-50l9 7c92,-20 195,-68 295,-132l31 27z'
                  />
                  <path
                    className='bkcfil9'
                    d='M2120 10800c46,0 83,37 83,83 0,45 -37,82 -83,82 -45,0 -82,-37 -82,-82 0,-46 37,-83 82,-83zm2665 -3758c46,0 83,36 83,82 0,46 -37,82 -83,82 -45,0 -82,-36 -82,-82 0,-46 37,-82 82,-82zm-891 0c46,0 83,36 83,82 0,46 -37,82 -83,82 -45,0 -82,-36 -82,-82 0,-46 37,-82 82,-82zm891 2030c46,0 83,37 83,82 0,46 -37,83 -83,83 -45,0 -82,-37 -82,-83 0,-45 37,-82 82,-82zm-891 0c46,0 83,37 83,82 0,46 -37,83 -83,83 -45,0 -82,-37 -82,-83 0,-45 37,-82 82,-82zm891 2030c46,0 83,37 83,83 0,45 -37,82 -83,82 -45,0 -82,-37 -82,-82 0,-46 37,-83 82,-83zm-891 0c46,0 83,37 83,83 0,45 -37,82 -83,82 -45,0 -82,-37 -82,-82 0,-46 37,-83 82,-83zm891 2031c46,0 83,37 83,82 0,46 -37,83 -83,83 -45,0 -82,-37 -82,-83 0,-45 37,-82 82,-82zm-891 0c46,0 83,37 83,82 0,46 -37,83 -83,83 -45,0 -82,-37 -82,-83 0,-45 37,-82 82,-82z'
                  />
                  <path
                    className='bkcfil13'
                    d='M3995 2738c-25,-5 -51,-9 -77,-12l-370 829c24,5 49,8 76,8 10,0 19,-1 29,-1l342 -824zm-205 -19c-14,0 -26,0 -39,0 -34,0 -65,1 -95,3l-309 693c32,49 74,88 124,113l319 -809zm1188 14l-313 749c60,38 124,64 187,75l276 -773c-41,-24 -90,-41 -150,-51zm205 93l-267 737c22,0 43,-2 63,-6l232 -696c-8,-12 -18,-24 -28,-35z'
                  />
                </g>
              </g>
              <g id='Closed'>
                <g id='_1387123747888'>
                  <path
                    className='bkcfil1'
                    d='M3681 41667l0 -34544c0,-1039 1400,-1341 1619,-1933l0 0c60,-173 95,-309 111,-474 14,-136 571,233 631,270 69,42 66,78 59,205l-3 18c849,300 2070,1003 2035,1886 -7,165 -50,340 -139,524 -276,573 -874,856 -1533,988l-40 31 -11 104c27,44 51,144 51,572l0 32353 -2780 0zm2715 -35357l59 164 -26 30c21,315 32,557 32,889l0 348c506,-164 799,-440 799,-734 0,-257 -247,-520 -799,-717l-65 20z'
                  />
                  <path
                    className='bkcfil2'
                    d='M5163 6427c-4,111 -43,103 -141,76 -539,-148 -1008,26 -1279,412 281,-358 767,-509 1306,-348 107,32 144,12 114,-140zm248 -1711c3,-28 5,-57 7,-87 220,35 478,208 641,343 62,52 66,75 42,219 -2,-38 -17,-99 -55,-131 -161,-134 -424,-308 -635,-344zm-27 1233c-70,-41 -179,-88 -280,-122 181,31 350,92 622,306 -20,41 -80,46 -141,-13 -56,-55 -132,-120 -201,-171zm-1703 1174c0,-1134 1331,-1332 1619,-1933 -115,587 -1544,846 -1619,1933zm2420 -1932c849,296 2070,939 2032,1904 -32,-925 -1219,-1541 -2045,-1826l13 -78zm-1502 2691l0 -82c1558,219 2605,-266 2659,-760 1,17 2,33 2,50 -10,504 -1068,1016 -2661,792zm492 622c0,-137 -258,-141 -258,-7l0 208 -36 83 325 11 -30 -87 -1 -208z'
                  />
                  <path
                    className='bkcfil9'
                    d='M3743 6915c283,-350 774,-467 1338,-288 115,36 156,42 150,-107 -6,-123 -60,-315 -169,-541 83,233 96,333 101,456 6,149 -33,143 -144,111 -541,-154 -1004,10 -1276,369zm2547 -681c100,282 171,744 171,1159l0 -1103c-54,-19 -111,-38 -171,-56zm-1192 -408c183,99 375,227 479,465 46,107 125,95 206,-49 140,-248 276,-681 318,-1051 -74,350 -183,608 -332,853 -58,96 -93,158 -198,47 -52,-55 -238,-210 -473,-265zm1363 2781l0 161 0 546c0,-273 -90,-521 -302,-495 -380,46 -779,59 -1123,61l0 37 -279 -1 0 -44c-67,-3 -131,-6 -192,-9l-1 -142 -53 0c-124,33 -162,241 -383,241 -174,0 -549,-45 -600,-173 -35,-342 -74,-896 78,-896 108,0 216,0 324,0 0,-72 0,-144 0,-215 0,-194 51,-306 295,-306 0,127 0,254 0,381 0,254 132,324 375,339l3 603c73,4 150,7 230,10l0 56 259 1 0 -50c428,7 913,-13 1369,-105z'
                  />
                  <path
                    className='bkcfil4'
                    d='M4600 7958c-284,-7 -440,-66 -440,-342 0,-127 0,-254 0,-381 -244,0 -295,112 -295,306 0,72 0,144 0,216 -108,0 -216,0 -324,0 -97,0 -200,151 -109,296 -79,49 -94,188 -2,250 -75,74 -55,203 31,255 -73,84 -16,267 80,267 174,0 348,0 522,0 221,0 260,-208 383,-241l157 0 -3 -626z'
                  />
                  <path
                    className='bkcfil5'
                    d='M4160 7449l0 -14c-28,0 -47,-32 -47,-197l0 -1c-4,0 -9,0 -13,1 0,176 24,211 60,211z'
                  />
                  <path
                    className='bkcfil9'
                    d='M5014 8478c-36,-28 -88,-22 -116,14 -29,35 -23,87 13,115 36,29 87,23 116,-13 28,-35 22,-87 -13,-116zm-229 -1436c46,0 83,37 83,83 0,45 -37,82 -83,82 -45,0 -82,-37 -82,-82 0,-46 37,-83 82,-83zm-891 0c46,0 83,37 83,83 0,45 -37,82 -83,82 -45,0 -82,-37 -82,-82 0,-46 37,-83 82,-83zm891 2030c46,0 83,37 83,83 0,45 -37,82 -83,82 -45,0 -82,-37 -82,-82 0,-46 37,-83 82,-83zm-891 0c46,0 83,37 83,83 0,45 -37,82 -83,82 -45,0 -82,-37 -82,-82 0,-46 37,-83 82,-83zm891 2031c46,0 83,37 83,82 0,46 -37,83 -83,83 -45,0 -82,-37 -82,-83 0,-45 37,-82 82,-82zm-891 0c46,0 83,37 83,82 0,46 -37,83 -83,83 -45,0 -82,-37 -82,-83 0,-45 37,-82 82,-82zm891 2030c46,0 83,37 83,82 0,46 -37,83 -83,83 -45,0 -82,-37 -82,-83 0,-45 37,-82 82,-82zm-891 0c46,0 83,37 83,82 0,46 -37,83 -83,83 -45,0 -82,-37 -82,-83 0,-45 37,-82 82,-82z'
                  />
                </g>
              </g>
              <g id='Beard'>
                <path
                  className='bkcfil8'
                  d='M4322 5962c-198,0 -104,-134 -210,-205 -149,-99 -202,-47 -170,-313 -126,8 -130,228 -73,237 -224,-48 -166,-239 -181,-258 -20,12 -106,59 -104,77 -18,-80 -53,-154 -24,-233 -121,90 -239,7 -310,-103 283,0 -59,-281 -201,-191 -12,-74 44,-98 62,-118 -38,-40 -90,-30 -131,-19 58,-60 70,-141 54,-188l114 -82 1138 191 1115 -191 114 82c-16,47 -3,128 55,188 -41,-11 -94,-21 -132,19 18,20 75,44 63,118 -142,-90 -484,191 -202,191 -70,110 -189,193 -309,103 28,79 -6,153 -24,233 1,-18 -84,-65 -105,-77 -15,19 43,210 -181,258 57,-9 54,-229 -72,-237 10,87 -3,210 -73,269 -126,106 -288,83 -213,249z'
                />
              </g>
            </svg>
          </div>
          <div id='header'>
            <a
              href='http://47335.getgiftcards.org'
              id='logo'
              title='Gift Card Rebel'
            >
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
                    {`
                  .logofil0 {
                    fill: #1f2227;
                  }
                  .logofil1 {
                    fill: #1f2227;
                    fillRule: nonzero;
                  }`}
                  </style>
                </defs>
                <g id='Body'>
                  <g id='_1387141822048'>
                    <path
                      className='logofil0'
                      d='M1232 3106c-120,0 -63,-81 -127,-125 -90,-60 -122,-28 -103,-190 -76,5 -78,138 -43,144 -136,-29 -101,-146 -110,-157 -12,7 -64,36 -63,47 -11,-49 -32,-94 -14,-142 -73,54 -144,4 -187,-63 170,0 -36,-171 -122,-116 -7,-45 27,-60 38,-72 -55,-59 -109,-3 -85,97 -293,-204 -346,-421 -199,-691 -89,8 -163,-7 -189,-87 95,51 155,39 250,-55 -88,1 -181,3 -278,21 451,-251 196,-576 337,-1093 52,-190 188,-351 353,-464 320,-218 620,-212 832,11 447,-134 548,235 575,599 29,383 -53,707 319,952 -90,4 -179,-2 -267,-20 78,87 139,83 247,53 -49,72 -93,94 -175,95 116,306 54,449 -208,643 9,-96 -78,-93 -108,-61 11,12 45,27 38,72 -86,-55 -292,116 -122,116 -42,67 -114,117 -187,63 18,48 -3,93 -14,142 1,-11 -51,-40 -63,-47 -9,11 26,128 -109,157 34,-6 32,-139 -44,-144 6,53 -1,128 -44,164 -76,64 -174,50 -128,151zm-686 -1793l53 0c16,-132 100,-182 288,-182 102,0 264,7 278,126l70 0c14,-119 176,-126 278,-126 188,0 271,50 288,182l57 0c1,-22 2,-44 3,-66 -101,-258 104,-635 -235,-785 -300,386 -848,214 -1087,706 -1,51 2,99 7,145zm50 35l-46 0c10,86 24,173 25,284 -51,-69 -92,-145 -111,-240 -47,51 -97,88 -150,111 94,285 178,340 254,244 -4,150 46,273 246,314 25,-124 150,-186 396,-174 247,-12 371,50 396,174 193,-40 246,-154 247,-297 87,74 172,-8 255,-261 -64,-22 -113,-59 -143,-115 -34,103 -75,176 -120,231 4,-89 8,-179 12,-271l-53 0c0,6 0,12 0,19 0,163 -78,278 -215,278 -157,0 -342,-187 -355,-353l-68 0c-13,166 -198,353 -356,353 -137,0 -214,-115 -214,-278 0,-7 0,-13 0,-19zm614 843c-45,0 -90,0 -136,0 94,63 117,161 50,145 -167,-41 -252,-104 -227,-207 98,-14 180,-53 237,-131 22,19 46,34 76,34 31,0 55,-15 77,-34 57,78 139,117 237,131 25,103 -60,166 -228,207 -66,16 -43,-82 50,-145 -45,0 -90,0 -136,0z'
                    />
                    <path
                      className='logofil1'
                      d='M3455 611c44,0 85,8 124,25 39,17 72,40 101,68 28,29 51,62 68,101 17,39 25,80 25,124l0 81c0,23 -11,39 -33,45l-229 84c-22,6 -33,-2 -33,-26l0 -171c0,-17 -6,-32 -18,-43 -12,-12 -26,-18 -43,-18l-20 0c-17,0 -31,6 -43,18 -12,11 -18,26 -18,43l0 1141c0,17 6,31 18,43 12,12 26,18 43,18l20 0c17,0 31,-6 43,-18 12,-12 18,-26 18,-43l0 -449 -71 0 0 -288 331 0c24,0 35,12 35,35l0 715c0,44 -8,85 -25,124 -17,38 -40,72 -68,101 -29,28 -62,51 -101,68 -39,17 -80,25 -124,25l-96 0c-44,0 -85,-8 -124,-25 -38,-17 -72,-40 -101,-68 -28,-29 -51,-63 -68,-101 -17,-39 -25,-80 -25,-124l0 -1167c0,-44 8,-85 25,-124 17,-39 40,-72 68,-101 29,-28 63,-51 101,-68 39,-17 80,-25 124,-25l96 0zm763 1750c0,24 -12,35 -35,35l-225 0c-24,0 -35,-11 -35,-35l0 -1697c0,-24 11,-36 35,-36l225 0c23,0 35,12 35,36l0 1697zm758 -1733c24,0 36,12 36,36l0 225c0,23 -12,35 -36,35l-288 0 0 364 250 0c24,0 36,11 36,35l0 225c0,23 -12,35 -36,35l-250 0 0 778c0,24 -11,35 -35,35l-225 0c-23,0 -35,-11 -35,-35l0 -1697c0,-24 12,-36 35,-36l548 0zm809 0c23,0 35,12 35,36l0 225c0,23 -12,35 -35,35l-179 0 0 1437c0,24 -12,35 -36,35l-225 0c-8,0 -16,-3 -24,-10 -7,-6 -11,-15 -11,-25l0 -1437 -177 0c-23,0 -35,-12 -35,-35l0 -225c0,-24 12,-36 35,-36l652 0zm794 -17c43,0 85,8 123,25 39,17 73,40 101,68 29,29 52,62 69,101 16,39 25,80 25,124l0 202c0,24 -11,39 -33,45l-230 36c-22,7 -33,-2 -33,-25l0 -245c0,-17 -6,-32 -17,-43 -12,-12 -26,-18 -43,-18l-20 0c-17,0 -32,6 -43,18 -12,11 -18,26 -18,43l0 1141c0,17 6,31 18,43 11,12 26,18 43,18l20 0c17,0 31,-6 43,-18 11,-12 17,-26 17,-43l0 -353c0,-24 11,-32 33,-26l230 31c22,6 33,22 33,45l0 316c0,44 -9,85 -25,124 -17,38 -40,72 -69,101 -28,28 -62,51 -101,68 -38,17 -80,25 -123,25l-96 0c-44,0 -85,-8 -124,-25 -39,-17 -73,-40 -101,-68 -29,-29 -52,-63 -68,-101 -17,-39 -26,-80 -26,-124l0 -1167c0,-44 9,-85 26,-124 16,-39 39,-72 68,-101 28,-28 62,-51 101,-68 39,-17 80,-25 124,-25l96 0zm1187 1750c3,24 -7,35 -30,35l-230 0c-22,0 -35,-11 -38,-35l-20 -273 -157 0 -20 273c-3,24 -16,35 -38,35l-230 0c-23,0 -33,-11 -30,-35l189 -1697c4,-24 17,-36 41,-36l333 0c24,0 37,12 41,36l189 1697zm-338 -556l-48 -684 -21 0 -48 684 117 0zm1235 556c5,24 -3,35 -25,35l-230 0c-10,0 -20,-3 -29,-10 -9,-6 -16,-15 -19,-25l-184 -619 0 654 -3 -25c-3,17 -14,25 -33,25l-225 0c-23,0 -35,-11 -35,-35l0 -1697c0,-24 12,-36 35,-36l379 0c44,0 85,9 124,26 39,16 73,39 101,68 29,28 51,62 68,101 17,39 26,80 26,124l0 411c0,63 -16,119 -48,168 -32,50 -74,88 -127,115l225 720zm-487 -955l80 0c17,0 32,-6 43,-17 12,-12 18,-26 18,-43l0 -387c0,-17 -6,-31 -18,-43 -11,-11 -26,-17 -43,-17l-80 0 0 507zm1015 -778c44,0 85,9 124,26 39,16 73,39 101,68 29,28 51,62 68,101 17,39 26,80 26,124l0 1131c0,44 -9,85 -26,124 -17,39 -39,72 -68,101 -28,29 -62,51 -101,68 -39,17 -80,25 -124,25l-379 0c-23,0 -35,-11 -35,-35l0 -1697c0,-24 12,-36 35,-36l379 0zm23 331c0,-17 -6,-31 -18,-43 -11,-11 -26,-17 -43,-17l-80 0 0 1227 80 0c17,0 32,-6 43,-17 12,-12 18,-27 18,-43l0 -1107zm1473 1402c5,24 -3,35 -25,35l-230 0c-10,0 -20,-3 -29,-10 -9,-6 -15,-15 -19,-25l-184 -619 0 654 -3 -25c-3,17 -14,25 -33,25l-224 0c-24,0 -36,-11 -36,-35l0 -1697c0,-24 12,-36 36,-36l379 0c43,0 85,9 123,26 39,16 73,39 101,68 29,28 52,62 69,101 16,39 25,80 25,124l0 411c0,63 -16,119 -48,168 -32,50 -74,88 -126,115l224 720zm-487 -955l81 0c17,0 31,-6 43,-17 11,-12 17,-26 17,-43l0 -387c0,-17 -6,-31 -17,-43 -12,-11 -26,-17 -43,-17l-81 0 0 507zm1185 695c23,0 35,12 35,35l0 225c0,24 -12,35 -35,35l-548 0c-24,0 -36,-11 -36,-35l0 -1697c0,-24 12,-36 36,-36l548 0c23,0 35,12 35,36l0 225c0,23 -12,35 -35,35l-288 0 0 364 250 0c23,0 35,11 35,35l0 225c0,23 -12,35 -35,35l-250 0 0 518 288 0zm859 -586c23,24 41,51 53,83 12,32 18,68 18,106l0 374c0,44 -9,85 -26,124 -16,39 -39,72 -68,101 -28,29 -62,51 -101,68 -39,17 -80,25 -124,25l-379 0c-23,0 -35,-11 -35,-35l0 -1697c0,-24 12,-36 35,-36l379 0c44,0 85,9 124,26 39,16 73,39 101,68 29,28 52,62 68,101 17,39 26,80 26,124l0 252c0,78 -24,142 -71,195 -25,27 -56,49 -91,65 37,14 67,32 91,56zm-225 149c0,-17 -6,-31 -18,-43 -11,-12 -26,-18 -43,-18l-80 0 0 523 80 0c17,0 32,-6 43,-17 12,-12 18,-27 18,-43l0 -402zm0 -705c0,-17 -6,-31 -18,-43 -11,-11 -26,-17 -43,-17l-80 0 0 429 80 0c17,0 32,-6 43,-18 12,-11 18,-26 18,-43l0 -308zm1016 1142c23,0 35,12 35,35l0 225c0,24 -12,35 -35,35l-548 0c-24,0 -36,-11 -36,-35l0 -1697c0,-24 12,-36 36,-36l548 0c23,0 35,12 35,36l0 225c0,23 -12,35 -35,35l-288 0 0 364 250 0c24,0 35,11 35,35l0 225c0,23 -11,35 -35,35l-250 0 0 518 288 0zm819 0c23,0 35,12 35,35l0 225c0,24 -12,35 -35,35l-341 0 -6 0 -2 0 -225 0c-23,0 -35,-11 -35,-35l0 -1697c0,-24 12,-36 35,-36l225 0c24,0 35,12 35,36l0 1437 314 0z'
                    />
                  </g>
                </g>
              </svg>
            </a>

            <div id='intro'>
              <span id='intro1'>Psst! Hey there!</span>
              <span id='intro2'>Do you want some </span>
              <h1>
                {tiktokList?.[0]?.name} and {tiktokList?.[1]?.type}
              </h1>
              <div id='scrolldown'>
                <svg
                  width='100%'
                  height='100%'
                  style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
                  viewBox='0 0 13889 7639'
                >
                  <defs>
                    <style type='text/css'>{`
                    .filscroll0 {
                      fill: #1f2227;
                    }`}</style>
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
          </div>
          <div id='page'>
            <h2>
              Select between {tiktokList?.[0]?.name} and {tiktokList?.[1]?.name}
            </h2>
            <div id='cards' className=''>
              {tiktokList?.map((data) => (
                <div className='w-72 mx-auto' key={data.serviceId}>
                  <Link
                    to={`${
                      data.type.includes('likes') ? 'video-likes' : 'followers'
                    }`}
                  >
                    <Gcard
                      data={data}
                      key={data?.serviceId}
                      onCapitalise={onCapitalise}
                      backgroundColor='#010101'
                      logo={
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          height='800'
                          width='1200'
                          viewBox='-37.5 -62.5 325 375'
                        >
                          <path
                            clipRule='evenodd'
                            d='M25 0h200c13.808 0 25 11.192 25 25v200c0 13.808-11.192 25-25 25H25c-13.808 0-25-11.192-25-25V25C0 11.192 11.192 0 25 0z'
                            fillRule='evenodd'
                            fill='#010101'
                          />
                          <path
                            clipRule='evenodd'
                            d='M156.98 230c7.607 0 13.774-6.117 13.774-13.662 0-7.545-6.167-13.663-13.774-13.663h-2.075c7.607 0 13.774 6.118 13.774 13.663S162.512 230 154.905 230z'
                            fillRule='evenodd'
                            fill='#EE1D51'
                          />
                          <path
                            clipRule='evenodd'
                            d='M154.717 202.675h-2.075c-7.607 0-13.775 6.118-13.775 13.663S145.035 230 152.642 230h2.075c-7.608 0-13.775-6.117-13.775-13.662 0-7.545 6.167-13.663 13.775-13.663z'
                            fillRule='evenodd'
                            fill='#66C8CF'
                          />
                          <ellipse
                            ry='6.643'
                            rx='6.699'
                            clipRule='evenodd'
                            fillRule='evenodd'
                            fill='#010101'
                            cy='216.338'
                            cx='154.811'
                          />
                          <path
                            clipRule='evenodd'
                            d='M50 196.5v6.925h8.112v26.388h8.115v-26.201h6.603l2.264-7.112zm66.415 0v6.925h8.112v26.388h8.115v-26.201h6.603l2.264-7.112zm-39.81 3.93c0-2.17 1.771-3.93 3.959-3.93 2.19 0 3.963 1.76 3.963 3.93s-1.772 3.93-3.963 3.93c-2.188-.001-3.959-1.76-3.959-3.93zm0 6.738h7.922v22.645h-7.922zM87.924 196.5v33.313h7.925v-8.608l2.453-2.248L106.037 230h8.49l-11.133-16.095 10-9.733h-9.622l-7.923 7.86V196.5zm85.47 0v33.313h7.926v-8.608l2.452-2.248L191.509 230H200l-11.133-16.095 10-9.733h-9.622l-7.925 7.86V196.5z'
                            fillRule='evenodd'
                            fill='#FFF'
                          />
                          <path
                            clipRule='evenodd'
                            d='M161.167 81.186c10.944 7.819 24.352 12.42 38.832 12.42V65.755a39.26 39.26 0 01-8.155-.853v21.923c-14.479 0-27.885-4.601-38.832-12.42v56.835c0 28.432-23.06 51.479-51.505 51.479-10.613 0-20.478-3.207-28.673-8.707C82.187 183.57 95.23 189.5 109.66 189.5c28.447 0 51.508-23.047 51.508-51.48V81.186zm10.06-28.098c-5.593-6.107-9.265-14-10.06-22.726V26.78h-7.728c1.945 11.09 8.58 20.565 17.788 26.308zm-80.402 99.107a23.445 23.445 0 01-4.806-14.256c0-13.004 10.548-23.547 23.561-23.547a23.6 23.6 0 017.147 1.103V87.022a51.97 51.97 0 00-8.152-.469v22.162a23.619 23.619 0 00-7.15-1.103c-13.013 0-23.56 10.543-23.56 23.548 0 9.195 5.272 17.157 12.96 21.035z'
                            fillRule='evenodd'
                            fill='#EE1D52'
                          />
                          <path
                            clipRule='evenodd'
                            d='M153.012 74.405c10.947 7.819 24.353 12.42 38.832 12.42V64.902c-8.082-1.72-15.237-5.942-20.617-11.814-9.208-5.743-15.843-15.218-17.788-26.308H133.14v111.239c-.046 12.968-10.576 23.468-23.561 23.468-7.652 0-14.45-3.645-18.755-9.292-7.688-3.878-12.96-11.84-12.96-21.035 0-13.005 10.547-23.548 23.56-23.548 2.493 0 4.896.388 7.15 1.103V86.553c-27.945.577-50.42 23.399-50.42 51.467 0 14.011 5.597 26.713 14.68 35.993 8.195 5.5 18.06 8.707 28.673 8.707 28.445 0 51.505-23.048 51.505-51.479z'
                            fillRule='evenodd'
                            fill='#FFF'
                          />
                          <path
                            clipRule='evenodd'
                            d='M191.844 64.902v-5.928a38.84 38.84 0 01-20.617-5.887 38.948 38.948 0 0020.617 11.815zM153.439 26.78a39.524 39.524 0 01-.427-3.198V20h-28.028v111.24c-.045 12.967-10.574 23.467-23.56 23.467-3.813 0-7.412-.904-10.6-2.512 4.305 5.647 11.103 9.292 18.755 9.292 12.984 0 23.515-10.5 23.561-23.468V26.78zm-44.864 59.773v-6.311a51.97 51.97 0 00-7.067-.479C73.06 79.763 50 102.811 50 131.24c0 17.824 9.063 33.532 22.835 42.772-9.083-9.28-14.68-21.982-14.68-35.993 0-28.067 22.474-50.889 50.42-51.466z'
                            fillRule='evenodd'
                            fill='#69C9D0'
                          />
                          <path
                            clipRule='evenodd'
                            d='M154.904 230c7.607 0 13.775-6.117 13.775-13.662 0-7.545-6.168-13.663-13.775-13.663h-.188c-7.607 0-13.774 6.118-13.774 13.663S147.109 230 154.716 230zm-6.792-13.662c0-3.67 3-6.643 6.7-6.643 3.697 0 6.697 2.973 6.697 6.643s-3 6.645-6.697 6.645c-3.7-.001-6.7-2.975-6.7-6.645z'
                            fillRule='evenodd'
                            fill='#FFF'
                          />
                        </svg>
                      }
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div id='content'>
              <h2>
                About {onCapitalise(tiktokList?.[0]?.name)} and{' '}
                {onCapitalise(tiktokList?.[1]?.type)}
              </h2>

              <p>
                {tiktokList?.[0]?.description} and{' '}
                {tiktokList?.[1]?.description}
              </p>
            </div>
          </div>
        </div>
        {/* <!-- END OF INNER --> */}
      </div>
      {/* <!-- END OF WRAPPER --> */}
      <div id='gboverlay'>
        <div id='gbclose'></div>
        <div id='gbmouse'></div>
        <div id='generatorbox'>
          <div id='gbinner'>
            <div id='steps'>
              <div className='stepname active' id='step1'>
                Connecting
              </div>
              <div className='stepname' id='step2'>
                Generating
              </div>
              <div className='stepname' id='step3'>
                Completed
              </div>
              <div id='statusbar'>
                <div className='sbcirc' id='sbcirc1'></div>
                <div className='sbcirc' id='sbcirc2'></div>
                <div className='sbcirc' id='sbcirc3'></div>
                <div
                  id='sbcomplete'
                  style={{ backgroundColor: '#0063d1' }}
                ></div>
                <div
                  className='sbcirca active'
                  id='sbcirca1'
                  style={{ backgroundColor: '#0063d1' }}
                ></div>
                <div
                  className='sbcirca'
                  id='sbcirca2'
                  style={{ backgroundColor: '#0063d1' }}
                ></div>
                <div
                  className='sbcirca'
                  id='sbcirca3'
                  style={{ backgroundColor: '#0063d1' }}
                ></div>
              </div>
            </div>

            <div id='genlogo'>
              <svg
                width='100%'
                height='100%'
                style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
                viewBox='0 0 15278 12500'
              >
                <defs>
                  <style>{` .filebayb0 {fill:none}
                  .filebayb1 {fill:#0063D1;}
                  .filebayb4 {fill:#85B716;} 
                  .filebayb3 {fill:#E43137;} 
                  .filebayb2 {fill:#F4AE01;}`}</style>
                </defs>
                <g>
                  <rect className='filebayb0' width='15278' height='12500' />
                  <g>
                    <path
                      className='filebayb1'
                      d='M5821 5169c648,-76 1176,343 1236,1029 60,697 -345,1239 -951,1316 -168,21 -359,3 -508,-47 -208,-68 -371,-187 -500,-360 -328,-441 -310,-1087 -10,-1525 164,-240 432,-377 733,-413zm-1682 895l1 460c4,460 -1,913 -16,1372 93,0 663,9 705,-5l23 -418c17,16 21,25 36,42 152,189 420,336 655,408 306,95 682,112 1006,43 504,-107 897,-420 1108,-886 14,-33 66,-187 76,-202 9,-94 30,-150 51,-234 19,-238 35,-398 -5,-639 -59,-352 -225,-672 -468,-899 -134,-126 -233,-188 -404,-273 -462,-230 -1195,-210 -1685,52 -115,62 -248,168 -326,266 -13,16 -23,33 -36,46 -13,-122 -2,-313 -2,-442 0,-164 -9,-1258 4,-1320l-722 0 -1 2629z'
                    />
                    <path
                      className='filebayb2'
                      d='M10370 6409c0,265 1,438 -119,645 -215,371 -596,493 -1025,492 -258,0 -422,-55 -579,-177 -118,-91 -228,-340 -148,-559 63,-170 233,-265 439,-315 418,-102 985,-86 1432,-86zm-2586 235c-21,84 -42,140 -51,234 -45,694 446,1055 1082,1125 322,36 697,0 979,-103 285,-104 461,-227 638,-452l20 448 661 0c-38,-626 -25,-1257 -25,-1888 0,-243 -10,-348 -67,-570l-5 -7 -10 -28c-11,-17 -15,-40 -25,-59 -10,-20 -20,-38 -32,-59 -20,-35 -51,-85 -65,-116l-3 -6 -5 -9 -8 -4 -10 -12c-12,-9 0,9 -13,-15 -40,-67 -79,-87 -134,-135 -372,-326 -1073,-354 -1541,-302 -418,45 -850,189 -1075,529 -69,106 -128,241 -135,399l731 0c21,-10 9,7 19,-30 49,-176 150,-289 331,-366 381,-162 1145,-113 1301,385 35,111 28,225 28,345 -276,0 -551,0 -827,0 -426,-1 -1016,39 -1376,262 -100,63 -157,107 -225,183 -103,115 -92,123 -158,251z'
                    />
                    <path
                      className='filebayb3'
                      d='M3396 6050l-2049 0c4,-863 1155,-1166 1753,-677 152,124 301,367 296,677zm744 474l-1 -460c-25,-123 -7,-150 -59,-333 -110,-383 -373,-700 -718,-867 -322,-156 -632,-203 -1003,-197 -1010,15 -1651,479 -1744,1436 -46,466 19,915 280,1285 193,275 548,490 1023,569 663,110 1489,42 1925,-479 102,-122 201,-316 220,-479l-737 -1c-49,191 -255,368 -438,448 -419,183 -1019,98 -1325,-269 -35,-43 -61,-75 -92,-126 -86,-143 -151,-355 -139,-527l2808 0z'
                    />
                    <path
                      className='filebayb4'
                      d='M10845 5123c13,24 1,6 13,15 15,-12 -3,-19 11,1 14,21 2,5 -1,11l8 4 5 9 3 6c14,31 45,81 65,116 12,21 22,39 32,59 10,19 14,42 25,59 15,17 17,11 10,28l5 7c9,-5 -4,-23 18,17l226 423c38,78 82,156 122,230 41,75 80,151 120,225 163,303 319,605 486,909l242 455c79,162 115,157 73,231 -42,76 -77,152 -119,227 -124,228 -238,460 -360,682 -37,67 -90,159 -118,228l794 0 2171 -4271 -757 0c-25,77 -106,220 -147,302l-899 1806c-42,84 -101,224 -150,293 -198,-404 -401,-799 -601,-1202l-525 -1053c-18,-36 -50,-126 -82,-146l-827 2 174 325c-11,6 2,11 -17,2z'
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div id='genreturn' format='XXX-XXX-XXX-XXXX'></div>
            <div id='statustext'></div>
            <div id='hacklines'>
              <p className='level1 bg-zinc-900'>Connecting to eBay server...</p>
              <p className='level1'>
                Server is up at 192.200.175.162:445 (latency 0.013s)
              </p>
              <p className='level1'>Connecting to server SQL database...</p>
              <p className='level1'>Obtaining a service manager handle...</p>
              <p className='level1 '>
                Creating a new service through pipeline...
              </p>
              <p className='level1'>Closing service handle...</p>
              <p className='level1'>
                Sending stage (749370 bytes) to 192.200.175.162
              </p>
              <p className='level1'>Meterpreter session 1 opened at port 445</p>
              <p className='level1'>Connected to eBay server...</p>
              <p className='level2 longsearch'>
                Searching database for unused codes...
              </p>
              <p className='level3 p-video'>Success!</p>
              <p className='level3 p-survey'>
                Please complete one of the surveys to get complete code...
              </p>
            </div>

            <div id='widgetholder' style={{ height: '200px !important' }}>
              <div id='whclick'></div>
              <div id='whdesc'>
                Your code is found and ready for use. Please verify you are
                human now by tapping "I'm not a robot".
              </div>
              <div id='whcontent'>
                {/* <img
                  onclick={
                    "window.location = 'https://www.hostedfiles.net/cl.php?id=d40501c75d7e2941bc9da6e92c351ab3&aff_sub4=&aff_sub5=';"
                  }
                  src=
                  style=
                /> */}
                <img
                  style={{ marginTop: '50px', width: '100%' }}
                  src='http://i.imgur.com/j7Ub8Zr.png'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiktok;
