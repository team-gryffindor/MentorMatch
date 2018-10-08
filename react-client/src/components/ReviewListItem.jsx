import React from 'react';

const ReviewListItem = ({ review }) => (
  <div>
    {console.log(review)}
    <h2>{review.title}</h2>
    <h4>{review.rating}</h4>
    <p>{review.comment}</p>
  </div>
);

export default ReviewListItem;
