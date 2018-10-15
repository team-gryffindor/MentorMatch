import React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { CHECK_USER } from '../../apollo/resolvers/backendQueries';

import AuthModal from './AuthModal.jsx';

class Login extends React.Component {
  state = {
    isNewUser: false,
    uid: null
  };

  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged((firebaseUser) => {
  //     // If firebase user id received,
  //     if (firebaseUser) {
  //       // Check if user exists in the user table
  //       return (
  //         Promise.all([
  //           this.props.apolloClient.query({
  //             query: CHECK_USER,
  //             variables: {
  //               uid: firebaseUser.uid
  //             }
  //           }),
  //           firebaseUser.uid
  //         ])
  //           // With user retrieved from database
  //           .then((data) => {
  //             let userInDB = data[0].data.checkUser;
  //             console.log(userInDB);
  //             // If new user
  //             if (!userInDB) {
  //               // Mark the flag and save the firebase uid
  //               this.setState(
  //                 {
  //                   isNewUser: true,
  //                   uid: data[1]
  //                 },
  //                 () => console.log('AFTER SETSTATE FOR USER', this.state.isNewUser, this.state.uid)
  //               );
  //               return <Redirect to="/signUp" uid={data[1]} />;
  //             }
  //             // Cache the user information
  //             return this.props.apolloClient.writeData({
  //               data: {
  //                 userInfo: {
  //                   __typename: 'userInfo',
  //                   userId: userInDB.id,
  //                   username: userInDB.name,
  //                   description: userInDB.description,
  //                   cityOfResidence: userInDB.cityOfResidence,
  //                   image: userInDB.image,
  //                   uid: userInDB.uid
  //                 }
  //               }
  //             });
  //           })
  //           .then((redirect) => {
  //             // TODO: Cleanup--what's is the purpose of this redirect? never gets used
  //             console.log('REDIRECT? AFTER CACHING', redirect);
  //             if (redirect) {
  //               return redirect;
  //             }
  //             this.props.handleLogin(true);
  //           })
  //           .catch((err) => console.error(err))
  //       );
  //       // If client fails firebase, do not toggle flag to check if logged in
  //     } else {
  //       this.props.handleLogin(false);
  //     }
  //   });
  // }

  render() {
    let { firebaseApp, uiConfig, loginModal, isLoggedIn, handleLogin, apolloClient } = this.props;
    console.log('REDIrECT BOOL IN RENDER', this.state.isNewUser);
    // if (!this.props.isLoggedIn && !this.state.isNewUser) {
    return (
      // <div className="Login">
      //   <h1>Welcome to </h1>
      //   <div className="col-md-4" />
      //   <div className="form-group col-md-4">
      //     <a className="btn btn-block btn-social btn-facebook">
      //       <span className="fa fa-facebook" />
      //       <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebaseApp.auth()} />
      //     </a>
      //     <br />
      //   </div>
      // </div>
      <AuthModal
        firebaseApp={firebaseApp}
        uiConfig={uiConfig}
        loginModal={loginModal}
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        apolloClient={apolloClient}
      />
    );
  }
  //   } else if (this.state.isNewUser) {
  //     return <Redirect to={{ pathname: '/signUp', state: { uid: this.state.uid } }} />;
  //   } else {
  //     return <Redirect to="/dashboard" />;
  //   }
  // }
}

export default Login;
