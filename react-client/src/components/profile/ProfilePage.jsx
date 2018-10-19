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
          if (loading || !data) return null;
          let user = data.userInfo;
          return (
            <React.Fragment>
              <div className="row">
                <div className="twPc-div">
                  <a className="twPc-bg twPc-block" />

                  <div>
                    <img
                      alt="profile image"
                      src={user.image}
                      className="twPc-avatarImg twPc-avatarLink"
                    />

                    <div className="twPc-divUser">
                      <div className="twPc-divName">
                        <div className="d-flex justify-content-between">
                          <h2>{user.username}</h2>
                          <Link to={{ pathname: '/editProfile', state: { user } }}>
                            <button className="btn btn-primary my-2 my-sm-0">Edit Profile</button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="twPc-divStats">
                      <div className="profile-answer">
                        {user.cityOfResidence}, {user.stateOfResidence}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="profile-field">About Me:</div>
                  {/* <div className="profile-answer">{user.description}</div> */}
                  <div className="profile-answer">{user.description}</div>
                </div>
                <div className="container">
                  <div className="row">
                    <ProfileNav />
                    <div className="tab-content col-md-9" id="v-pills-tabContent">
                      <ProfileContent user={user} />
                    </div>
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
