import React from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavLogo from './NavLogo.jsx';
import NavSearchBar from './NavSearchBar.jsx';
import NavGuestOpt from './NavGuestOpt.jsx';
import NavUserOpt from './NavUserOpt.jsx';

const NavBarMain = ({ isLoggedIn, handleUserLoggingIn }) => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <NavLogo />
    <NavSearchBar />
    {isLoggedIn ? <NavUserOpt handleUserLoggingIn={handleUserLoggingIn} /> : <NavGuestOpt />}
  </nav>
);

export default NavBarMain;
