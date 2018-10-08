import React from 'react';
import ReviewList from './ReviewList.jsx';

const LessonContent = ({ lesson }) => (
  <div>
    <h1>{lesson.title}</h1>
    <div>
      <label>description
        <p>{lesson.description}</p>
      </label>
    </div>
    <div>
      <label>Category: 
        <p>{lesson.category}</p>
      </label>
    </div>
    <div>
      <label>Location: 
        <p>{lesson.cityOfService}</p>
      </label>
    </div>
    <div>
      <label>Difficulty: 
        <p>{lesson.category}</p>
      </label>
    </div>
  </div>
);

export default LessonContent;
