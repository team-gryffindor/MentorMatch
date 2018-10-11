import React from 'react';
import dateFns from 'date-fns';
import CalendarEvents from './CalendarEvents.jsx';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      newEvent: false
    }
    this.renderHeader = this.renderHeader.bind(this);
    this.renderDays = this.renderDays.bind(this);
    this.renderCells = this.renderCells.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.onDateClick = this.onDateClick.bind(this);
  }

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
      <div className="col col-start" onClick={() => this.prevMonth()}>
      <div className="icon">Last Month</div>
      </div>
      <div className="col col-center">
        <span>
          {dateFns.format(this.state.currentMonth, dateFormat)}
        </span>
      </div>
      <div className="col col-end" onClick={() => this.nextMonth()}>
        <div className="icon">Next Month</div>
      </div>
    </div>
    )
  };

  renderDays() {
    const dateFormat = "dddd";
    const days = [];
    let startDate = dateFns.startOfWeek(this.state.currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  };

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>

            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  onDateClick(day) {

    // this.setState({
    //   selectedDate: day
    // });
    console.log(day);
    this.setState({
      selectedDate: day,
      newEvent: true
    });
  };

  nextMonth() {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth() {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    let scheduleEvent;
    
    if (typeof this.props.event === 'object') {
      console.log('IT IS THERE');
      scheduleEvent = <h1>Pick a date and a time to schedule this lesson</h1>;
    }
    if (this.state.newEvent === true) {
      return (<CalendarEvents event={this.props.event} day={this.state.selectedDate}/>);
    }
    return (
      <div>
        {scheduleEvent}
        <div className="calendar">
          {this.renderHeader()}
          {this.renderDays()}
          {this.renderCells()}
        </div>
      </div>
    )
  }
}

export default Calendar;