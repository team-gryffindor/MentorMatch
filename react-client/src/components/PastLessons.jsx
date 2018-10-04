import React from 'react';
import Header from './Header.jsx';
import LessonList from './LessonList.jsx';

const PastLessons = (props) => (
  <div>
    <Header />
    <h1>Past Lessons</h1>
    <LessonList style="horizontal" />
  </div>
);
export default PastLessons;
