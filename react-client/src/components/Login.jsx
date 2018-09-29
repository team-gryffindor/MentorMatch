import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
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
      redirect: false,
      isSignedIn: false,
      username: '',
      password: ''
    };
    this.uiConfig = {
      signIn: 'popup',
      signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID],
      callback: {
        signInSuccess: () => false
      }
    };
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
    this.authWithFacebook = this.authWithFacebook.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
    });
  }
  authWithEmailPassword(event) {
    event.preventDefault();
    console.log('authed with email', this.emailInput.value);
  }

  authWithFacebook() {
    console.log('authed with fb');
    console.log('This is app', app);
    var facebookProvider = new firebase.auth.FacebookAuthProvider();
    console.log('This is FBP', facebookProvider);

    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then(
        (result) => console.log('We are reaching this', result.user)
        // if (error) {
        //   console.error('Unable to connect to FB', error);
        // } else {
        //   console.log('YOOOOO', result.user);
        //   // this.setState({ redirect: true });
        // }
      )
      .catch((err) => {
        console.log('Error inside FB', err);
      });
  }

  render() {
    const loginStyles = {
      width: '90%',
      maxWidth: '315pix',
      margin: '20px auto',
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '10px'
    };

    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <div>Signed In!</div>
        ) : (
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
        )}
      </div>
    );
  }
}

export default Login;
