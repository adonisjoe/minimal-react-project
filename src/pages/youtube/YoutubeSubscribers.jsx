import React from 'react';
import FormInfo from '../../components/FormInfo';

const YoutubeSubscribers = ({
  youtubeViews,
  youtubeVideoLikes,
  youtubeSubscribers,
  onFetchData,
  onCapitalise,
  data,
}) => {
  return (
    <FormInfo
      title={youtubeSubscribers?.name}
      tiktokVideoLikes={youtubeVideoLikes}
      tiktokFollowers={onFetchData}
      onCapitalise={onCapitalise}
      data={data}
    />
  );
};

export default YoutubeSubscribers;
