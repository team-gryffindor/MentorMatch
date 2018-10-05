import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceQuery: '',
      locationQuery: '',
      results: [],
      redirect: false
    };
    this.results = [];
    this.handleServiceInputChange = this.handleServiceInputChange.bind(this);
    this.handleLocationInputChange = this.handleLocationInputChange.bind(this);
    this.search = this.search.bind(this);
    this.initResults = this.initResults.bind(this);
  }

  componentDidMount() {
    this.initResults();
  }

  initResults() {
    this.setState({ results: [] });
  }

  // handle input onchange event (update stock state)
  handleServiceInputChange(evt) {
    this.setState({ serviceQuery: evt.target.value }, this.search);
    console.log(this.state.serviceQuery);
  }

  // handle input onchange event (update stock state)
  handleLocationInputChange(evt) {
    this.setState({ locationQuery: evt.target.value }, this.search);
  }

  search() {
    console.log('CLICK TRIGGERED!');
    // call this within call to get stock api
    axios
      .get('/search', { params: { q: this.state.serviceQuery + ' ' + this.state.locationQuery } })
      .then(({ data }) => {
        console.log('GETTING QUERY RESULTS', data);
        this.setState({ results: data });
        // this.results = data;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    // if (!this.state.redirect) {
    //   // console.log('REDIRECTING', this.state.results);
    //   // return (
    //   //   <Redirect
    //   //     // to={{
    //   //     //   pathname: '/feed',
    //   //     //   state: { lessonIds: this.state.results }
    //   //     // }}
    //   //     // to={{ pathname: '/feed' }}
    //   //     to={{ pathname: '/feed', state: { lessonIds: this.state.results } }}
    //   //   />
    //   // );
    //   return;
    // } else {
    console.log('HIT BEFORE RENDER', this.state.results);
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
          <button>
            {/* <Link to="/feed">Search</Link> */}
            <Link to={{ pathname: '/feed', state: { lessonIds: this.state.results } }}>Search</Link>
          </button>
        </form>
        {/* <ul>
          {this.state.results.map((entry) => (
            <li>{entry}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  // }
}

export default SearchBar;
