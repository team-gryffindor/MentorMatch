import React from 'react';
import ReactDOM from 'react-dom';
import { Query, Mutation } from 'react-apollo';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { UPDATE_USER_INFO, GET_USER_INFO } from '../apollo/resolvers/clientSideQueries';
import { CHECK_USER, GET_USER } from '../apollo/resolvers/backendQueries';

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
      // isSignedIn: false,
      // uID: null
    };
    this.uiConfig = {
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
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user === null) {
        this.props.handleUserLoggingIn(false, null);
      } else {
        this.props.handleUserLoggingIn(true, user.uid);
      }
    });
  }

  updateUser(user) {
    this.props.updateUserInfo({
      variables: {
        userId: user.id,
        username: user.name,
        description: user.description,
        cityOfResidence: user.city,
        image: user.image
      }
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
            </div>
          </div>
        );
      } else if (this.props.isLoggedIn === true) {
        return (
          <div>
            <Query query={CHECK_USER} variables={{ uid: this.props.uid }}>
              {({ loading, error, data }) => {
                if (error) return <h1>error</h1>;
                if (loading) {
                  return <div> Loading test ...</div>;
                } else {
                  console.log('login', data);
                  if (data.checkUser === null) {
                    return <Redirect to="/signup" />;
                  } else {
                    console.log('login2', data);
                    let user = data.checkUser;
                    console.log(user);
                    this.updateUser(user);
                    return <Redirect to="/dashboard" userInfo={this.state.userInfo} />;
                    // return (
                    //   <div>
                    //     <h1>logged in</h1>
                    //     {/* <Mutation mutation={UPDATE_USER_INFO}>
                    //       {(updateUserInfo) => {
                    //         console.log(updateUserInfo);
                    //         updateUserInfo({
                    //           variables: {
                    //             userId: user.id,
                    //             username: user.name,
                    //             description: user.description,
                    //             cityOfResidence: user.city,
                    //             image: user.image
                    //           }
                    //         });
                    //       }}
                    //     </Mutation> */}
                    //     <Query query={GET_USER_INFO}>
                    //       {({ loading, error, data }) => console.log(data)}
                    //     </Query>
                    //   </div>
                    // );
                  }
                }
              }}
            </Query>
            {/* <div className="Login">
              <Redirect
                to={{
                  pathname: '/dashboard',
                  state: { firebaseId: this.state.uID }
                }}
              />
              <Redirect to="/dashboard" userInfo={this.state.userInfo} />
            </div> */}
          </div>
        );
      }
    }
  }
}

export default Login;
