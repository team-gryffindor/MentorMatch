import React from 'react';
// import Header from './Header.jsx';
import { Query } from 'react-apollo';
import { GET_USER } from '../apollo/resolvers/clientSideQueries';
import { GET_USER_INFO } from '../apollo/resolvers/clientSideQueries.js';
import UserProfileInfo from './UserProfileInfo.jsx';
import UserLessonList from './UserLessonList.jsx';
import NavProfile from './NavProfile.jsx';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'upcomingLessons'
    };
    this.handleProfileViewChange = this.handleProfileViewChange.bind(this)
  }

  handleProfileViewChange(view) {
    this.setState({
      view 
    })
  }

  render() {
    const {view} = this.state;

    return (
      <div className="container">
        <Query query={GET_USER_INFO} className="container">
          {({ loading, error, data }) => {
            if (error) return <h1>Error...</h1>;
            if (loading || !data) return <h1>Loading...</h1>;
            let user = data.userInfo;
            console.log(data);
            return (
              <div>
                <NavProfile handleProfileViewChange={this.handleProfileViewChange}></NavProfile>
                <h1>Profile Page</h1>
                <UserProfileInfo user={user} />
                {view === "offered" ? <div><h3>Offered</h3><UserLessonList userId={user.userId} lessonType="offeredLessons"/></div> : null}
                {view === "upcomingLessons" ? <div><h3>Upcoming Lessons</h3><UserLessonList userId={user.userId} lessonType="signupLessons" upcoming={true}/></div> : null}
                {view === "takenLessons" ? <div><h3>Taken Lessons </h3><UserLessonList userId={user.userId} lessonType="signupLessons" upcoming={false} /></div> : null}
                {view === "favoriteLessons" ? <div><h3>Favorite Lessons </h3><UserLessonList userId={user.userId} lessonType="favoriteLessons" /></div> : null}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default ProfilePage;
