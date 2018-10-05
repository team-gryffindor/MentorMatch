import React from 'react';
import { graphql } from 'react-apollo';
import { GET_LESSON } from '../apollo/resolvers/backendQueries.js';

class FeedListItem extends React.Component {
  displayLessonInfo() {
    console.log(this.props.data);
    var data = this.props.data;
    if (data.loading) {
      return <div> Loading lesson ...</div>;
    } else {
      console.log('SDJFHBSJKDFSD ', this.props.data);
      return (
        <div>
          title: {data.lesson.title}
          description: {data.lesson.description}
          cityOfService: {data.lesson.cityOfService}
          category: {data.lesson.category}
          difficulty: {data.lesson.difficulty}
          avgRating: {data.lesson.avgRating}
          numOfReviews: {data.lesson.numOfReviews}
        </div>
      );
    }
  }
  render() {
    return <div>{this.displayLessonInfo()}</div>;
  }
}

export default graphql(GET_LESSON, {
  options: (props) => {
    return { variables: { id: props.lessonId } };
  }
})(FeedListItem);
