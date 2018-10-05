import React from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 


const Navigation = (props) => {
  let isLoggedIn = <li><a><button onClick={() => {firebase.auth().signOut().then(() => props.handleUserLoggingIn())}}>
    <Link to='/'>Logout!</Link></button></a></li>;
  let isLoggedOut = <li><a><button><Link to="/login">Login</Link></button></a></li>

  if (props.isLoggedIn) {
    return ( 
    <div>
      <ul>
        {isLoggedIn}
      </ul>
    </div>)
  } else {
    return (
    <div>
      <ul>
       {isLoggedOut}
      </ul>
    </div>
    )}
  // return (
  // <div>
  //   <ul>
  //     <li><a><Link to="/active">My Lessons</Link></a></li>
  //     <li><a><Link to="/past">Past Lessons</Link></a></li>
  //     <li><a><Link to="/offered">My Offered Lessons</Link></a></li>
  //     <li><a><Link to="/userProfile">My Profile</Link></a></li>
  //     <li><a><Link to="/addService">Create a new service</Link></a></li>

  //   </ul>
  // </div>)
};


export default Navigation;