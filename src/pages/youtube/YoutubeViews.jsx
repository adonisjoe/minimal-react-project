import React from 'react';
import FormInfo from '../../components/FormInfo';

const YoutubeViews = ({
  youtubeVideoLikes,
  youtubeViews,
  onFetchData,
  onCapitalise,
  data,
}) => {
  return (
    <FormInfo
      title={youtubeViews?.name}
      tiktokVideoLikes={youtubeVideoLikes}
      tiktokFollowers={onFetchData}
      onCapitalise={onCapitalise}
      data={data}
    />
  );
};

export default YoutubeViews;
