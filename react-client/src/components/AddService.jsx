import React from 'react';
import Navigation from './NavigationBar.jsx';

class AddService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    }
  }

  render() {
    return(
      <div>
        <h1>Mentor Match</h1>
        <Navigation/>
        <h2>Create a new service</h2>
        <form>
          <input placeholder='Enter title'/>
          <textarea placeholder='Enter Description'/>
          <button>Offer New Lesson</button>
        </form>
      </div>
    );
  }
}
export default AddService;