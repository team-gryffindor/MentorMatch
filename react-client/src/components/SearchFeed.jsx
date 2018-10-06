import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBarMain from './NavBarMain.jsx';
import LessonList from './LessonList.jsx';

const SearchFeed = (props) => (
  <div>
    <NavBarMain />
    <h1>Search Results</h1>
    <LessonList style="vertical" />
  </div>
);

export default SearchFeed;
