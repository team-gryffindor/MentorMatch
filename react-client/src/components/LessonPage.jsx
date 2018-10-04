import React from 'react';
import Header from './Header';

const LessonPage = ({ lesson }) => (
  <div>
    <Header />
    <h2>{lesson.title}</h2>
    <h3>{lesson.userName}</h3>
    <p>{lesson.description}</p>
  </div>
);

export default LessonPage;
