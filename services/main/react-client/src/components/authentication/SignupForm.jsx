import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  state = {
    email: '',
    password: ''
  };

  render() {
    return (
      <div className="container" style={{ marginTop: '10px', marginBottom: '10px' }}>
        <h5>Sign up with email</h5>
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
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
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
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
          </div>
          <div className="d-flex justify-content-end">
            <Link to="/login">
              <button className="btn btn-highlight my-2 my-sm-0 btn-margin-left" type="submit">
                Sign up
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
