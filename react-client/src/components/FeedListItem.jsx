import React from 'react';
import { graphql } from 'react-apollo';
import { GET_LESSON } from '../apollo/resolvers/backendQueries.js';

let lessonId;

class FeedListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  displayLessonInfo() {
    lessonId = this.props.lessonId;
    var data = this.props.data;
    if (data.loading) {
      return;
      // return <div> Loading lesson ...</div>;
    } else {
      return (
        <div>
          <p>title: {data.lesson.title}</p>
          <p>description: {data.lesson.description}</p>
          <p>cityOfService: {data.lesson.cityOfService}</p>
          <p>category: {data.lesson.category}</p>
          <p>difficulty: {data.lesson.difficulty}</p>
          <p>avgRating: {data.lesson.avgRating}</p>
          <p>WTF</p>
          <p>numOfReviews: {data.lesson.numOfReviews}</p> <br />
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
    // console.log('LESSONID IN FEEDLISTITEM', props.lessonId);
    return { variables: { id: props.lessonId } };
  }
})(FeedListItem);
