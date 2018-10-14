import React from 'react';

const UserProfileInfoBanner = ({ user }) => (
  <div>
    <img src={user.image} className="profile-image" />
    <h2>Hello {user.username}</h2>
    <h2>{user.cityOfResidence}</h2>
    <p style={{ fontSize: '30px', textAlign: 'left' }}>{user.description}</p>
  </div>
);

export default UserProfileInfoBanner;
