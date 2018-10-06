import React from 'react';
// import Header from './Header.jsx';
import { Query } from 'react-apollo';
import { GET_USER } from '../apollo/resolvers/clientSideQueries';
import { GET_USER_INFO } from '../apollo/resolvers/clientSideQueries.js';
import UserProfileInfo from './UserProfileInfo.jsx';
import UserLessonList from './UserLessonList.jsx';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Query query={GET_USER_INFO}>
        {({ loading, error, data }) => {
          if (error) return <h1>Error...</h1>;
          if (loading || !data) return <h1>Loading...</h1>;
          let user = data.mentorMatch;
          return (
            <div>
              <h1>Profile Page</h1>
              <UserProfileInfo user={user} />
              <h3>Offered </h3>
              <UserLessonList userId={user.userId} lessonType="offeredLessons" />
              <h3>Upcoming Lessons </h3>
              <UserLessonList userId={user.userId} lessonType="signupLessons" upcoming={true} />
              <h3>Taken Lessons </h3>
              <UserLessonList userId={user.userId} lessonType="signupLessons" upcoming={false} />
              <h3>Favorite Lessons </h3>
              <UserLessonList userId={user.userId} lessonType="favoriteLessons" />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ProfilePage;
