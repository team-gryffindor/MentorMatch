import React from 'react';
import ReactDOM from 'react-dom';
import { Query, Mutation, withApollo } from 'react-apollo';
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
      redirect: false,
      uid: null
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
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        return Promise.all([
          this.props.client.query({
            query: CHECK_USER,
            variables: {
              uid: user.uid
            }
          }),
          user.uid
        ])
          .then((data) => {
            let user = data[0].data.checkUser;
            console.log(user);
            if (!user) {
              // redirect to signup
              this.setState({
                redirect: true,
                uid: data[1]
              });
              return <Redirect to="/signUp" uid={data[1]} />;
            }
            return this.props.client.writeData({
              data: {
                userInfo: {
                  __typename: 'userInfo',
                  userId: user.id,
                  username: user.name,
                  description: user.description,
                  cityOfResidence: user.cityOfResidence,
                  image: user.image,
                  uid: user.uid
                }
              }
            });
            // test
          })
          .then((redirect) => {
            if (redirect) {
              return redirect;
            }
            this.props.handleLogin(true);
          })
          .catch((err) => console.error(err));
      } else {
        this.props.handleLogin(false);
      }
    });
  }

  render() {
    {
      // this needs work, need to toggle state and log out
      if (!this.props.isLoggedIn && !this.state.redirect) {
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
      } else if (this.state.redirect) {
        return <Redirect to={{ pathname: '/signUp', state: { uid: this.state.uid } }} />;
      } else {
        return <Redirect to="/dashboard" />;
      }
    }
  }
}
// this.props.client.query
// this.props.mutate({})
export default withApollo(Login);