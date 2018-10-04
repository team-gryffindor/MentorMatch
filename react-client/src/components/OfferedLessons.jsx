import React from 'react';
import Header from './Header.jsx';
import LessonList from './LessonList.jsx';

const OfferedServices = (props) => (
  <div>
    <Header />
    <h1>Offered Lessons</h1>
    <LessonList style="horizontal" />
  </div>
);
export default OfferedServices;
