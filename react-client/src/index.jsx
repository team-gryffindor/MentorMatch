import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx'; 
import SignUp from './components/SignUp.jsx';
import Feed from './components/Feed.jsx';
import data from '../dist/data';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
     userInputService: '',
     userInputLocation: '',
     serviceData: window.sampleService,
     locationData: window.sampleLocation
    }
    this.querySet = this.querySet.bind(this);
  }
  
  querySet(service, location) {
    //apollo call
  }

  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Home query={this.querySet}/>}/>
          <Route path="/login" render={() => <Login/>}/>
          <Route path="/signUp" render={() => <SignUp/>}/>
          <Route path="/feed" render={() => <Feed services={this.state.serviceData} location={this.state.locationData}/>}/>

        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));