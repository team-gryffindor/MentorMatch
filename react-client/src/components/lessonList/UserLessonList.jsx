import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { GET_USER, DELETE_LESSON } from '../../apollo/resolvers/backendQueries.js';

import UserLessonListItem from './UserLessonListItem.jsx';

// pass in favoriteLessons, offeredLessons, signupLessons as props
const UserLessonList = ({ userId, lessonType, upcoming, style }) => {
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
                    <UserLessonListItem lesson={lesson} key={i} taken={true} userId={userId} />
                  ))}
                </div>
              );
            }
          }
          return (
            <div className={`${style} list-group`}>
              {lessons.filter((lesson) => lesson.isActive).map((lesson, i) => (
                <div>
                  <UserLessonListItem lesson={lesson} key={i} />
                  <Mutation
                    mutation={DELETE_LESSON}
                    refetchQueries={[{ query: GET_USER, variables: { id: userId } }]}
                  >
                    {(deleteLesson) => (
                      <button
                        onClick={() => {
                          deleteLesson({
                            variables: { id: lesson.id }
                          })
                            .then((data) => data)
                            .catch((err) => console.error(err));
                        }}
                      >
                        Delete Lesson
                      </button>
                    )}
                  </Mutation>
                </div>
              ))}
            </div>
          );
        }
      }}
    </Query>
  );
};

export default UserLessonList;
