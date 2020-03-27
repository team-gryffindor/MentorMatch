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

  componentWillUnmount() {}

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
    axios({
      method: 'get',
      url: 'http://localhost:8080/search',
      params: { q: this.state.serviceQuery + ' ' + this.state.locationQuery }
    })
      .then(({ data }) => {
        this.setState({ results: data }, localStorage.setItem('searchResults', data));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
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
                onChange={(evt) => this.setState({ serviceQuery: evt.target.value })}
              />
            </td>
            <td>
              <Geosuggest
                placeholder="Location"
                onSuggestSelect={(suggest) => {
                  if (suggest) {
                    this.setState({ locationQuery: suggest.description });
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
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={() => {
                    console.log(
                      'HOME QUERIES: ',
                      this.state.serviceQuery,
                      this.state.locationQuery
                    );
                    localStorage.setItem('serviceQuery', this.state.serviceQuery);
                    localStorage.setItem('locationQuery', this.state.locationQuery);
                    this.search();
                  }}
                >
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
