import React from 'react';

const NavGuestOpt = (prop) => (
  <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
    <ul className="navbar-nav ml-auto">
      <a className="nav-item" href="/signup">
        <button className="btn btn-outline-primary my-2 my-sm-0 btn-margin-right" type="submit">
          Sign up
        </button>
      </a>
      <a className="nav-item" href="/login">
        <button className="btn btn-outline-info my-2 my-sm-0 btn-margin-left" type="submit">
          Log in
        </button>
      </a>
    </ul>
  </div>
);

export default NavGuestOpt;