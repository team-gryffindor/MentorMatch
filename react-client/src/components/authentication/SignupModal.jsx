import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class SignupModal extends React.Component {
  state = {
    email: '',
    password: ''
  };

  render() {
    let { firebaseApp, uiConfig } = this.props;
    return (
      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="Login"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()} />
              <div className="strike">
                <span>or</span>
              </div>
              <div className="container">
                <form>
                  <div className="form-group">
                    <label htmlFor="usrname">
                      <span className="glyphicon glyphicon-user" /> Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="usrname"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="psw">
                      <span className="glyphicon glyphicon-eye-open" /> Password
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="psw"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control-plaintext"
                        id="signupEmail"
                        onChange={(e) => {
                          this.setState({ email: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                      <input
                        type="password"
                        className="form-control"
                        id="signupPassword"
                        placeholder="Password"
                        onChange={(e) => {
                          this.setState({ password: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupModal;
