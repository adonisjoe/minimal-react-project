import React from 'react';
import FormInfo from '../../components/FormInfo';
import Nav from '../../components/Nav';
import Page from '../../components/Page';

const TiktokFollowers = ({
  tiktokVideoLikes,
  tiktokFollowers,
  onCapitalise,
  data,
}) => {
  return (
    <Page
      title={tiktokFollowers?.name}
      PageComponent={FormInfo}
      Nav={Nav}
      youtubeViews={tiktokFollowers}
      youtubeVideoLikes={tiktokVideoLikes}
      onCapitalise={onCapitalise}
      data={data}
    />
  );
};

export default TiktokFollowers;
