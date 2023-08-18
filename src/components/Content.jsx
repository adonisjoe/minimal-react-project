import React from 'react';

const Content = ({ firstPage, secondPage, onCapitalise }) => {
  return (
    <div id='content'>
      <h2>
        About {onCapitalise(firstPage?.platform)}{' '}
        {onCapitalise(firstPage?.type)} and {onCapitalise(secondPage?.type)}
      </h2>
      <p className='desc'>
        {firstPage?.description} {firstPage?.secondPage?.description}
      </p>
    </div>
  );
};

export default Content;
