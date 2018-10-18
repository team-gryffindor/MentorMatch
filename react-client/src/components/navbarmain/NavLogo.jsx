import React from 'react';
import { Link } from 'react-router-dom';

const NavLogo = (props) => (
  <div>
    <Link to="/">
      <img className="logo-img" src={'../withText.png'} width={30} />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
  </div>
);

export default NavLogo;
