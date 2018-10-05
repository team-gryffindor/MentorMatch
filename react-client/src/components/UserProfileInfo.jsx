import React from 'react';
// import Header from './Header.jsx';
import { Query } from 'react-apollo';
import { GET_USER_INFO } from '../apollo/resolvers/clientSideQueries';
import { GET_USER } from '../apollo/resolvers/clientSideQueries';

class UserProfileInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
          <Query query={GET_USER_INFO}>
            {({ loading, error, data }) => {
              if (error) return <h1>Error...</h1>;
              if (loading || !data) return <h1>Loading...</h1>;
              return (
                <div>
                  <ul>
                  <div><img src={`https://media.giphy.com/media/E1qYtxkdzpy4U/giphy.gif`} className="img-responsive"/><h2>Hello {data.mentorMatch.username}</h2></div>
                  <h2>{data.mentorMatch.cityOfResidence}</h2>
                  <p>{data.mentorMatch.description}</p>
                  
                    <a>Reviews: 43</a>
                    <a>Offered: 2</a>
                    <a>Taken: 9</a>
                  </ul>
                <h2>Services Offered:</h2>
                    <Query query={GET_USER} variables={{ id: 1 }}>
                      {({ loading, error, data }) => {
                        if (error) return <h1>Error...</h1>;
                        if (loading || !data) return <h1>Loading...</h1>;
                        return (
                          <div>{console.log('INSIDE SECOND QUERY', data)}</div>
                        )
                      }}
                    </Query>
                </div>
              )
            }}
        </Query>
        
          

     </div>
    )




  }
}

export default UserProfileInfo
