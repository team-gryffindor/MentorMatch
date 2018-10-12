import React from 'react';
import DateTime from 'react-datetime';

class CalendarEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time:'',
      events:{}
    }
    // this.events = this.events.bind(this);
    this.handleOnChange = this.handleOnChange.b
  }

  handleOnChange() {
    this.setState({
      time: evt.target.value
    })
  }

  displayEvents() {
    // if ((this.state.events[this.props.day] === undefined) || (this.state.events[this.props.day] === null)) {
    //   return (
    //     <div>
    //       <h1>Pick a time for your lesson</h1>
    //       {/* <p>{this.state.time}</p> */}
    //       <TimePicker />
    //     </div>
    //   )
    // }
      // let array = [];
      //  this.state.events[this.props.day] = array.push()
      // let newEvents = 
      
    }

  // }
  // events() {
  //   if (this.props.event !== undefined) {
  //     console.log('CREATING EVENT')
  //   }
  //   if (this.state.events.length > 0) {
      
  //   }
  // }

  render() {
    return (
      <div>
        <h1>Hellur</h1>
        
        <DateTime />
        {/* {this.displayEvents()} */}
      </div>
    )
  }
}
export default CalendarEvents;