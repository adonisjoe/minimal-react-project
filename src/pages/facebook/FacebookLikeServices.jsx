import React from 'react';
import FormInfo from '../../components/FormInfo';

const FacebookServices = ({
  onCapitalise,
  facebookPageLikes,
  facebookPostLikes,
}) => {
  return (
    <div>
      <FormInfo title={facebookPostLikes?.name} onCapitalise={onCapitalise} />
    </div>
  );
};

export default FacebookServices;
