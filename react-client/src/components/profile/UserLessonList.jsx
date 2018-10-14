import React from 'react';
import UserLessonListItem from './UserLessonListItem.jsx';
import { Query } from 'react-apollo';
import { GET_USER } from '../../apollo/resolvers/backendQueries.js';

// pass in favoriteLessons, offeredLessons, signupLessons as props
const UserLessonList = (props) => {
  let { userId, lessonType, upcoming, style } = props;
  // figure out date filter
  return (
    <Query query={GET_USER} variables={{ id: String(userId) }}>
      {({ loading, error, data }) => {
        if (error) return <small>error</small>;
        if (loading) {
          return <small> Loading lessons ...</small>;
        } else {
          let lessons = data.user[lessonType];
          if (lessonType === 'signupLessons') {
            if (upcoming) {
              return (
                <div className={`${style} list-group`}>
                  {lessons.filter((lesson) => lesson.date > Date.now()).map((lesson, i) => (
                    <UserLessonListItem lesson={lesson} key={i} />
                  ))}
                </div>
              );
            } else {
              return (
                <div className={`${style} list-group`}>
                  {lessons.filter((lesson) => lesson.date < Date.now()).map((lesson, i) => (
                    <UserLessonListItem lesson={lesson} key={i} />
                  ))}
                </div>
              );
            }
          }
          return (
            <div className={`${style} list-group`}>
              {lessons.filter((lesson) => lesson.isActive).map((lesson, i) => (
                <UserLessonListItem lesson={lesson} key={i} />
              ))}
            </div>
          );
        }
      }}
    </Query>
  );
};

export default UserLessonList;
