import React from 'react';
import Header from './Header.jsx';
import ServicesVerticalDisplay from './ServicesVerticalDisplay.jsx';

const ActiveLessons = (props) => (
  <div>
    <Header/>
    <h1>Active Lessons</h1>
    <ServicesVerticalDisplay services={props.lessons}/>
  </div>
);
export default ActiveLessons;