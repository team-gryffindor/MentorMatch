import React from 'react';
import { Link } from 'react-router-dom';

const ProfileOverview = ({ user }) => {
  return (
    <Link to={{ pathname: '/editProfile', state: { user } }}>
      <button className="btn btn-primary my-2 my-sm-0">Edit Profile</button>
    </Link>
  );
};

export default ProfileOverview;
