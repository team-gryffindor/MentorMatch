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
      return <div> Loading ...</div>;
    } else {
      return (
        <ul className={`list-group ${this.props.style}`}>
          {lessons.lessons.map((lesson, i) => (
            <LessonListItem lesson={lesson} key={i} />
          ))}
          {console.log(lessons)}
        </ul>
      );
    }
  }

  render() {
    return <div>{this.displayList()}</div>;
  }
}

export default graphql(GET_LESSONS)(LessonList);
