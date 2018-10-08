import React from 'react';
// import firebase from 'firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 


const Navigation = (props) => {
  // Navbar for for mvp
  // return (
  //   <div>
  //     <ul>
  //     <li><a><button onClick={() => props.handleUserLoggingIn()}><Link to="/login">Login</Link></button></a></li>
  //     <li><a><button onClick={() => {firebase.auth().signOut().then(() => props.handleUserLoggingIn())}}><Link to='/'>Logout!</Link></button></a></li>
  //     </ul>
  //   </div>
  // )
  //----------------------
  // let loggedIn = <li><a><button onClick={() => {firebase.auth().signOut().then(() => props.handleUserLoggingIn())}}>
    // <Link to='/'>Logout!</Link></button></a></li>

  changeView(e, string) {
    e.preventDefault();

    this.setState(
      {
        view: string
      },
      () => console.log('change nav state')
    );
  }

  changeNav() {
    const { view } = this.state;
    if (view === 'home') {
      return (
        <div>
          <ul>
            <li>
              <Link to="/login">
                <p onClick={(e) => this.changeView(e, 'login')}>Login</p>
              </Link>
            </li>
            <li>
              <Link to="/signUp">Sign Up</Link>
            </li>
          </ul>
        </div>
      );
    } else if (view === 'login') {
      return (
        <div>
          <ul>
            <li>LOGIN</li>
          </ul>
        </div>
      );
    }
  }

  render() {
    return <div>{this.changeNav()}</div>;
  }
}

export default Navigation;
