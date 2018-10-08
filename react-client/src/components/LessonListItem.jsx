import React from 'react';
import { Query } from 'react-apollo';
import { GET_LESSON } from '../apollo/resolvers/backendQueries.js';
import { Link } from 'react-router-dom';

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
                  <small className="text-muted">{data.lesson.cityOfService}</small>
                </div>
                <p className="mb-1">{data.lesson.description}</p>
                <small className="text-muted">
                  {data.lesson.avgRating.toFixed(2)}
                  /5.0 of {data.lesson.numOfReviews} Reviews{' '}
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
