import React from 'react';
import FormInfo from '../../components/FormInfo';
import Nav from '../../components/Nav';
import Page from '../../components/Page';

const TiktokLikes = ({
  data,
  onCapitalise,
  tiktokVideoLikes,
  tiktokFollowers,
}) => {
  return (
    <Page
      title={tiktokVideoLikes?.name}
      PageComponent={FormInfo}
      Nav={Nav}
      youtubeViews={tiktokFollowers}
      youtubeVideoLikes={tiktokVideoLikes}
      onCapitalise={onCapitalise}
      data={data}
    />
  );
};

export default TiktokLikes;
