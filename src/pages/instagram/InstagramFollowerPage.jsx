import React from 'react';
import FormInfo from '../../components/FormInfo';
import Page from '../../components/Page';

const InstagramFollowerPage = ({ instagramFollowers, onCapitalise }) => {
  return (
    <div>
      <Page
        title={instagramFollowers?.name}
        PageComponent={FormInfo}
        onCapitalise={onCapitalise}
      />
    </div>
  );
};

export default InstagramFollowerPage;
