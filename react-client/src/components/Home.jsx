import React from 'react';
import LessonList from './LessonList.jsx';
import Search from './Search.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Test from './Test.jsx';

const Home = (props) => (
  <div>
    <h1>Mentor Match</h1>
    <Test />
    <ol>
      <button>
        <Link to="/login">Login</Link>
      </button>
    </ol>
    <Search query={props.query} />
    <h1>Today's Top Services</h1>
    <LessonList services={props.todaysServices} />
  </div>
);

export default Home;
