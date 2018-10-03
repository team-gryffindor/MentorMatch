// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { }

//   class Search extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         userInputService: '',
//         userInputLocation: '',
//       }
//       this.setIndexState = this.setIndexState.bind(this);
//     }

//     setIndexState() {
//       this.props.query(this.state.service, this.state.location);
//     }

//     render() {
//       return (
//         <div>
//           <form>
//             <input value={this.state.service} onChange={(e) => this.setState({userInputService: e.target.value}, () => this.setIndexState())} placeholder="Enter Service"/>
//             <input value={this.state.location} onChange={(e) => this.setState({userInputLocation: e.target.value}, () => this.setIndexState())} placeholder="Location"/>
//             <button><Link to="/feed">Search</Link></button>
//             <button><Link to="/dashboard">DASHBOARD TEST</Link></button>
//           </form>
//         </div>
//       )
//     }
//   }
// export default Search;

import React from 'react';
import { Mutation } from 'react-apollo';
import { withState } from 'recompose';
import { gql } from 'apollo-boost';

const ADD_USER_QUERY = gql`
  mutation searchQuery($talent: String!) {
    searchQuery(talent: $talent) {
      talent
      id
    }
  }
`;
const enhance = withState('talent', 'setTalent', '');
export default enhance(({ talent, setTalent }) => (
  <Mutation mutation={ADD_USER_QUERY} variables={{ talent }}>
    {(searchQuery) => (
      <form>
        <h1>{talent}</h1>
        <input
          id="talent"
          required
          value={talent}
          type="text"
          onChange={(e) => setTalent(e.target.value)}
        />
      </form>
    )}
  </Mutation>
));
