import React from 'react';
import Header from './Header.jsx';
import LessonListItem from './LessonListItem.jsx';
import { graphql, Query } from 'react-apollo';
import { GET_LESSONS } from '../apollo/resolvers/backendQueries.js';
import { database } from 'firebase';

class LessonList extends React.Component {
  constructor(props) {
    super(props);
  }

  displayList() {
    let lessons = this.props.data;
    if (lessons.loading) {
      return <div> Loading test ...</div>;
    } else {
      return (
        <div className={this.props.style}>
          {lessons.lessons.map((lesson, i) => (
            <LessonListItem lesson={lesson} key={i} />
          ))}
          {console.log(lessons)}
        </div>
      );
    }
  }

  render() {
    return <div>{this.displayList()}</div>;
  }
}

export default graphql(GET_LESSONS)(LessonList);
