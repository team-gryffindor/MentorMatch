import React from 'react';
import Header from './Header.jsx';
import { graphql } from 'react-apollo';
import { getUser } from '../../apollo/queries.js';

class UserProfileInfo extends React.Component {
  displayUserInfo() {
    console.log(this.props.data);
    var data = this.props.data;
    if (data.loading) {
      return <div> Loading test ...</div>;
    } else {
      console.log('SDJFHBSJKDFSD ', this.props.data);
      return (
        <div>
          username:
          {data.user.name}
          description:
          {data.user.description}
        </div>
      );
    }
  }
  render() {
    return <div>TEST {this.displayUserInfo()}</div>;
  }
}

export default graphql(getUser, {
  options: (props) => {
    return {
      variables: {
        id: 1
      }
    };
  }
})(UserProfileInfo);
