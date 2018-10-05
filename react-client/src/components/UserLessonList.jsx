import React from 'react';
import Header from './Header.jsx';
import LessonListItem from './LessonListItem.jsx';
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
    return (
      <Query query={GET_USER_INFO}>
        {({ data }) => {
          return (
            <Query query={GET_USER} variables={{ id: data.mentorMatch.userId }}>
              {({ loading, error, data }) => {
                if (error) return <h1>error</h1>;
                if (loading) {
                  return <div> Loading test ...</div>;
                } else {
                  return (
                    <div className={this.props.style}>
                      {data.user[this.props.lessonType].map((lesson, i) => (
                        <LessonListItem lesson={lesson} key={i} />
                      ))}
                    </div>
                  );
                }
              }}
            </Query>
          );
        }}
      </Query>
    );
  }
}

export default UserLessonList;
