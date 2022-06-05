import React from 'react'
import { Box } from '@chakra-ui/react';
import {Header} from '../../SubComponents';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import Calendar from './Calendar';
const Schedule = () => {
  return (
    <Box width="100vw" height="100vh" background="burlywood" >
        <Header title="Schedule" /> 
        <Calendar />
    </Box>
  )
}

export default Schedule; 