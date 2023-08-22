import React from 'react';
import FormInfo from '../../components/FormInfo';
import Nav from '../../components/Nav';
import Page from '../../components/Page';

const FacebookServices = ({
  onCapitalise,
  facebookPageLikes,
  facebookPostLikes,
}) => {
  return (
    <>
      <Page
        title={facebookPageLikes?.name}
        PageComponent={FormInfo}
        Nav={Nav}
        youtubeViews={facebookPostLikes}
        youtubeVideoLikes={facebookPageLikes}
        onCapitalise={onCapitalise}
      />
    </>
  );
};

export default FacebookServices;
