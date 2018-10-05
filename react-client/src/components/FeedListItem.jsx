import React from 'react';
import { graphql } from 'react-apollo';
import { GET_LESSON } from '../apollo/resolvers/backendQueries.js';

let lessonId;

class FeedListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  displayLessonInfo() {
    console.log('DATA IN LIST ITEM', this.props.data);
    lessonId = this.props.lessonId;
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
    return <div>LESSON {this.displayLessonInfo()}</div>;
  }
}

export default graphql(GET_LESSON, {
  options: (props) => {
    // console.log('LESSONID IN FEEDLISTITEM', props.lessonId);
    return { variables: { id: props.lessonId } };
  }
})(FeedListItem);
