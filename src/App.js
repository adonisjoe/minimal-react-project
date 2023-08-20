import './App.css';
// import Home from './pages/Home';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Tiktok from './pages/tiktok/Tiktok';
import Facebook from './pages/facebook/Facebook';
import Youtube from './pages/youtube/Youtube';
import Home from './pages/Home';
import Instagram from './pages/instagram/Instagram';
import InstagramLikePage from './pages/instagram/InstagramLikePage';
import InstagramLayout from './components/InstagramLayout';
import InstagramFollowerPage from './pages/instagram/InstagramFollowerPage';

function App() {
  const [data, setData] = useState([]);
  const [toggleMenu, setToggleMenu] = useState(false);

  const [
    facebookPostLikes,
    facebookPageLikes,
    instagramPostLikes,
    instagramFollowers,
    youtubeSubscribers,
    youtubeViews,
    tiktokVideoLikes,
    tiktokFollowers,
  ] = data;

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api.sheety.co/06def408e74850aef0fbd22a79539f9f/ldServices/services'
      ); // Replace with your API endpoint
      const jsonData = await response.json();
      setData(jsonData.services);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  function capitalizeWords(str) {
    // Split the input string into an array of words
    const words = str?.split?.(' ');

    // Capitalize the first letter of each word
    const capitalizedWords = words?.map?.((word) => {
      if (word.length === 0) {
        return word; // Skip empty words
      }
      const capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase();
      return capitalized;
    });

    // Join the capitalized words back into a single string
    const result = capitalizedWords?.join(' ');

    return result;
  }

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/facebook'
        element={
          <Facebook
            facebookPostLikes={facebookPostLikes}
            facebookPageLikes={facebookPageLikes}
          />
        }
      />
      <Route
        path='/tiktok'
        element={
          <Tiktok
            tiktokVideoLikes={tiktokVideoLikes}
            tiktokFollowers={tiktokFollowers}
          />
        }
      />
      <Route
        path='/youtube'
        element={
          <Youtube
            youtubeSubscribers={youtubeSubscribers}
            youtubeViews={youtubeViews}
          />
        }
      />
      <Route
        path='instagram'
        element={
          <InstagramLayout
            toggleMenu={toggleMenu}
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
              toggleMenu={toggleMenu}
              onToggleMenu={setToggleMenu}
              onCapitalise={capitalizeWords}
            />
          }
        />
        <Route
          path='likes'
          element={
            <InstagramLikePage
              title
              instagramPostLikes={instagramPostLikes}
              onCapitalise={capitalizeWords}
            />
          }
        />
        <Route
          path='followers'
          element={
            <InstagramFollowerPage
              title
              instagramFollowers={instagramFollowers}
              onCapitalise={capitalizeWords}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
