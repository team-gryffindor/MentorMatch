import React from 'react';

const LessonContent = ({ lesson }) => (
  <div>
    <h2>{lesson.title}</h2>
    <h4>{lesson.provider.name}</h4>
    <p>{lesson.description}</p>
    <span>
      rating: {lesson.avgRating} <br /> {lesson.numOfReviews} reviews
    </span>
  </div>
);

export default LessonContent;
