import React from 'react';

const UserProfileInfoBanner = ({ user }) => (
  <div className="profile-info row">
    <div className="col-md-3">
      <img className="profile-image rounded border" src={user.image} />
    </div>
    <div className="col-md-9">
      <div className="row">
        <div className="col-md-2">Name:</div>
        <div className="col-md-10">{user.username}</div>
      </div>
      <div className="row">
        <div className="col-md-2">Location:</div>
        <div className="col-md-10">{user.cityOfResidence}</div>
      </div>
      <div className="row">
        <div className="col-md-2">About Me:</div>
        <div className="col-md-10">{user.description}</div>
      </div>
    </div>
  </div>
);

export default UserProfileInfoBanner;