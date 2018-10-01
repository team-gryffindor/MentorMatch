import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 


const Navigation = () => (
  <div>
    <ul>
      <li><a><Link to="/active">My Lessons</Link></a></li>
      <li><a><Link to="/past">Past Lessons</Link></a></li>
      <li><a><Link to="/offered">My Offered Lessons</Link></a></li>
      <li><a><Link to="/userProfile">My Profile</Link></a></li>
      <li><a><Link to="/addService">Create a new service</Link></a></li>
    </ul>
  </div>
);

export default Navigation;