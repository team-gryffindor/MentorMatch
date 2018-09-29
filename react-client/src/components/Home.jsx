import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      service: '',
      location: ''
    };
  }

  render() {
    return (
      <div>
        <h1>Mentor Match</h1>
        <ol>
          <button>
            <Link to="/login">Login</Link>
          </button>
          <button>
            <Link to="/signUp">Sign Up</Link>
          </button>
        </ol>
        <input
          value={this.state.service}
          onChange={(e) => this.setState({ service: e.target.value })}
          placeholder="Enter Service"
        />
        <input
          value={this.state.location}
          onChange={(e) => this.setState({ location: e.target.value })}
          placeholder="Enter Location"
        />
        <button>Search</button>
      </div>
    );
  }
}

export default Home;
