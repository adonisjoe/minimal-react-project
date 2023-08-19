import React from 'react';
import FormInfo from '../../components/FormInfo';

const TiktokFollowers = ({
  tiktokVideoLikes,
  tiktokFollowers,
  onCapitalise,
  data,
}) => {
  return (
    <FormInfo
      title={tiktokFollowers?.name}
      tiktokVideoLikes={tiktokVideoLikes}
      tiktokFollowers={tiktokFollowers}
      onCapitalise={onCapitalise}
      data={data}
    />
  );
};

export default TiktokFollowers;
