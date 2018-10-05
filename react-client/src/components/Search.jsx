import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_LESSONS } from '/Users/Arjun/Documents/gryffindor/react-client/src/apollo/resolvers/backendQueries.js';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceQuery: '',
      locationQuery: '',
      results: []
    };
    this.handleServiceInputChange = this.handleServiceInputChange.bind(this);
    this.handleLocationInputChange = this.handleLocationInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

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
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <form>
          <input
            value={this.state.service}
            onChange={this.handleServiceInputChange}
            placeholder="Enter Service"
          />
          <input
            value={this.state.location}
            onChange={this.handleLocationInputChange}
            placeholder="Location"
          />
          <button onClick={this.handleClick}>
            <Link to="/feed">Search</Link>
          </button>
          <button>
            <Link to="/dashboard">DASHBOARD TEST</Link>
          </button>
        </form>
        <ul>
          {this.state.results.map((entry) => (
            <li>{entry}</li>
          ))}
        </ul>
        <Query query={GET_LESSONS}>
          {({ loading, error, data }) => {
            if (error) return <h1>Error...</h1>;
            if (loading || !data) return <h1>Loading...</h1>;
            return (
              <ul>
                {data.lessons.map((lesson) => {
                  return (
                    <div>
                      <h1>{lesson.title}</h1>
                      <h2>{lesson.avgRating}</h2>
                    </div>
                  );
                })}
              </ul>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Search;
