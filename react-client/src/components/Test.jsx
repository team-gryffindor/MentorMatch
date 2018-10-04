import React from 'react';
import { graphql } from 'react-apollo';
import { getUser } from '../../apollo/queries.js';

class Test extends React.Component {
  displayTest() {
    console.log(this.props.data);
    var data = this.props.data;
    if (data.loading) {
      return <div> Loading test ...</div>;
    } else {
      console.log('SDJFHBSJKDFSD ', this.props.data)
      // return (
      //   <div>
      //     username:
      //     {data.user.name}
      //     description:
      //     {data.user.description}
      //   </div>
      // );
    }
  }
  render() {
    return (
      <div>
        <h1 onClick={() => this.displayTest()}>TEST </h1>
      </div>
    );
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
})(Test);
