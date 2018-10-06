import React from 'react';
import ReviewList from './ReviewList.jsx';

const LessonContent = ({ lesson }) => (
  <div>
    <h2>{lesson.title}</h2>
    <h4>{lesson.provider.name}</h4>
    <p>{lesson.description}</p>
    <span>
      rating: {lesson.avgRating} <br /> {lesson.numOfReviews} reviews
    </span>
    <ReviewList reviews={lesson.reviews} />
  </div>
);

export default LessonContent;
