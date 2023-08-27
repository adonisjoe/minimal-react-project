import React from 'react';

const Gcard = ({
  logo,
  backgroundColor = '#fff',
  title,
  data,
  onCapitalise,
}) => {
  return (
    <div className='gcard'>
      <div className='gcard-front'>
        <svg
          width='150%'
          height='150%'
          version='1.0'
          style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
          viewBox='0 0 13889 19444'
        >
          <defs>
            <style type='text/css'>
              {`
                .svgcolor {
                fill: ${backgroundColor};
            
                }
              `}
            </style>
          </defs>
          <g>
            <path
              className='svgcolor'
              d='M604 0l12681 0c332,0 604,272 604,604l0 18237c0,332 -272,603 -604,603l-12681 0c-332,0 -604,-271 -604,-603l0 -18237c0,-332 272,-604 604,-604zm4546 1389l1100 0c0,-384 311,-695 695,-695 383,0 694,311 694,695l1100 0c222,0 404,182 404,405l0 0c0,223 -182,405 -404,405l-3589 0c-222,0 -405,-182 -405,-405l0 0c0,-223 183,-405 405,-405z'
            />
          </g>
        </svg>

        <div className='gcard-logo'>{logo}</div>

        <div
          className={`gcard-value${
            data.platform === 'youtube' ? '--youtube' : ''
          } text-gray-700`}
        >
          {data?.pricePer1000}
        </div>
      </div>
      <div className='gcard-back'>
        <svg
          width='100%'
          height='100%'
          version='1.0'
          style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
          viewBox='0 0 13889 19444'
        >
          <defs>
            <style type='text/css'>
              {`.svgshadow {
                        fill: #50565b;
                      }`}
            </style>
          </defs>
          <g>
            <path
              className='svgshadow'
              d='M604 0l12681 0c332,0 604,272 604,604l0 18237c0,332 -272,603 -604,603l-12681 0c-332,0 -604,-271 -604,-603l0 -18237c0,-332 272,-604 604,-604zm4546 1389l1100 0c0,-384 311,-695 695,-695 383,0 694,311 694,695l1100 0c222,0 404,182 404,405l0 0c0,223 -182,405 -404,405l-3589 0c-222,0 -405,-182 -405,-405l0 0c0,-223 183,-405 405,-405z'
            />
          </g>
        </svg>
      </div>
      <p className='text-xs mt-1 text-center text-white font-bold  relative z-50'>
        {onCapitalise(
          `${data?.name?.includes('tiktok') ? data?.type : data?.name}`
        )}{' '}
      </p>
    </div>
  );
};

export default Gcard;
