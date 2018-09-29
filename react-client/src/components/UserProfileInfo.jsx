import React from 'react';
  const UserProfileInfo = (props) => (
    <div>
      <img src={props.user.avatar}/>
      <h1>{props.user.username}</h1>
      <p>Location: {props.user.location}</p>
      <p>{props.user.userDescription}</p>
    </div>
  );
export default UserProfileInfo;