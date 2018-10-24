import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Geosuggest from 'react-geosuggest';

class SearchBarHome extends React.Component {
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
    
  };

  // handle input onchange event (update stock state)
  handleLocationInputChange = (evt) => {
    this.setState({ locationQuery: evt.target.value }, this.search);
  };

  search = () => {
    
    // call this within call to get stock api
    axios
      .get('/search', { params: { q: this.state.serviceQuery + ' ' + this.state.locationQuery } })
      .then(({ data }) => {
        
        this.setState({ results: data });
        // this.results = data;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    console.log('lesson query', this.state.serviceQuery);
    console.log('location query', this.state.locationQuery);
    console.log('HIT BEFORE RENDER', this.state.results);
    return (
      <React.Fragment>
        <table className="home-search-table">
          <tr>
            <td>
              <input
                className="home-search-lesson geosuggest geosuggest__input"
                type="keywords"
                placeholder="Lesson"
                aria-label="Lesson"
                value={this.state.service}
                onChange={this.handleServiceInputChange}
              />
            </td>
            <td>
              <Geosuggest
                placeholder="Location"
                onSuggestSelect={(suggest) => {
                  if (suggest) {
                    
                    this.setState({ locationQuery: suggest.description }, this.search);
                  }
                }}
                value={this.state.locationQuery}
              />
            </td>
            <td className="home-search-btn-width">
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
                <button className="btn btn-primary" type="submit">
                  <span className="fas fa-search fa-2x" />
                </button>
              </Link>
            </td>
          </tr>
        </table>
      </React.Fragment>
    );
  }
}

export default SearchBarHome;
