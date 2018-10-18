import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { Mutation } from 'react-apollo';
import { ADD_SIGNUP_LESSON, GET_USER } from '../../apollo/resolvers/backendQueries.js';
import moment from 'moment';

class BookNow extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
  };

  state = {
    event: this.props.event
  };

  render() {
    return (
      <button className="btn btn-primary btn-lg" href="#" onClick={this.props.onClick}>
        {' '}
        Book Now
      </button>
    );
  }
}

export default class CustomInput extends React.Component {

  state = {
    startDate: moment(),
      count: 0,
      booked: false
  }

  handleChange = (date) => {
    let currentCount = this.state.count;
    let newCount = currentCount + 1;
    this.setState(
      {
        startDate: date,
        count: newCount
      },
      () => console.log(this.props.userId)
    );
  };

  render() {
    let { startDate, booked, count } = this.state;
    let { userId, event, renderPayment } = this.props;
    let submit;
    
    let dateCal = (
      <div className="row">
        <div className="column">
          <DatePicker
            customInput={<BookNow />}
            selected={startDate}
            onChange={this.handleChange}
            showTimeSelect
            minTime={moment()
              .hours(9)
              .minutes(0)}
            maxTime={moment()
              .hours(22)
              .minutes(30)}
            dateFormat="LLL"
          />
          {submit}
        </div>
      </div>
    );

    if (count >= 2 && booked === false) {
      submit = (
        <Mutation 
        mutation={ADD_SIGNUP_LESSON} 
        refetchQueries={[{ query: GET_USER, variables: { id: userId } }]}>
          {(addSignUpLesson) => (
            <div>
              <button className="btn-outline-success"
                onClick={() => {
                  addSignUpLesson({
                    variables: {
                      userId: userId,
                      lessonId: event.id,
                      date: startDate
                    }
                  });
                  this.setState({ count: 0, booked: true });
                  renderPayment(true);
                }}
              >
                Pay Now 
              </button>
            </div>
          )}
        </Mutation>
      );
    } else if (booked === true) {
      submit = <div />;
      dateCal = <div />;
    }

    return (
      <div>
        {dateCal}
        {submit}
      </div>
    );
  }
}
