import React from 'react';
import FormInfo from '../../components/FormInfo';
import Nav from '../../components/Nav';
import Page from '../../components/Page';

const YoutubeSubscribers = ({
  youtubeViews,
  youtubeVideoLikes,
  youtubeSubscribers,
  onFetchData,
  onCapitalise,
  data,
}) => {
  console.log(youtubeSubscribers);
  return (
    <>
      <Page
        title={youtubeSubscribers?.name}
        PageComponent={FormInfo}
        Nav={Nav}
        youtubeViews={youtubeViews}
        youtubeVideoLikes={youtubeVideoLikes}
        youtubeSubscribers={youtubeSubscribers}
        onFetchData={onFetchData}
        onCapitalise={onCapitalise}
        data={data}
      />
    </>
  );
};

export default YoutubeSubscribers;
