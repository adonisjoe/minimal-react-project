import React from 'react';
import FormInfo from '../../components/FormInfo';
import Page from '../../components/Page';
import Nav from '../../components/Nav';

const InstagramFollowerPage = ({ title, instagramFollowers, onCapitalise }) => {
  const res = instagramFollowers?.name?.indexOf('I');
  const words = instagramFollowers?.name?.slice(res, -1);

  return (
    <div>
      <Page
        title={instagramFollowers?.name}
        PageComponent={FormInfo}
        Nav={Nav}
        onCapitalise={onCapitalise}
      />
    </div>
  );
};

export default InstagramFollowerPage;
