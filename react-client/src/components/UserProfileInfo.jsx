import React from 'react';
import Navigation from './NavigationBar.jsx';

  const UserProfileInfo = (props) => (
    <div>
      <h1>Mentor Match</h1>
      <Navigation/>
      <img src={props.user.avatar}/>
      <h1>{props.user.username}</h1>
      <p>Location: {props.user.location}</p>
      <p>{props.user.userDescription}</p>
    </div>
  );
export default UserProfileInfo;