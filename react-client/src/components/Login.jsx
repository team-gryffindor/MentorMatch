import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBJHJQeMF38kVCfhqgOvqXUjw3kftKMMm8',
  authDomain: 'mentormatch-c3923.firebaseapp.com',
  databaseURL: 'https://mentormatch-c3923.firebaseio.com',
  projectId: 'mentormatch-c3923',
  storageBucket: 'mentormatch-c3923.appspot.com',
  messagingSenderId: '803398282415'
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //isSignedIn: false,
      userInfo: null
    };
    this.uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => false
      }
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      this.setState(
        {
          isSignedIn: !!user,
          userInfo: user
        },
        () => {
          this.props.handleUserLoggingIn();
        }
      );
    });
  }

  render() {
    {
      if (this.props.isLoggedIn === false) {
        return (
          <div className="Login">
            <h1>Welcome to </h1>
            <div className="col-md-4" />
            <div className="form-group col-md-4">
              <a className="btn btn-block btn-social btn-facebook">
                <span className="fa fa-facebook" />
                <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebaseApp.auth()} />
              </a>
              <br />
              <p className="text-center">------------- Or -------------</p>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  placeholder="Enter Email"
                />
                <input
                  type="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handlePassChange}
                  placeholder="Enter Password"
                />
                <br />
                <button type="submit" className="btn btn-default">
                  Submit
                </button>
              </form>
              <br />
              <br />
              <p>
                Forgot Password? <Link to="/recover"> Click Here</Link>
              </p>
              <p>
                Not SIgned up yet? <Link to="/signup"> Sign Up</Link>
              </p>
            </div>
          </div>
        );
      } else {
        return (
          <div className="Login">
            <Redirect to="/dashboard" userInfo={this.state.userInfo} />
          </div>
        );
      }
    }
  }
}

export default Login;
