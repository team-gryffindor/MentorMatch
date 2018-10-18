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
        {props.currentPath !== '/' && <NavLogo />}
        {props.currentPath !== '/' && <NavSearchBar />}
        {props.isLoggedIn ? (
          <NavUserOpt
            userImg={props.userImg}
            handleLogin={props.handleLogin}
            apolloClient={props.apolloClient}
          />
        ) : (
          <NavGuestOpt handleGuestOpt={props.handleGuestOpt} />
        )}
      </nav>
      <hr />
    </div>
    {props.currentPath !== '/' && (
      <img className="home-logo-img" src={'../withText.png'} width={80} />
    )}
  </div>
);

export default NavBarMain;
