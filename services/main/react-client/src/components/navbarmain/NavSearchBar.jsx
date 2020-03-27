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
    this.initState();
  }

  initState = () => {
    this.setState(
      {
        results: [],
        serviceQuery: localStorage.getItem('serviceQuery'),
        locationQuery: localStorage.getItem('locationQuery')
      },
      () => {
        console.log('initState Queries:', this.state.serviceQuery, this.state.locationQuery);
        localStorage.removeItem('serviceQuery');
        localStorage.removeItem('locationQuery');
      }
    );
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
        console.log('GETTING QUERY RESULTS', data);
        this.setState({ results: data }, () => {
          localStorage.setItem('searchResults', data);
          console.log('localstorage results reset');
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
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
                value={this.state.serviceQuery}
                onChange={(evt) => this.setState({ serviceQuery: evt.target.value })}
              />
            </td>
            <td className="nav-search-container">
              <Geosuggest
                placeholder="City"
                onChange={(e) => {
                  console.log('triggering onchange');
                  this.setState({ locationQuery: '' });
                }}
                onSuggestSelect={(suggest) => {
                  if (suggest) {
                    this.setState({ locationQuery: suggest.description });
                  }
                }}
                initialValue={this.state.locationQuery}
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
                <button
                  className="btn btn-primary nav-search-btn"
                  type="submit"
                  onClick={() => {
                    console.log('QUERIES: ', this.state.serviceQuery, this.state.locationQuery);
                    this.search();
                  }}
                >
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
