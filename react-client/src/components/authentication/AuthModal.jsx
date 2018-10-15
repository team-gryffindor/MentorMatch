import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Redirect } from 'react-router-dom';
import { CHECK_USER } from '../../apollo/resolvers/backendQueries';

import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx';

class AuthModal extends React.Component {
  state = {
    isNewUser: false,
    email: '',
    password: ''
  };
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  componentDidUpdate() {
    this.handleLoginAttempt();
  }

  handleLoginAttempt = () => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      // If firebase user id received,
      if (firebaseUser) {
        // Check if user exists in the user table
        console.log('');
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
              console.log('USER EXISTS?', userInDB);
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
                    uid: userInDB.uid
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
              return (
                <div className="close" data-dismiss="modal" aria-label="Close">
                  <Redirect to="/dashboard" />
                </div>
              );
            })
            .catch((err) => console.error(err))
        );
        // If client fails firebase, do not toggle flag to check if logged in
      } else {
        this.props.handleLogin(false);
      }
    });
  };

  createUserWithEmail = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updateProfile({
            displayName: firstname + ' ' + lastname
          })
          .then(() => console.log('updated displayname'))
          .catch((err) => console.error(err));
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error('error code:', errorCode, 'with message: ', errorMessage);
      });
  };

  signInUserWithEmail = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error('error code:', errorCode, 'with message: ', errorMessage);
        window.alert('incorrect username/password');
      });
  };

  render() {
    let { firebaseApp, loginModal } = this.props;
    console.log('AUTOMODAL ISNEWUSER', this.state.isNewUser);
    console.log('ISLOGGEDIN IN RENDER', this.props.isLoggedIn);
    if (!this.props.isLoggedIn && !this.state.isNewUser) {
      return (
        <div
          className="modal fade"
          id="authModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="Login"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                  <StyledFirebaseAuth
                    uiCallback={(ui) => {
                      console.log(ui);
                      ui.disableAutoSignIn();
                    }}
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebaseApp.auth()}
                  />
                </div>
                <div className="strike">
                  <span>or</span>
                </div>
                {loginModal === true ? (
                  <LoginForm
                    signInUser={this.signInUserWithEmail}
                    createUser={this.createUserWithEmail}
                  />
                ) : (
                  <SignupForm
                    signInUser={this.signInUserWithEmail}
                    createUser={this.createUserWithEmail}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.isNewUser) {
      return <Redirect to={{ pathname: '/signUp', state: { uid: this.state.uid } }} />;
    } else {
      return <Redirect to="/dashboard" />;
    }
  }
  // let { firebaseApp, uiConfig } = this.props;
  // console.log('MODAL FLAG', this.props.loginModal);
}

export default AuthModal;
