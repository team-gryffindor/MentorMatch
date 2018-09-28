import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx'; 
import SignUp from './components/SignUp.jsx';
import Feed from './components/Feed.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
     service: '',
     location: ''
    }
    this.querySet = this.querySet.bind(this);
  }
  
  querySet(service, location) {
    this.setState({
      service: service,
      location: location
    });
  }

  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Home query={this.querySet}/>}/>
          <Route path="/login" render={() => <Login/>}/>
          <Route path="/signUp" render={() => <SignUp/>}/>
          <Route path="/feed" render={() => <Feed service={this.state.service} location={this.state.location}/>}/>

        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));