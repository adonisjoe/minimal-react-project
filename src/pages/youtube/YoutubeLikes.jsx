import React from 'react';
import FormInfo from '../../components/FormInfo';
import Page from '../../components/Page';
import Nav from '../../components/Nav';

const YoutubeLikes = ({
  title,
  youtubeSubscribers,
  youtubeViews,
  youtubeVideoLikes,
  onFetchData,
  onCapitalise,
  data,
}) => {
  return (
    <Page
      title={youtubeVideoLikes?.name}
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

export default YoutubeLikes;
