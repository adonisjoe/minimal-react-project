import React from 'react';
import FormInfo from '../../components/FormInfo';

const InstagramLikePage = ({
  title,
  instagramPostLikes,
  instagramFollowers,
  onCapitalise,
}) => {
  return (
    <div>
      {' '}
      <FormInfo
        title={instagramPostLikes?.name}
        instagramPostLikes={instagramPostLikes}
        instagramFollowers={instagramFollowers}
        onCapitalise={onCapitalise}
      />
    </div>
  );
};

export default InstagramLikePage;
