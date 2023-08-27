import React from 'react';
import FormInfo from '../../components/FormInfo';
import Page from '../../components/Page';

const InstagramLikePage = ({ instagramPostLikes, onCapitalise }) => {
  return (
    <>
      <Page
        title={instagramPostLikes?.name}
        PageComponent={FormInfo}
        onCapitalise={onCapitalise}
      />
    </>
  );
};

export default InstagramLikePage;
