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
          {/* <i className="fas fa-user" /> */}
          <img
            className="my-navbar-image"
            src={props.userImg}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '../Default.png';
            }}
            alt={'profile image'}
          />
        </a>

        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/userProfile">
            <i className="fas fa-user" />
            Profile
          </Link>
          <Link className="dropdown-item" to="/calendar">
            <i className="fas fa-calendar" />
            Calendar
          </Link>
          <Link className="dropdown-item" to="/addlesson">
            <i className="fas fa-plus" />
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
                .then(() => props.apolloClient.resetStore())
                .then(() => localStorage.clear())
                .catch((e) => console.error('FAILED AT LOGOUT'));
            }}
          >
            <i className="fas fa-sign-out-alt" />
            Logout
          </Link>
        </div>
      </li>
    </ul>
  </div>
);

export default NavUserOpt;
