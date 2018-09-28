import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './Feed.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      service: '',
      location: '',
    }
  }

  setIndexState() {
    this.props.query(this.state.service, this.state.location);
  }

  render () {
    return (<div>
      <h1>Mentor Match</h1>
      <ol>
        <button><Link to="/login">Login</Link></button>
      </ol>
      <input value={this.state.service} onChange={(e) => this.setState({service: e.target.value}, () => this.setIndexState())} placeholder="Enter Service"/>
      <input value={this.state.location} onChange={(e) => this.setState({location: e.target.value}, () => this.setIndexState())} placeholder="Location"/>
      <button><Link to="/feed">Search</Link></button>
    </div>)
  }
}


export default Home;