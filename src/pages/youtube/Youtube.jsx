// <body
//   color="#0063d1"
//   className="ebay"
//   style="background-color: #0063d1"
//   oncontextmenu="return false"
// >

import React, { useEffect, useState } from 'react';
import Gcard from '../../components/Gcard';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Nav from '../../components/Nav';

const Youtube = ({ onCapitalise }) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetchData(
      'https://api.sheety.co/06def408e74850aef0fbd22a79539f9f/ldServices/services'
    );
  }, []);

  const youtube = data?.filter((data) => data?.platform === 'youtube');

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
      <Nav />
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
          <Header />

          <div id='page'>
            <h2>WHAT DO YOU NEED?</h2>
            <div id='cards'>
              {youtube?.map((data) => {
                return (
                  <Gcard
                    key={data?.serviceId}
                    onCapitalise={onCapitalise}
                    data={data}
                    backgroundColor='#fff'
                    logo={
                      <Link
                        to={`${
                          data?.type === 'subscribers'
                            ? `youtube-subscribers`
                            : `${
                                data?.type === 'views'
                                  ? 'youtube-views'
                                  : 'youtube-likes'
                              }`
                        }`}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          height='800'
                          width='1200'
                          xmlSpace='preserve'
                          y='0'
                          x='0'
                          id='Layer_1'
                          version='1.1'
                          viewBox='-57.15 -21.25 495.3 127.5'
                        >
                          <style
                            id='style7427'
                            type='text/css'
                          >{`.st2{fill:#282828}`}</style>
                          <g id='g7433'>
                            <path
                              id='path7429'
                              d='M118.9 13.3c-1.4-5.2-5.5-9.3-10.7-10.7C98.7 0 60.7 0 60.7 0s-38 0-47.5 2.5C8.1 3.9 3.9 8.1 2.5 13.3 0 22.8 0 42.5 0 42.5s0 19.8 2.5 29.2C3.9 76.9 8 81 13.2 82.4 22.8 85 60.7 85 60.7 85s38 0 47.5-2.5c5.2-1.4 9.3-5.5 10.7-10.7 2.5-9.5 2.5-29.2 2.5-29.2s.1-19.8-2.5-29.3z'
                              fill='red'
                            />
                            <path
                              id='polygon7431'
                              fill='#fff'
                              d='M48.6 24.3v36.4l31.6-18.2z'
                            />
                          </g>
                          <g id='g7451'>
                            <g id='g7449'>
                              <path
                                id='path7435'
                                d='M176.3 77.4c-2.4-1.6-4.1-4.1-5.1-7.6-1-3.4-1.5-8-1.5-13.6v-7.7c0-5.7.6-10.3 1.7-13.8 1.2-3.5 3-6 5.4-7.6 2.5-1.6 5.7-2.4 9.7-2.4 3.9 0 7.1.8 9.5 2.4 2.4 1.6 4.1 4.2 5.2 7.6 1.1 3.4 1.7 8 1.7 13.8v7.7c0 5.7-.5 10.2-1.6 13.7-1.1 3.4-2.8 6-5.2 7.6-2.4 1.6-5.7 2.4-9.8 2.4-4.2-.1-7.6-.9-10-2.5zm13.5-8.4c.7-1.7 1-4.6 1-8.5V43.9c0-3.8-.3-6.6-1-8.4-.7-1.8-1.8-2.6-3.5-2.6-1.6 0-2.8.9-3.4 2.6-.7 1.8-1 4.6-1 8.4v16.6c0 3.9.3 6.8 1 8.5.6 1.7 1.8 2.6 3.5 2.6 1.6 0 2.7-.8 3.4-2.6z'
                                className='st2'
                              />
                              <path
                                id='path7437'
                                d='M360.9 56.3V59c0 3.4.1 6 .3 7.7.2 1.7.6 3 1.3 3.7.6.8 1.6 1.2 3 1.2 1.8 0 3-.7 3.7-2.1.7-1.4 1-3.7 1.1-7l10.3.6c.1.5.1 1.1.1 1.9 0 4.9-1.3 8.6-4 11-2.7 2.4-6.5 3.6-11.4 3.6-5.9 0-10-1.9-12.4-5.6-2.4-3.7-3.6-9.4-3.6-17.2v-9.3c0-8 1.2-13.8 3.7-17.5 2.5-3.7 6.7-5.5 12.6-5.5 4.1 0 7.3.8 9.5 2.3 2.2 1.5 3.7 3.9 4.6 7 .9 3.2 1.3 7.6 1.3 13.2v9.1h-20.1zm1.5-22.4c-.6.8-1 2-1.2 3.7-.2 1.7-.3 4.3-.3 7.8v3.8h8.8v-3.8c0-3.4-.1-6-.3-7.8-.2-1.8-.7-3-1.3-3.7-.6-.7-1.6-1.1-2.8-1.1-1.4-.1-2.3.3-2.9 1.1z'
                                className='st2'
                              />
                              <path
                                id='path7439'
                                d='M147.1 55.3L133.5 6h11.9l4.8 22.3c1.2 5.5 2.1 10.2 2.7 14.1h.3c.4-2.8 1.3-7.4 2.7-14l5-22.4h11.9L159 55.3v23.6h-11.8V55.3z'
                                className='st2'
                              />
                              <path
                                id='path7441'
                                d='M241.6 25.7V79h-9.4l-1-6.5h-.3c-2.5 4.9-6.4 7.4-11.5 7.4-3.5 0-6.1-1.2-7.8-3.5-1.7-2.3-2.5-5.9-2.5-10.9V25.7h12v39.1c0 2.4.3 4.1.8 5.1s1.4 1.5 2.6 1.5c1 0 2-.3 3-1 1-.6 1.7-1.4 2.1-2.4V25.7z'
                                className='st2'
                              />
                              <path
                                id='path7443'
                                d='M303.1 25.7V79h-9.4l-1-6.5h-.3c-2.5 4.9-6.4 7.4-11.5 7.4-3.5 0-6.1-1.2-7.8-3.5-1.7-2.3-2.5-5.9-2.5-10.9V25.7h12v39.1c0 2.4.3 4.1.8 5.1s1.4 1.5 2.6 1.5c1 0 2-.3 3-1 1-.6 1.7-1.4 2.1-2.4V25.7z'
                                className='st2'
                              />
                              <path
                                id='path7445'
                                d='M274.2 15.7h-11.9v63.2h-11.7V15.7h-11.9V6h35.5z'
                                className='st2'
                              />
                              <path
                                id='path7447'
                                d='M342.8 34.2c-.7-3.4-1.9-5.8-3.5-7.3s-3.9-2.3-6.7-2.3c-2.2 0-4.3.6-6.2 1.9-1.9 1.2-3.4 2.9-4.4 4.9h-.1V3.3h-11.6v75.6h9.9l1.2-5h.3c.9 1.8 2.3 3.2 4.2 4.3 1.9 1 3.9 1.6 6.2 1.6 4.1 0 7-1.9 8.9-5.6 1.9-3.7 2.9-9.6 2.9-17.5v-8.4c-.1-6.1-.4-10.8-1.1-14.1zm-11 21.7c0 3.9-.2 6.9-.5 9.1-.3 2.2-.9 3.8-1.6 4.7-.8.9-1.8 1.4-3 1.4-1 0-1.9-.2-2.7-.7-.8-.5-1.5-1.2-2-2.1V38.1c.4-1.4 1.1-2.6 2.1-3.6 1-.9 2.1-1.4 3.2-1.4 1.2 0 2.2.5 2.8 1.4.7 1 1.1 2.6 1.4 4.8.3 2.3.4 5.5.4 9.6v7z'
                                className='st2'
                              />
                            </g>
                          </g>
                        </svg>
                      </Link>
                    }
                  />
                );
              })}
            </div>
            <div id='content'>
              <h2>Disclaimer</h2>

              <p>
                All social signals provided by our platform are non-invasive and
                non-engagement. New likes, followers or subscribers will not
                engage with your future content and not buy stuff you promote.
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
              <p className='level1'>Connecting to eBay server...</p>
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

export default Youtube;
