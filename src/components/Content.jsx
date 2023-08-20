import React from 'react';

const Content = ({ firstPage, secondPage, onCapitalise }) => {
  console.log(secondPage);
  return (
    <div id='content'>
      <h2>
        About {onCapitalise(firstPage?.platform)}{' '}
        {onCapitalise(firstPage?.type)} and {onCapitalise(secondPage?.type)}
      </h2>
      {console.log(firstPage)}

      <p className='desc'>
        {firstPage?.description} {firstPage?.secondPage?.description}
      </p>
    </div>
  );
};

export default Content;
