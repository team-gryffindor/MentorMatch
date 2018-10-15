import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

//Apollo Queries
import { Query } from 'react-apollo';
import { GET_USER_SIGNUPS } from '../../apollo/resolvers/backendQueries.js';
import { GET_USER_INFO } from '../../apollo/resolvers/clientSideQueries.js';

const localizer = BigCalendar.momentLocalizer(moment);

const Calendar = () => {
  return (
    <div>
      <Query query={GET_USER_INFO}>
        {({ error, loading, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          let userId = data.userInfo.userId;
          return (
            <Query query={GET_USER_SIGNUPS} variables={{ id: userId }} fetchPolicy="no-cache">
              {({ error, loading, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error</p>;
                console.log('DATA: ', data.user.signupLessons);

                let signedUpEvents = data.user.signupLessons.map((event) => {
                  return {
                    allday: false,
                    startDate: moment(parseInt(event.date)),
                    endDate: moment(parseInt(event.date)).add(1, 'hour'),
                    title: event.title
                  };
                });
                return (
                  <div className="rbc-calendar">
                    <BigCalendar
                      localizer={localizer}
                      events={signedUpEvents}
                      startAccessor="startDate"
                      endAccessor="endDate"
                      views={['month', 'agenda']}
                    />
                  </div>
                );
              }}
            </Query>
          );
        }}
      </Query>
    </div>
  );
};
export default Calendar;
