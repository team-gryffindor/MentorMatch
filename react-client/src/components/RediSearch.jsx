import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class RediSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    };
    this.setIndexState = this.setIndexState.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setIndexState() {
    this.props.query(this.state.service, this.state.location);
  }

  // handle input onchange event (update stock state)
  handleInputChange(evt) {
    this.setState({ query: evt.target.value });
  }

  handleClick() {
    // call this within call to get stock api
    axios
      .get('/search', { params: { q: this.state.query } })
      .then(({ data }) => {
        this.setState({ results: data });
      })
      .catch((err) => {
        console.error(err);
        this.setState({
          valid: false
        });
      });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Search"
            name="query"
            autocomplete="off"
            onChange={this.handleInputChange}
          />
          <p class="desc">Try "express", "redis", "hacker" ...</p>
        </form>
        <button
          onClick={(evt) => {
            this.handleClick();
          }}
        />
        <ul>
          props.state.results.map((entry) => (<li>{entry}</li>
          ));
        </ul>
      </div>
    );
  }
}
export default RediSearch;
