import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx'; 
import SignUp from './components/SignUp.jsx';
import Feed from './components/Feed.jsx';
import data from '../dist/data';
import ActiveLessons from './components/ActiveLessons.jsx';
import OfferedLessons from './components/OfferedLessons.jsx';
import PastLessons from './components/PastLessons.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import Dashboard from './components/Dashboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
     userInputService: '',
     userInputLocation: '',
     serviceData: window.sampleService,
     locationData: window.sampleLocation,
     favoritesData: window.sampleService,
     serviceOfTheDay: window.serviceOfTheDay,
     todaysTopServices: window.sampleService
    }
    this.querySet = this.querySet.bind(this);
  }
  
  querySet(service, location) {
    //apollo call
  }
  componentDidMount(){
    //set the sate for today's top services
  }

  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Home query={this.querySet} todaysServices={this.state.todaysTopServices}/>}/>
          <Route path="/login" render={() => <Login/>}/>
          <Route path="/signUp" render={() => <SignUp/>}/>
          <Route path="/active" render={() => <ActiveLessons/>}/>
          <Route path="/offered" render={() => <OfferedLessons/>}/>
          <Route path="/past" render={() => <PastLessons/>}/>
          <Route path="/feed" render={() => <Feed services={this.state.serviceData} location={this.state.locationData}/>}/>
          <Route path="/dashboard" render={() => <Dashboard service={this.state.serviceOfTheDay} favorites={this.state.favoritesData}/>}/>

        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));