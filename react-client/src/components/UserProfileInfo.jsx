import React from 'react';
// import Header from './Header.jsx';
import { Query } from 'react-apollo';
import { GET_USER_INFO } from '../apollo/resolvers/clientSideQueries';
import { GET_USER } from '../apollo/resolvers/clientSideQueries';
import UserLessonList from './UserLessonList.jsx';


class UserProfileInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
          <Query query={GET_USER_INFO}>
            {({ loading, error, data }) => {
              if (error) return <h1>Error...</h1>;
              if (loading || !data) return <h1>Loading...</h1>;
              return (
                <div>
                  <ul>
                  <div><img src={data.mentorMatch.image} className="img-responsive"/><h2>Hello {data.mentorMatch.username}</h2></div>
                  <h2>{data.mentorMatch.cityOfResidence}</h2>
                  <p style={{fontSize:'30px', textAlign:'left'}}>{data.mentorMatch.description}</p>
                  
                    <a>Reviews: 43</a>
                    <a>Offered: 2</a>
                    <a>Taken: 9</a>
                  </ul>
                <h2>Services Offered:</h2>
                    <UserLessonList lessonType="offeredLessons"></UserLessonList>
                </div>
              )
            }}
        </Query>
    )




  }
}

export default UserProfileInfo
