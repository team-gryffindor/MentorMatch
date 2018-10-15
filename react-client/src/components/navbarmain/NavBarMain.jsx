import React from 'react';

import NavLogo from './NavLogo.jsx';
import NavSearchBar from './NavSearchBar.jsx';
import NavGuestOpt from './NavGuestOpt.jsx';
import NavUserOpt from './NavUserOpt.jsx';

const NavBarMain = (props) => (
  <div>
    <nav
      className="navbar navbar-expand-md navbar-light"
      style={{ backgroundColor: 'transparent' }}
    >
      {props.currentPath !== '/' && <NavLogo />}
      {props.currentPath !== '/' && <NavSearchBar />}
      {props.isLoggedIn ? <NavUserOpt handleLogin={props.handleLogin} /> : <NavGuestOpt />}
    </nav>
    <hr />
  </div>
);

export default NavBarMain;
