import React from 'react';
import { Query } from 'react-apollo';
import { GET_LESSON } from '../../apollo/resolvers/backendQueries.js';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const LessonListItem = ({ lessonId }) => {
  return (
    <Query query={GET_LESSON} variables={{ id: lessonId }}>
      {({ loading, error, data }) => {
        if (error) return <p>Error! Could not retrieve the results.</p>;
        if (loading || !data) return null;

        let { lesson } = data;
        let spaces = 0;
        let displayedDescription;

        for (let i = 0; i < lesson.description.length; i++) {
          let letter = lesson.description[i];

          if (lesson.description.length <= 10) {
            displayedDescription = lesson.description;
            // console.log('LESSON LENGTH: ', lesson.description.length);
            break;
          } else if (letter === ' ') {
            spaces++;
          } else if (spaces === 10) {
            let shortDescription = lesson.description.slice(0, i);
            displayedDescription = shortDescription + '...';
          }
        }

        return (
          <div className="card">
            <div className="inside-top">
              <Link
                to={{
                  pathname: `/lessonContent/${lessonId}`,
                  state: { lesson }
                }}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <img
                  className="card-img-top"
                  src={lesson.image}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '../stock.jpg';
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{lesson.title}</h5>
                  <StarRatings
                    rating={Number(lesson.avgRating.toFixed(2))}
                    starRatedColor="blue"
                    numberOfStars={5}
                    starDimension="15px"
                    starSpacing="1px"
                    name="rating"
                  />
                  <small className="text-muted review-margin-left">
                    {lesson.numOfReviews} Reviews
                  </small>
                  <p className="card-text">{displayedDescription}</p>

                  <small className="text-muted">
                    {lesson.cityOfService}, {lesson.stateOfService}
                  </small>
                </div>
              </Link>
            </div>
          </div>
        );
      }}
    </Query>
  );
};
export default LessonListItem;
