import React from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavBarMain = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      MentorMatch
    </a>
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

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="oi oi-person" title="profile" aria-hidden="true" />
            Profile
          </a>
        </li>
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
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            Disabled
          </a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
);

//   {/* let loggedIn = (
//     <li>
//       <a>
//         .
//         <button
//           onClick={() => {
//             firebase
//               .auth()
//               .signOut()
//               .then(() => props.handleUserLoggingIn());
//           }}
//         >
//           <Link to="/">Logout!</Link>
//         </button>
//       </a>
//     </li>
//   );

//   let loggedOut = (
//     <li>
//       <a>
//         <button>
//           <Link to="/login">Login</Link>
//         </button>
//       </a>
//     </li>
//   );

//   if (props.isLoggedIn === true) {
//     return (
//       <div>
//         <ul>
//           {loggedIn}
//           {/* <li><a><Link to="/userProfile">My Profile</Link></a></li> */}
//           <li>
//             <a>
//               <Link to="/addService">Create a new service</Link>
//             </a>
//           </li>
//           <li>
//             <a>
//               <Link to="/userProfile">My Profile</Link>
//             </a>
//           </li>
//           <li>
//             <a>
//               <Link to="/dashboard">Dashboard</Link>
//             </a>
//           </li>
//         </ul>
//       </div>
//     );
//   } else if (props.isLoggedIn === false) {
//     return (
//       <div>
//         <ul>{loggedOut}</ul>
//       </div>
//     );
//   }

//   //----------------------Original iteration of navbar with user logged in
//   // return (
//   // <div>
//   //   <ul>
//   //     <li><a><Link to="/active">My Lessons</Link></a></li>
//   //     <li><a><Link to="/past">Past Lessons</Link></a></li>
//   //     <li><a><Link to="/offered">My Offered Lessons</Link></a></li>
//   //     <li><a><Link to="/userProfile">My Profile</Link></a></li>
//   //     <li><a><Link to="/addService">Create a new service</Link></a></li>

//   //   </ul>
//   // </div>) */}
// };

export default NavBarMain;
