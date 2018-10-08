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
        {/* <li className="nav-item dropdown">
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
        </li> */}
        <li className="navbar-item">
          <a class="nav-link" href="#">
            Profile
          </a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="#">
            <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">
              Logout
            </button>
            {/* <i className="fas fa-sign-out-alt" /> */}
          </a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="keywords"
          placeholder="Lesson"
          aria-label="Lesson"
        />
        <input
          className="form-control mr-sm-2"
          type="location"
          placeholder="Location"
          aria-label="Location"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          <i className="fas fa-search" />
        </button>
      </form>
    </div>
  </nav>
);

// class Navigation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       view: 'home'
//     };
//     this.changeNav = this.changeNav.bind(this);
//     this.changeView = this.changeView.bind(this);
//   }

//   changeView(e, string) {
//     e.preventDefault();

//     this.setState(
//       {
//         view: string
//       },
//       () => console.log('change nav state')
//     );
//   }

//   changeNav() {
//     const { view } = this.state;
//     if (view === 'home') {
//       return (
//         <div>
//           <ul>
//             <li>
//               <Link to="/login">
//                 <p onClick={(e) => this.changeView(e, 'login')}>Login</p>
//               </Link>
//             </li>
//             <li>
//               <Link to="/signUp">Sign Up</Link>
//             </li>
//           </ul>
//         </div>
//       );
//     } else if (view === 'login') {
//       return (
//         <div>
//           <ul>
//             <li>LOGIN</li>
//           </ul>
//         </div>
//       );
//     }
//   }

//   render() {
//     return <div>{this.changeNav()}</div>;
//   }
// }

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
