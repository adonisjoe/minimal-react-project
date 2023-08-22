import React from 'react';
import FormInfo from '../../components/FormInfo';
import Nav from '../../components/Nav';
import Page from '../../components/Page';

const YoutubeViews = ({
  youtubeVideoLikes,
  youtubeSubscribers,
  youtubeViews,
  onFetchData,
  onCapitalise,
  data,
}) => {
  return (
    <Page
      title={youtubeViews?.name}
      PageComponent={FormInfo}
      Nav={Nav}
      youtubeViews={youtubeViews}
      youtubeVideoLikes={youtubeVideoLikes}
      youtubeSubscribers={youtubeSubscribers}
      onFetchData={onFetchData}
      onCapitalise={onCapitalise}
      data={data}
    />
  );
};

export default YoutubeViews;
