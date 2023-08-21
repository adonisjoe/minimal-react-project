import React from 'react';

const Content = ({ firstPage, secondPage, onCapitalise }) => {
  return (
    <div id='content'>
      <h2 className='text-left'>Disclaimer</h2>
      <p className='desc'>
        All social signals provided by our platform are non-invasive and
        non-engagement. New likes, followers or subscribers will not engage with
        your future content and not buy stuff you promote.
      </p>
    </div>
  );
};

export default Content;
