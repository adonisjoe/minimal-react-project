import React from 'react';
import FormInfo from '../../components/FormInfo';

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
    <FormInfo
      title={youtubeVideoLikes?.name}
      tiktokVideoLikes={youtubeVideoLikes}
      tiktokFollowers={onFetchData}
      onCapitalise={onCapitalise}
      data={data}
    />
  );
};

export default YoutubeLikes;
