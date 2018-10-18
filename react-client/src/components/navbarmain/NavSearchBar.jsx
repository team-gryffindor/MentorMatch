import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Geosuggest from 'react-geosuggest';

class NavSearchBar extends React.Component {
  state = {
    serviceQuery: '',
    locationQuery: '',
    results: [],
    redirect: false
  };
  results = [];

  componentDidMount() {
    this.initResults();
  }

  initResults = () => {
    this.setState({ results: [] });
  };

  // handle input onchange event (update stock state)
  handleServiceInputChange = (evt) => {
    this.setState({ serviceQuery: evt.target.value }, this.search);
    console.log(this.state.serviceQuery);
  };

  // handle input onchange event (update stock state)
  handleLocationInputChange = (evt) => {
    this.setState({ locationQuery: evt.target.value }, this.search);
  };

  search = () => {
    console.log('SEARCH TRIGGERED!', this.state.serviceQuery + ' ' + this.state.locationQuery);
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
  };

  render() {
    console.log('HIT BEFORE RENDER', this.state.results);
    console.log('QUERY TO SEND TO REDISEARCH', typeof this.state.serviceQuery);
    return (
      <div className="w-150 mx-auto order-0">
        <table>
          <tr>
            <td className="nav-search-container">
              <input
                className="geosuggest geosuggest__input"
                type="keywords"
                placeholder="Lesson"
                aria-label="Lesson"
                value={this.state.service}
                onChange={this.handleServiceInputChange}
              />
            </td>
            <td className="nav-search-container">
              <Geosuggest
                placeholder="City"
                onSuggestSelect={(suggest) => {
                  if (suggest) {
                    console.log(suggest);
                    this.setState({ locationQuery: suggest.description }, this.search);
                  }
                }}
                value={this.state.locationQuery}
              />
            </td>
            <Link
              to={{
                pathname: '/feed',
                state: {
                  lessonIds: this.state.results,
                  serviceQuery: this.state.serviceQuery,
                  locationQuery: this.state.locationQuery
                }
              }}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <td className="nav-search-btn">
                <button className="btn btn-primary nav-search-btn" type="submit">
                  <span className="fas fa-search" />
                </button>
              </td>
            </Link>
          </tr>
        </table>
      </div>
    );
  }
}

export default NavSearchBar;
