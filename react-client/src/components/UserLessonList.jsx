import React from 'react';
import Header from './Header.jsx';
import UserLessonListItem from './UserLessonListItem.jsx';
import { graphql, Query } from 'react-apollo';
import { GET_USER_INFO } from '../apollo/resolvers/clientSideQueries.js';
import { GET_USER } from '../apollo/resolvers/backendQueries.js';
import { database } from 'firebase';

// pass in favoriteLessons, offeredLessons, signupLessons as props
class UserLessonList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // figure out date filter
    return (
      <Query query={GET_USER} variables={{ id: String(this.props.userId) }} pollInterval={5000}>
        {({ loading, error, data }) => {
          if (error) return <h1>error</h1>;
          if (loading) {
            return <div> Loading lessons ...</div>;
          } else {
            let lessons = data.user[this.props.lessonType];
            if (this.props.lessonType === 'signupLessons') {
              if (this.props.upcoming) {
                return (
                  <div className={`${this.props.style} list-group`}>
                    {lessons.filter((lesson) => lesson.date > Date.now()).map((lesson, i) => (
                      <UserLessonListItem lesson={lesson} key={i} />
                    ))}
                  </div>
                );
              } else {
                return (
                  <div className={`${this.props.style} list-group`}>
                    {lessons.filter((lesson) => lesson.date < Date.now()).map((lesson, i) => (
                      <UserLessonListItem lesson={lesson} key={i} />
                    ))}
                  </div>
                );
              }
            }
            return (
              <div className={`${this.props.style} list-group`}>
                {lessons.filter((lesson) => lesson.isActive).map((lesson, i) => (
                  <UserLessonListItem lesson={lesson} key={i} />
                ))}
              </div>
            );
          }
        }}
      </Query>
    );
  }
}

export default UserLessonList;
