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
              {/* <div class="container">
                <div class="fb-profile">
                  <img
                    align="left"
                    class="fb-image-lg"
                    src="http://lorempixel.com/850/280/nightlife/5/"
                    alt="Profile image example"
                  />
                  <img
                    align="left"
                    class="fb-image-profile thumbnail"
                    src="http://lorempixel.com/180/180/people/9/"
                    alt="Profile image example"
                  />
                  <div class="fb-profile-text">
                    <h1>Eli Macy</h1>
                    <p>Girls just wanna go fun.</p>
                  </div>
                </div>
              </div> */}
              <div className="jumbotron jumbotron-fluid profile-banner">
                <div class="container">
                  <div className="d-flex justify-content-between">
                    <h1>Hello {user.username}</h1>
                    <Link to={{ pathname: '/editProfile', state: { user } }}>
                      <button className="btn btn-primary my-2 my-sm-0">Edit Profile</button>
                    </Link>
                  </div>
                </div>

                <div className="profile-header">
                  <UserProfileInfoBanner user={user} />
                </div>
              </div>
              {/* <hr /> */}
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
