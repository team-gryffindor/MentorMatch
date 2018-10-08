import React from 'react';
// import firebase from 'firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 


const Navigation = (props) => {
  // Navbar for for mvp
  // return (
  //   <div>
  //     <ul>
  //     <li><a><button onClick={() => props.handleUserLoggingIn()}><Link to="/login">Login</Link></button></a></li>
  //     <li><a><button onClick={() => {firebase.auth().signOut().then(() => props.handleUserLoggingIn())}}><Link to='/'>Logout!</Link></button></a></li>
  //     </ul>
  //   </div>
  // )
  //----------------------
  // let loggedIn = <li><a><button onClick={() => {firebase.auth().signOut().then(() => props.handleUserLoggingIn())}}>
    // <Link to='/'>Logout!</Link></button></a></li>

  let loggedOut = <li><a><button ><Link to="/login">Login</Link></button></a></li>

  if (props.isLoggedIn === true) {
    return ( 
    <div>
      <ul>
        {loggedIn}
        {/* <li><a><Link to="/userProfile">My Profile</Link></a></li> */}
        <li><a><Link to="/addService">Create a new service</Link></a></li>
        <li><a><Link to="/userProfile">My Profile</Link></a></li>
        <li><a><Link to="/dashboard">Dashboard</Link></a></li>
      </ul>
    </div>)
  } else if (props.isLoggedIn === false) {
    return ( 
      <div>
        <ul>
          {loggedOut} 
        </ul>
      </div>)
  }

//----------------------Original iteration of navbar with user logged in
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