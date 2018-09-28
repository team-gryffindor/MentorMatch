import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 

const Navigation = () => (
  <div>
    <ul>
      <li><a><Link to='/'>My Services</Link></a></li>
      <li><a><Link to='/'>Past Services</Link></a></li>
      <li><a><Link to='/'>My Upcoming Services</Link></a></li>
    </ul>
  </div>
);

export default Navigation;