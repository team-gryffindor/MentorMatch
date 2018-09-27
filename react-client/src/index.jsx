import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx'; 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
     
    }
  }
  

  render () {
    return (
      <Router>
      <div>
        
        <Route exact path="/" render={() => <Home/>}/>
        <Route exact path="/login" render={() => <Login/>}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));