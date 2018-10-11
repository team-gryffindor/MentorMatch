import React from 'react';
// import Header from './Header.jsx';
import { Query } from 'react-apollo';
import { GET_USER_INFO } from '../apollo/resolvers/clientSideQueries';

class UserProfileInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul>
          <div>
            <img src={this.props.user.image} className="img-responsive" />
            {console.log('ARJUN:',this.props.user)}
            <h2>Hello {this.props.user.username}</h2>
          </div>
          <h2>{this.props.user.cityOfResidence}</h2>
          <p style={{ fontSize: '30px', textAlign: 'left' }}>{this.props.user.description}</p>

          <a>Reviews: 43</a>
          <a>Offered: 2</a>
          <a>Taken: 9</a>
        </ul>
      </div>
    );
  }
}

export default UserProfileInfo;
