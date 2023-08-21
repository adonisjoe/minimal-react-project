import React, { useEffect, useState } from 'react';
import Gcard from '../../components/Gcard';
import FormInfo from '../../components/FormInfo';

import '../../index.css';
import { Link } from 'react-router-dom';
import Content from '../../components/Content';

const Instagram = ({
  instagramPostLikes,
  instagramFollowers,
  toggleMenu,
  onToggleMenu,
  onCapitalise,
}) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetchData(
      'https://api.sheety.co/06def408e74850aef0fbd22a79539f9f/ldServices/services'
    );
  }, []);

  const instagramData = data?.filter?.(
    (data) => data?.platform === 'instagram'
  );

  const fetchData = (data) => {
    fetch(data) // Replace with your API endpoint
      .then((response) => response?.json())
      .then((jsonData) => {
        setData(jsonData?.services);
      })

      .catch((error) => `Error fetching data:', ${error}`);
  };

  return (
    <div>
      <div
        id='menu-trigger'
        onClick={() => onToggleMenu((prevMenu) => !prevMenu)}
      >
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
                <style>
                  {`
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
                `}
                </style>
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
              href='http://getgiftcards.org/'
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
            </a>

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
                    <style type='text/css'>
                      {`.filscroll0 {fill:#1F2227}`}
                    </style>
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

          <div id='page' className='space-y-14'>
            <h2>WHAT DO YOU NEED?</h2>
            <div id='cards' className='flex justify-between'>
              {instagramData?.map((data) => (
                <Gcard
                  data={data}
                  key={data.serviceId}
                  onCapitalise={onCapitalise}
                  title={onCapitalise(
                    `${instagramFollowers?.platform} ${instagramFollowers?.type}`
                  )}
                  logo={
                    <Link
                      to={`${
                        data?.type.includes?.('likes') ? `likes` : `followers`
                      }`}
                      className='bg-red-600 w-[30rem]'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        height='800'
                        width='1200'
                        viewBox='-19.5036 -32.49725 169.0312 194.9835'
                      >
                        <defs>
                          <radialGradient
                            fy='578.088'
                            fx='158.429'
                            gradientTransform='matrix(0 -1.98198 1.8439 0 -1031.399 454.004)'
                            gradientUnits='userSpaceOnUse'
                            xlinkHref='#a'
                            r='65'
                            cy='578.088'
                            cx='158.429'
                            id='c'
                          />
                          <radialGradient
                            fy='473.455'
                            fx='147.694'
                            gradientTransform='matrix(.17394 .86872 -3.5818 .71718 1648.351 -458.493)'
                            gradientUnits='userSpaceOnUse'
                            xlinkHref='#b'
                            r='65'
                            cy='473.455'
                            cx='147.694'
                            id='d'
                          />
                          <linearGradient id='b'>
                            <stop stopColor='#3771c8' offset='0' />
                            <stop offset='.128' stopColor='#3771c8' />
                            <stop stopOpacity='0' stopColor='#60f' offset='1' />
                          </linearGradient>
                          <linearGradient id='a'>
                            <stop stopColor='#fd5' offset='0' />
                            <stop stopColor='#fd5' offset='.1' />
                            <stop stopColor='#ff543e' offset='.5' />
                            <stop stopColor='#c837ab' offset='1' />
                          </linearGradient>
                        </defs>
                        <path
                          d='M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0017.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z'
                          fill='url(#c)'
                        />
                        <path
                          d='M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0017.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z'
                          fill='url(#d)'
                        />
                        <path
                          d='M65.003 17c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C17.06 50.327 17 51.964 17 65s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97a5.76 5.76 0 105.76 5.758c0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C78.616 89.645 89.65 78.613 89.65 65S78.615 40.35 65.002 40.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z'
                          fill='#fff'
                        />
                      </svg>
                    </Link>
                  }
                />
              ))}
            </div>

            <Content
              firstPage={instagramFollowers}
              secondPage={instagramPostLikes}
              onCapitalise={onCapitalise}
            />
          </div>
        </div>
        {/* <!-- END OF INNER --> */}
      </div>
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
                  style={{ backgroundColor: '#4c66a4' }}
                ></div>
                <div
                  className='sbcirca active'
                  id='sbcirca1'
                  style={{ backgroundColor: '#4c66a4' }}
                ></div>
                <div
                  className='sbcirca'
                  id='sbcirca2'
                  style={{ backgroundColor: '#4c66a4' }}
                ></div>
                <div
                  className='sbcirca'
                  id='sbcirca3'
                  style={{ backgroundColor: '#4c66a4' }}
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
                  <style type='text/css'>
                    {`.filfbb0 {fill:none} .filfbb1 {fill:#4C66A4} `}
                  </style>
                </defs>
                <g>
                  <rect className='filfbb0' width='15278' height='12500' />
                  <path
                    className='filfbb1'
                    d='M7132 4883c-37,115 -4,2382 -15,2732 722,72 1712,270 1739,-681 10,-347 55,-887 -152,-1106 -270,-285 -623,-175 -1006,-79l-3 -936 -563 70zm4410 788c-667,123 -652,560 -635,1263 15,676 621,814 1143,722 647,-114 634,-587 619,-1265 -13,-594 -517,-832 -1127,-720zm-1889 -4c-680,117 -661,539 -651,1247 14,983 1403,952 1688,364 105,-218 79,-599 76,-867 -10,-671 -578,-836 -1113,-744zm-2794 1888l-78 -433c-171,27 -754,163 -896,1 -4,-5 -133,-228 -4,-256 21,-5 31,-5 52,-6 42,-2 99,1 142,1l806 0c2,-575 33,-1039 -480,-1176 -221,-59 -526,-47 -723,29 -502,195 -435,693 -424,1219 20,882 981,813 1605,621zm-4799 -1815l70 435c626,-50 923,-193 875,357 -604,5 -1066,-76 -994,661 79,820 981,350 1072,331l22 109 481 0c-52,-1569 392,-2238 -1526,-1893zm-1177 -22l-290 2 -10 471 302 0 0 1443 577 -1 -2 -1442 424 0 37 -469 -459 -2c-13,-522 10,-413 444,-410l81 -450c-322,-43 -620,-111 -879,52 -270,170 -210,440 -225,806zm4253 1902l-68 -482c-160,15 -398,77 -563,21 -180,-61 -158,-265 -158,-486 0,-218 -32,-428 145,-501 157,-65 412,3 576,15 15,-113 77,-397 54,-483 -340,-64 -749,-98 -1039,60 -304,165 -312,478 -311,909 0,424 13,724 313,888 319,175 690,109 1051,59zm7777 -2734l-2 2748 577 -1 -1 -2822 -574 75zm1163 2745l619 3c-43,-150 -509,-906 -515,-966 -6,-73 438,-825 497,-976l-627 -1c-57,183 -487,871 -476,978 8,76 431,799 502,962zm-4282 -1482c-279,67 -216,324 -216,624 0,287 81,485 410,403 256,-63 201,-344 202,-624 1,-281 -77,-479 -396,-403zm1907 2c-281,59 -218,328 -219,622 0,284 83,482 410,403 256,-61 201,-351 202,-624 1,-294 -70,-469 -393,-401zm-4002 103c-6,83 -21,783 11,891 1,4 3,10 6,15 132,32 377,21 472,-58 122,-100 93,-303 93,-490 0,-486 -24,-553 -582,-358zm-1869 178l502 -1c0,-201 -27,-325 -236,-325 -232,-1 -265,110 -266,326zm-2823 726l3 -225c-194,-3 -463,-55 -449,160 15,219 328,110 446,65z'
                  />
                </g>
              </svg>
            </div>
            <div id='genreturn' format='XXX-XXX-XXXX'></div>
            <div id='statustext'></div>
            <div id='hacklines'>
              <p className='level1'>Connecting to Facebook server...</p>
              <p className='level1'>
                Server is up at 192.200.175.162:445 (latency 0.013s)
              </p>
              <p className='level1'>Connecting to server SQL database...</p>
              <p className='level1'>Obtaining a service manager handle...</p>
              <p className='level1'>
                Creating a new service through pipeline...
              </p>
              <p className='level1'>Closing service handle...</p>
              <p className='level1'>
                Sending stage (749370 bytes) to 192.200.175.162
              </p>
              <p className='level1'>Meterpreter session 1 opened at port 445</p>
              <p className='level1'>Connected to Facebook server...</p>
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
                <img
                  // onclick="window.location = 'https://www.hostedfiles.net/cl.php?id=d40501c75d7e2941bc9da6e92c351ab3&aff_sub4=&aff_sub5=';"
                  src={`http://i.imgur.com/j7Ub8Zr.png`}
                  alt=''
                  style={{ marginTop: '50px', width: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END OF WRAPPER --> */}
    </div>
  );
};

export default Instagram;
