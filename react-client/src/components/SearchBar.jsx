import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Geosuggest from 'react-geosuggest';

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
        <form className="form-inline my-2 my-lg-0">
          <input
            className="geosuggest geosuggest__input"
            type="keywords"
            placeholder="Lesson"
            aria-label="Lesson"
            value={this.state.service}
            onChange={this.handleServiceInputChange}
          />
          <input
            className="form-control mr-sm-2"
            type="location"
            placeholder="Location"
            aria-label="Location"
            value={this.state.location}
            onChange={this.handleLocationInputChange}
          />
          <Geosuggest placeholder={'Location'} onSuggestSelect={this.onSuggestSelect} />
          <button className="btn btn-primary my-2 my-sm-0" type="submit">
            <Link
              to={{ pathname: '/feed', state: { lessonIds: this.state.results } }}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <i className="fas fa-search" /> Search
            </Link>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
