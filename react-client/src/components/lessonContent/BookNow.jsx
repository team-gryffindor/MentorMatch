import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { Mutation } from 'react-apollo';
import { ADD_SIGNUP_LESSON } from '../../apollo/resolvers/backendQueries.js';
import moment from 'moment';

/* eslint-disable react/no-multi-comp */
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
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      count: 0,
      booked: false
    };
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
    let submit;
    let dateCal = (
      <div className="row">
        <div className="column">
          <DatePicker
            customInput={<BookNow />}
            selected={this.state.startDate}
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
    let booked;

    if (this.state.count === 2 && this.state.booked === false) {
      submit = (
        <Mutation mutation={ADD_SIGNUP_LESSON}>
          {(addSignUpLesson) => (
            <div>
              <button
                onClick={() => {
                  addSignUpLesson({
                    variables: {
                      userId: this.props.userId,
                      lessonId: this.props.event.id,
                      date: this.state.startDate
                    }
                  });
                  this.setState({ count: 0, booked: true });
                  this.props.renderPayment(true);
                }}
              >
                Pay Now
              </button>
            </div>
          )}
        </Mutation>
      );
    } else if (this.state.booked === true) {
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
