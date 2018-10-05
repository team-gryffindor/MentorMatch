import React from 'react';
<<<<<<< HEAD
// import ServiceDisplay from './ServicesHorizontalDisplay.jsx';
=======
import LessonList from './LessonList.jsx';
>>>>>>> dev
import Search from './Search.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

<<<<<<< HEAD

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render(){
    return(
      <div>
        <h1>Mentor Match</h1> 
        <ol>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </ol>
        {/* <Search query={props.query} /> */}
        <h1>Today's Top Services</h1>
        {/* <ServiceDisplay services={props.todaysServices} /> */}
      </div>
    )
  }
}
=======
const Home = (props) => (
  <div>
    <h1>Mentor Match</h1>
    <Test />
    <ol>
      <button>
        <Link to="/login">Login</Link>
      </button>
    </ol>
    <Search query={props.query} />
    <h1>Today's Top Services</h1>
    <LessonList services={props.todaysServices} />
  </div>
);
>>>>>>> dev

export default Home;

