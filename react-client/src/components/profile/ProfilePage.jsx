import React from 'react';
import { Query } from 'react-apollo';
import { GET_USER_INFO } from '../../apollo/resolvers/clientSideQueries.js';

import ProfileNav from './ProfileNav.jsx';
import UserProfileInfoBanner from './UserProfileInfoBanner.jsx';
import ProfileContent from './ProfileContent.jsx';

const ProfilePage = (props) => {
  return (
    <div className="container">
      <Query query={GET_USER_INFO}>
        {({ loading, error, data }) => {
          if (error) return <small>Error...</small>;
          if (loading || !data) return <small>Loading...</small>;
          let user = data.userInfo;
          return (
            <React.Fragment>
              <UserProfileInfoBanner user={user} />
              <div className="row">
                <ProfileNav />
                <div className="col-md-9">
                  <ProfileContent user={user} />
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
