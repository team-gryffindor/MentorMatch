import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_USER_INFO } from '../../apollo/resolvers/clientSideQueries.js';

import ProfileNav from './ProfileNav.jsx';
import UserProfileInfoBanner from './UserProfileInfoBanner.jsx';
import ProfileContent from './ProfileContent.jsx';

const ProfilePage = (props) => {
  return (
    <div>
      <Query query={GET_USER_INFO}>
        {({ loading, error, data }) => {
          if (error) return <small>Error...</small>;
          if (loading || !data) return <small>Loading...</small>;
          let user = data.userInfo;
          return (
            <React.Fragment>
              <div className="container profile-header">
                <div className="d-flex justify-content-between">
                  <h1>Hello {user.username}</h1>
                  <Link to={{ pathname: '/editProfile', state: { user } }}>
                    <button className="btn btn-primary my-2 my-sm-0">Edit Profile</button>
                  </Link>
                </div>
                <UserProfileInfoBanner user={user} />
              </div>
              <hr />
              <div className="container">
                <div className="row">
                  <ProfileNav />
                  <div className="tab-content col-md-9" id="v-pills-tabContent">
                    <ProfileContent user={user} />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Query>
    </div>
  );
};

export default ProfilePage;
