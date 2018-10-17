import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

const NavUserOpt = (props) => (
  <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-user" />
        </a>

        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          {/* <Link className="dropdown-item" to="/dashboard">
            Dashboard
          </Link> */}

          <Link className="dropdown-item" to="/userProfile">
            Profile
          </Link>

          <Link className="dropdown-item" to="/calendar">
            Calendar
          </Link>

          <Link className="dropdown-item" to="/addlesson">
            Create Lesson
          </Link>
          <div className="dropdown-divider" />
          <Link
            className="dropdown-item"
            to="/"
            onClick={() => {
              firebase
                .auth()
                .signOut()
                .then(() => props.handleLogin(false))
                .then(() => props.apolloClient.resetStore());
            }}
          >
            Logout
          </Link>
        </div>
      </li>
    </ul>
  </div>
);

export default NavUserOpt;
