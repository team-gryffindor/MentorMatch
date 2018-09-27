import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
    }
  }
  

  render () {
    return (<div>
      <h1>Login Works</h1>
      <form>
        <input value={this.state.username} onChange={(e) => {this.setState({username:e.target.value})}}/>
        

      </form>
     
    </div>)
  }
}


export default Login;