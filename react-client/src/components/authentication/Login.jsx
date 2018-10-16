import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { CHECK_USER } from '../../apollo/resolvers/backendQueries';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBJHJQeMF38kVCfhqgOvqXUjw3kftKMMm8',
  authDomain: 'mentormatch-c3923.firebaseapp.com',
  databaseURL: 'https://mentormatch-c3923.firebaseio.com',
  projectId: 'mentormatch-c3923',
  storageBucket: 'mentormatch-c3923.appspot.com',
  messagingSenderId: '803398282415'
});

class Login extends React.Component {
  state = {
    isNewUser: false,
    uid: null
  };
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      // If firebase user id received,
      if (firebaseUser) {
        // Check if user exists in the user table
        return (
          Promise.all([
            this.props.apolloClient.query({
              query: CHECK_USER,
              variables: {
                uid: firebaseUser.uid
              }
            }),
            firebaseUser.uid
          ])
            // With user retrieved from database
            .then((data) => {
              let userInDB = data[0].data.checkUser;
              console.log(userInDB);
              // If new user
              if (!userInDB) {
                // Mark the flag and save the firebase uid
                this.setState(
                  {
                    isNewUser: true,
                    uid: data[1]
                  },
                  () => console.log('AFTER SETSTATE FOR USER', this.state.isNewUser, this.state.uid)
                );
                return <Redirect to="/signUp" uid={data[1]} />;
              }
              // Cache the user information
              return this.props.apolloClient.writeData({
                data: {
                  userInfo: {
                    __typename: 'userInfo',
                    userId: userInDB.id,
                    username: userInDB.name,
                    description: userInDB.description,
                    cityOfResidence: userInDB.cityOfResidence,
                    image: userInDB.image,
                    uid: userInDB.uid,
                    lat: userInDB.lat,
                    lng: userInDB.lng
                  }
                }
              });
            })
            .then((redirect) => {
              // TODO: Cleanup--what's is the purpose of this redirect? never gets used
              console.log('REDIRECT? AFTER CACHING', redirect);
              if (redirect) {
                return redirect;
              }
              this.props.handleLogin(true);
            })
            .catch((err) => console.error(err))
        );
        // If client fails firebase, do not toggle flag to check if logged in
      } else {
        this.props.handleLogin(false);
      }
    });
  }

  render() {
    if (!this.props.isLoggedIn && !this.state.isNewUser) {
      return (
        <div className="container signin-container">
          <h3 style={{ textAlign: 'center', verticalAlign: 'bottom' }}>Welcome to</h3>
          <img
            className="logo-img"
            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100px' }}
            src={'../../MM-Logotype.png'}
          />
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebaseApp.auth()} />
          <div className="d-flex justify-content-center">
            <Link to="/">
              <button className="btn btn-primary my-2 my-sm-0 btn-margin-left" type="submit">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      );
    } else if (this.state.isNewUser) {
      return <Redirect to={{ pathname: '/signUp', state: { uid: this.state.uid } }} />;
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Login;
