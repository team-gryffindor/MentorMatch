import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './NavigationBar.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FeedList from './FeedList.jsx';
import SearchBar from './SearchBar.jsx';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('feed results props', this.props);
    console.log('FEED RESULTS', this.props.location.state.lessonIds);
    if (this.props.location.state.lessonIds.length > 0) {
      return (
        <div>
          <h1>Feed</h1>
          <SearchBar />
          {/* FEEDLIST NEEDS TO BE SHOWN */}
          {/* <Navigation/> */}
          <FeedList lessonIds={this.props.location.state.lessonIds} />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Feed</h1>
          <SearchBar />
          {/* <Navigation/> */}
          NO RESULTS
        </div>
      );
    }
  }
}

export default Feed;
