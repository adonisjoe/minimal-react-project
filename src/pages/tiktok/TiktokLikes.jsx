import React from 'react';
import FormInfo from '../../components/FormInfo';

const TiktokLikes = ({
  data,
  onCapitalise,
  tiktokVideoLikes,
  tiktokFollowers,
}) => {
  return (
    <FormInfo
      title={tiktokVideoLikes?.name}
      tiktokVideoLikes={tiktokVideoLikes}
      tiktokFollowers={tiktokFollowers}
      onCapitalise={onCapitalise}
      data={data}
    />
  );
};

export default TiktokLikes;
