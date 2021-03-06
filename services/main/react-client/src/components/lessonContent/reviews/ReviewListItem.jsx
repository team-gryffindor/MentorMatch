import React from 'react';
import StarRatings from 'react-star-ratings';

// TODO: include user info for each review
// name, locationOfResidence
const ReviewListItem = ({ review }) => {
  return (
    <div className="list-group-item flex-column align-items-start">
      <div className="d-flex w-100 justify-content-start">
        <img
          className="reviewer-image border"
          src={review.user.image}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '../Default.png';
          }}
          alt={'reviewer image'}
        />
        <div className="d-flex w-100 justify-content-between">
          <div>
            {review.user.name}
            <br />
            <small>
              {review.user.cityOfResidence}, {review.user.stateOfResidence}
            </small>
          </div>
          <StarRatings
            rating={Number(review.rating.toFixed(2))}
            starRatedColor="#0078E0"
            numberOfStars={5}
            starDimension="15px"
            starSpacing="1px"
            name="rating"
          />
        </div>
      </div>
      <h5 className="mb-1">{review.title}</h5>
      <p className="mb-1">{review.comment}</p>
    </div>
  );
};

export default ReviewListItem;
