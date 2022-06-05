import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
class Calendar extends React.Component {
    render() {
        return <ScheduleComponent height="100vh">
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
      </ScheduleComponent>;
    }
};
export default Calendar;