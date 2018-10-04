import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './NavigationBar.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LessonList from './LessonList.jsx';

const Feed = (props) => (
  <div>
    <h1>Feed</h1>
    {/* <Navigation/> */}
    <LessonList style="vertical" />
  </div>
);

export default Feed;
