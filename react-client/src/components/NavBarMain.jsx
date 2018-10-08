import React from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavLogo from './NavLogo.jsx';
import NavSearchBar from './NavSearchBar.jsx';
import NavGuestOpt from './NavGuestOpt.jsx';
import NavUserOpt from './NavUserOpt.jsx';

class NavBarMain extends React.Component {
  constructor(props) {
    super(props);
    // ({ isHome, isLoggedIn, handleUserLoggingIn }) => (
  }

  render() {
    console.log('current path', this.props.currentPath);
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <NavLogo />
        {this.props.currentPath !== '/' && <NavSearchBar />}
        {this.props.isLoggedIn ? (
          <NavUserOpt handleUserLoggingIn={handleUserLoggingIn} />
        ) : (
          <NavGuestOpt />
        )}
      </nav>
    );
  }
}
// let isHome={this.props.location.pathname === '/'};

export default NavBarMain;
