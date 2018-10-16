import React from 'react';
import { Link } from 'react-router-dom';

const NavGuestOpt = (props) => (
  <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
    <ul className="navbar-nav ml-auto">
      <Link className="nav-item" to="/auth">
        {/* <button
          className="btn btn-secondary my-2 my-sm-0 btn-margin-right"
          type="button"
          data-toggle="modal"
          data-target="#authModal"
          onClick={() => props.handleGuestOpt(true)}
        >
          Log in
        </button> */}
        <button className="btn btn-secondary my-2 my-sm-0 btn-margin-right" type="button">
          Log in
        </button>
      </Link>
      <Link className="nav-item" to="/auth">
        {/* <button
          className="btn btn-highlight my-2 my-sm-0 btn-margin-left"
          type="button"
          data-toggle="modal"
          data-target="#authModal"
          onClick={() => props.handleGuestOpt(false)}
        >
          Sign up
        </button> */}
        <button className="btn btn-highlight my-2 my-sm-0 btn-margin-left" type="button">
          Sign up
        </button>
      </Link>
    </ul>
  </div>
);

export default NavGuestOpt;
