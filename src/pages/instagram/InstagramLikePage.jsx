import React from 'react';
import FormInfo from '../../components/FormInfo';
import Page from '../../components/Page';
import Nav from '../../components/Nav';

const InstagramLikePage = ({
  title,
  instagramPostLikes,
  instagramFollowers,
  onCapitalise,
}) => {
  return (
    <div>
      <Page
        title={instagramPostLikes?.name}
        PageComponent={FormInfo}
        Nav={Nav}
        onCapitalise={onCapitalise}
      />
    </div>
  );
};

export default InstagramLikePage;
