import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

class RediSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // handle input onchange event (update stock state)
  handleInputChange(evt) {
    console.log(evt.target.value);
    this.setState({ query: evt.target.value });
  }

  handleClick() {
    // call this within call to get stock api
    axios
      .get('/search', { params: { q: this.state.query } })
      .then(({ data }) => {
        console.log('GETTING QUERY RESULTS', data);
        this.setState({ results: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    console.log('SEARCH RESULTS', this.state.results);
    return (
      <div>
        <form>
          <input type="text" placeholder="Search" name="query" onChange={this.handleInputChange} />
          <p className="desc">Try "express", "redis", "hacker" ...</p>
        </form>
        <button
          onClick={(evt) => {
            this.handleClick();
          }}
        >
          SEARCH
        </button>
        <ul>
          {this.state.results.map((entry) => (
            <li>{entry}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default RediSearch;
