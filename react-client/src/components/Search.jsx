import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
  class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        userInputService: '',
        userInputLocation: '',
      }
      this.setIndexState = this.setIndexState.bind(this);
    }

    setIndexState() {
      this.props.query(this.state.service, this.state.location);
    }

    render() {
      return (
        <div>
          <form>
            <input value={this.state.service} onChange={(e) => this.setState({userInputService: e.target.value}, () => this.setIndexState())} placeholder="Enter Service"/>
            <input value={this.state.location} onChange={(e) => this.setState({userInputLocation: e.target.value}, () => this.setIndexState())} placeholder="Location"/>
            <button><Link to="/feed">Search</Link></button>
            <button><Link to="/dashboard">DASHBOARD TEST</Link></button>
          </form>
        </div>
      )
    }
  }
export default Search;