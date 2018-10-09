import React from 'react';
import StarRatings from 'react-star-ratings';
// import userImage from '../Default.png';

// TODO: include user info for each review
// name, cityOfResidence
const ReviewListItem = ({ review }) => {
  console.log('REVIEW', review.user);
  return (
    <div className="list-group-item flex-column align-items-start">
      <img
        src={review.user.image}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '../Default.png';
        }}
        alt={'reviewer image'}
        width={100}
        height={100}
      />
      <div>{review.user.name}</div>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{review.title}</h5>
        <small className="text-muted review-margin-left">
          <StarRatings
            rating={Number(review.rating.toFixed(2))}
            starRatedColor="blue"
            numberOfStars={5}
            starDimension="15px"
            starSpacing="1px"
            name="rating"
          />
        </small>
      </div>
      <p className="mb-1">{review.comment}</p>
    </div>
  );
};

export default ReviewListItem;
