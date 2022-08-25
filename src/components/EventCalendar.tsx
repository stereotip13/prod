import { Calendar } from 'antd';
import moment, { Moment } from 'moment';
import React, { FC } from 'react';
import { IEvent } from '../models/IEvent';
import { formatDate } from '../utils/date';

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {
  function dateCellRender(value: Moment) {
    const formatedDate = formatDate(
      value.toDate()
    ); /*далее пробегаемся по датам в поисках событий, обрати внимание фунция не файнд, а фильтр тк на одну дату может быть несколько событий*/
    const currentDayEvents = props.events.filter(
      (ev) => ev.date === formatedDate
    ); // получается массив событий и отрисовываются сразу все
    return (
      <div>
        {currentDayEvents.map((ev, index) => (
          <div key={index}>{ev.description}</div>
        ))}
      </div>
    );
  }
  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
