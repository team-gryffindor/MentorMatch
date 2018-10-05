import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

let results = [];

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceQuery: '',
      locationQuery: '',
      redirect: false,
      results: []
    };
    this.handleServiceInputChange = this.handleServiceInputChange.bind(this);
    this.handleLocationInputChange = this.handleLocationInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {}

  // handle input onchange event (update stock state)
  handleServiceInputChange(evt) {
    this.setState({ serviceQuery: evt.target.value });
    console.log(this.state.serviceQuery);
  }

  // handle input onchange event (update stock state)
  handleLocationInputChange(evt) {
    this.setState({ locationQuery: evt.target.value });
  }

  handleClick() {
    // call this within call to get stock api
    axios
      .get('/search', { params: { q: this.state.serviceQuery + ' ' + this.state.locationQuery } })
      .then(({ data }) => {
        console.log('GETTING QUERY RESULTS', data);
        this.setState({ results: data });
        // results = data;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    console.log(results);
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: '/feed',
            state: { lessonIds: this.state.results }
          }}
        />
      );
    }
    return (
      <div>
        <form>
          <input
            value={this.state.service}
            onChange={this.handleServiceInputChange}
            placeholder="Lesson Name"
          />
          <input
            value={this.state.location}
            onChange={this.handleLocationInputChange}
            placeholder="Location"
          />
          <button onClick={this.handleClick}>
            Search
            {/* <Link to="/feed">Search</Link> */}
            {/* <Link to={{ pathname: '/feed', state: { lessonIds: results } }}>Search</Link> */}
          </button>
        </form>
        <ul>
          {results.map((entry) => (
            <li>{entry}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchBar;
