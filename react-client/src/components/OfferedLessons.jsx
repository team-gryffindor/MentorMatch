import React from 'react';
import Header from './Header.jsx';
import ServicesVerticalDisplay from './ServicesVerticalDisplay.jsx';

const OfferedServices = (props) => (
  <div>
    <Header/>
    <h1>Offered Lessons</h1>
    <ServicesVerticalDisplay services={props.lessons}/>
  </div>
);
export default OfferedServices;