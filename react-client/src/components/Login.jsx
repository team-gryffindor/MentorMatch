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

    const updateCache = (cache, { data: { uid } }) => {
      const { userId } = cache.readQuery({ query: GET_USER_INFO })
      console.log('UPDATE CACHE USER ID: ',userId)
      cache.writeQuery({
        query: GET_USER_INFO,
        data: {
          userId: uid

        }
      })
    }

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
            {/* <Query query={CHECK_USER} variables={{ id: this.props.uid }}>
              {({ error, loading, data }) => {
                if (error) return 'ERROR';
                if (loading) return 'Loading...';

                return <div>GOTTEM</div>
              }}
            </Query> */}
            <Query query={CHECK_USER} variables={{ id: this.props.mentormatch.User }}>
              {({ checkUser }) => {
               if ( checkUser !== this.props.mentormatch.userId) {
                 console.log('NOT EQUAL')
               }
              }}
            </Query>
            
          </div>
        );
      }
    }
  }
}

export default Login;
