import React from 'react';
import { Query } from 'react-apollo';
import { GET_LESSON } from '../apollo/resolvers/backendQueries.js';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { extractCityState } from '../util/addressHelper.js';

class LessonListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
      <Query query={GET_LESSON} variables={{ id: this.props.lessonId }}>
        {({ loading, error, data }) => {
          if (error) return <p>Error! Could not retrieve the results.</p>;
          if (loading || !data) return <p>Loading Results...</p>;
          let { city, state } = extractCityState(data.lesson.location.addressComponents);
          return (
            <Link
              to={{
                pathname: `/lessonContent/${this.props.lessonId}`,
                state: { lesson: data.lesson }
              }}
            >
              <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{data.lesson.title}</h5>
                  <small className="text-muted">
                    {city}, {state}
                  </small>
                </div>
                <p className="mb-1">{data.lesson.description}</p>
                <StarRatings
                  rating={Number(data.lesson.avgRating.toFixed(2))}
                  starRatedColor="blue"
                  numberOfStars={5}
                  starDimension="15px"
                  starSpacing="1px"
                  name="rating"
                />
                <small className="text-muted review-margin-left">
                  {data.lesson.numOfReviews} Reviews
                </small>
              </div>
            </Link>
          );
        }}
      </Query>
    );
  }
}

export default LessonListItem;
