import React from 'react';

import NavLogo from './NavLogo.jsx';
import NavSearchBar from './NavSearchBar.jsx';
import NavGuestOpt from './NavGuestOpt.jsx';
import NavUserOpt from './NavUserOpt.jsx';

const NavBarMain = (props) => (
  <div>
    <div className="navBar-css">
      <nav
        className="navbar navbar-expand-md navbar-light"
        style={{ backgroundColor: 'transparent' }}
      >
        <img className="logo-img" src={'../withText.png'} width={80} />
        {props.currentPath !== '/' && <NavLogo />}
        {props.currentPath !== '/' && <NavSearchBar />}
        {props.isLoggedIn ? (
          <NavUserOpt handleLogin={props.handleLogin} apolloClient={props.apolloClient} />
        ) : (
          <NavGuestOpt handleGuestOpt={props.handleGuestOpt} />
        )}
      </nav>
      <hr />
    </div>
  </div>
);

export default NavBarMain;
