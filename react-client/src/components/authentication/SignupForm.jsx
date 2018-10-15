import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class SignupForm extends React.Component {
  state = {
    email: '',
    password: ''
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="usrname">
              <span className="glyphicon glyphicon-user" /> Username
            </label>
            <input type="text" className="form-control" id="usrname" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="psw">
              <span className="glyphicon glyphicon-eye-open" /> Password
            </label>
            <input type="text" className="form-control" id="psw" placeholder="Enter password" />
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
          <div className="d-flex justify-content-end">
            <Link to="/login">
              <button className="btn btn-highlight my-2 my-sm-0 btn-margin-left" type="submit">
                Log in
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
