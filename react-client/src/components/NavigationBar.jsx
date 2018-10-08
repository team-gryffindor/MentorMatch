import React from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home'
    };
    this.changeNav = this.changeNav.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  changeView(e, string) {
    e.preventDefault();

    this.setState(
      {
        view: string
      },
      () => console.log('change nav state')
    );
  }

  changeNav() {
    const { view } = this.state;
    if (view === 'home') {
      return (
        <div>
          <ul>
            <li>
              <Link to="/login">
                <p onClick={(e) => this.changeView(e, 'login')}>Login</p>
              </Link>
            </li>
            <li>
              <Link to="/signUp">Sign Up</Link>
            </li>
          </ul>
        </div>
      );
    } else if (view === 'login') {
      return (
        <div>
          <ul>
            <li>LOGIN</li>
          </ul>
        </div>
      );
    }
  }

  render() {
    return <div>{this.changeNav()}</div>;
  }
}

export default Navigation;
