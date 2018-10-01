import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>^ Sign UP ^</h1>
        <form onSubmit={onSubmit}>
          <label>
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
