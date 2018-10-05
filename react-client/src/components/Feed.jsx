import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './NavigationBar.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FeedList from './FeedList.jsx';
import SearchBar from './SearchBar.jsx';

const Feed = ({ lessonIds }) => {
  console.log('FEED RESULTS', lessonIds);
  return (
    <div>
      <h1>Feed</h1>
      <SearchBar />
      {/* <Navigation/> */}
      <FeedList />
    </div>
  );
};

export default Feed;
