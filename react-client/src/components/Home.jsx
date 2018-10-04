import React from 'react';
import ServiceDisplay from './ServicesHorizontalDisplay.jsx';
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
    <ServiceDisplay services={props.todaysServices} />
  </div>
);

export default Home;
