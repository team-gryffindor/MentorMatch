import React from 'react';
import Navigation from './NavigationBar.jsx';
import ServicesVerticalDisplay from './ServicesVerticalDisplay.jsx';

const PastLessons = (props) => (
  <div>
    <h1>Mentor Match</h1>
    <Navigation/>
    <h1>Past Lessons</h1>
    <ServicesVerticalDisplay services={props.lessons}/>
  </div>
);
export default PastLessons;