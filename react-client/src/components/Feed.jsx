import React from 'react';
import ReactDOM from 'react-dom';
import NavBarMain from './navbarmain/NavBarMain.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LessonList from './LessonList.jsx';
import SearchBar from './SearchBar.jsx';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('feed results props', this.props);
    // console.log('FEED RESULTS', this.props.location.state.lessonIds);
    //   if (this.props.location.state.lessonIds.length > 0) {
    //     return (
    //       <div>
    //         <h1>Search Results for {} </h1>
    //         {/* FEEDLIST NEEDS TO BE SHOWN */}
    //         {/* <Navigation/> */}
    //         <LessonList lessonIds={['3', '18']} />
    //       </div>
    //     );
    //   } else {
    //     return (
    //       <div>
    //         <h1>Search Results for {} </h1>
    //         {/* <Navigation/> */}
    //         NO RESULTS
    //       </div>
    //     );
    //   }
    // }
    console.log('PROPS IN FEED', this.props.location);
    return (
      <div className="container">
        <h1>
          Search Results for "{this.props.location.state.serviceQuery}" near{' '}
          {this.props.location.state.locationQuery}{' '}
        </h1>
        <LessonList lessonIds={this.props.location.state.lessonIds} />
      </div>
    );
  }
}

export default Feed;
