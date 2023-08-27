import './App.css';
// import Home from './pages/Home';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Tiktok from './pages/tiktok/Tiktok';
import Facebook from './pages/facebook/Facebook';
import Youtube from './pages/youtube/Youtube';
import Home from './pages/Home';
import Instagram from './pages/instagram/Instagram';
import InstagramLikePage from './pages/instagram/InstagramLikePage';
import InstagramLayout from './components/InstagramLayout';
import InstagramFollowerPage from './pages/instagram/InstagramFollowerPage';
import FacebookLayout from './components/FacebookLayout';
import FacebookLikeServices from './pages/facebook/FacebookLikeServices';
import FacebookPostServices from './pages/facebook/FacebookPostServices';
import YoutubeLayout from './components/YoutubeLayout';
import YoutubeLikes from './pages/youtube/YoutubeLikes';
import YoutubeViews from './pages/youtube/YoutubeViews';
import YoutubeSubscribers from './pages/youtube/YoutubeSubscribers';
import TiktokLayout from './components/TiktokLayout';
import TiktokLikes from './pages/tiktok/TiktokLikes';
import TiktokFollowers from './pages/tiktok/TiktokFollowers';
import HomeLayout from './HomeLayout';

function App() {
  const [data, setData] = useState([]);

  const [
    facebookPostLikes,
    facebookPageLikes,
    instagramPostLikes,
    instagramFollowers,
    youtubeSubscribers,
    youtubeViews,
    youtubeVideoLikes,
    tiktokVideoLikes,
    tiktokFollowers,
  ] = data;

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData(
      'https://api.sheety.co/06def408e74850aef0fbd22a79539f9f/ldServices/services'
    );
  }, []);

  const fetchData = (data) => {
    fetch(data) // Replace with your API endpoint
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData?.services);
      })
      .catch((error) => `Error fetching data:, ${error}`);
  };

  function capitalizeWords(str) {
    // Split the input string into an array of words
    const words = str?.split?.(' ');

    // Capitalize the first letter of each word
    const capitalizedWords = words?.map?.((word) => {
      if (word?.length === 0) {
        return word; // Skip empty words
      }
      const capitalized =
        word[0]?.toUpperCase() + word?.slice?.(1).toLowerCase();
      return capitalized;
    });

    // Join the capitalized words back into a single string
    const result = capitalizedWords?.join(' ');

    return result;
  }

  return (
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path='facebook' element={<FacebookLayout />}>
          <Route
            index
            element={
              <Facebook
                facebookPostLikes={facebookPostLikes}
                facebookPageLikes={facebookPageLikes}
                onCapitalise={capitalizeWords}
              />
            }
          />
          <Route
            path='post-services'
            element={
              <FacebookLikeServices
                onCapitalise={capitalizeWords}
                facebookPageLikes={facebookPageLikes}
                facebookPostLikes={facebookPostLikes}
              />
            }
          />
          <Route
            path='page-services'
            element={
              <FacebookPostServices
                onCapitalise={capitalizeWords}
                facebookPageLikes={facebookPageLikes}
                facebookPostLikes={facebookPostLikes}
              />
            }
          />
        </Route>

        <Route path='tiktok' element={<TiktokLayout />}>
          <Route
            index
            element={
              <Tiktok
                data={data}
                onCapitalise={capitalizeWords}
                tiktokVideoLikes={tiktokVideoLikes}
                tiktokFollowers={tiktokFollowers}
              />
            }
          />
          <Route
            path='video-likes'
            element={
              <TiktokLikes
                data={data}
                onCapitalise={capitalizeWords}
                tiktokVideoLikes={tiktokVideoLikes}
                tiktokFollowers={tiktokFollowers}
              />
            }
          />
          <Route
            path='followers'
            element={
              <TiktokFollowers
                data={data}
                onCapitalise={capitalizeWords}
                tiktokFollowers={tiktokFollowers}
                tiktokVideoLikes={tiktokVideoLikes}
              />
            }
          />
        </Route>
        <Route path='youtube' element={<YoutubeLayout />}>
          <Route
            index
            element={
              <Youtube
                youtubeSubscribers={youtubeSubscribers}
                youtubeViews={youtubeViews}
                onFetchData={fetchData}
                onCapitalise={capitalizeWords}
              />
            }
          />
          <Route
            path='youtube-likes'
            element={
              <YoutubeLikes
                youtubeSubscribers={youtubeSubscribers}
                youtubeVideoLikes={youtubeVideoLikes}
                youtubeViews={youtubeViews}
                onFetchData={fetchData}
                onCapitalise={capitalizeWords}
              />
            }
          />
          <Route
            path='youtube-views'
            element={
              <YoutubeViews
                youtubeSubscribers={youtubeSubscribers}
                youtubeViews={youtubeViews}
                onFetchData={fetchData}
                onCapitalise={capitalizeWords}
              />
            }
          />
          <Route
            path='youtube-subscribers'
            element={
              <YoutubeSubscribers
                youtubeSubscribers={youtubeSubscribers}
                youtubeViews={youtubeViews}
                onFetchData={fetchData}
                onCapitalise={capitalizeWords}
              />
            }
          />
        </Route>
        <Route
          path='instagram'
          element={
            <InstagramLayout
              onCapitalise={capitalizeWords}
              instagramPostLikes={instagramPostLikes}
              instagramFollowers={instagramFollowers}
            />
          }
        >
          <Route
            index
            element={
              <Instagram
                instagramPostLikes={instagramPostLikes}
                instagramFollowers={instagramFollowers}
                onCapitalise={capitalizeWords}
              />
            }
          />
          <Route
            path='likes'
            element={
              <InstagramLikePage
                instagramPostLikes={instagramPostLikes}
                onCapitalise={capitalizeWords}
              />
            }
          />
          <Route
            path='followers'
            element={
              <InstagramFollowerPage
                instagramFollowers={instagramFollowers}
                onCapitalise={capitalizeWords}
              />
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
