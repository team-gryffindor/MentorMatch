import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx';

class AuthModal extends React.Component {
  state = {
    email: '',
    password: ''
  };

  render() {
    let { firebaseApp, uiConfig } = this.props;
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
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()} />
              </div>
              <div className="strike">
                <span>or</span>
              </div>
              {this.props.loginModal === true ? <LoginForm /> : <SignupForm />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthModal;
