import React from 'react';
import FormInfo from '../../components/FormInfo';
import Page from '../../components/Page';
import Nav from '../../components/Nav';

const FacebookPostServices = ({
  onCapitalise,
  facebookPageLikes,
  facebookPostLikes,
}) => {
  return (
    <>
      <Page
        title={facebookPostLikes?.name}
        PageComponent={FormInfo}
        Nav={Nav}
        youtubeViews={facebookPostLikes}
        onCapitalise={onCapitalise}
      />
    </>
  );
};

export default FacebookPostServices;
