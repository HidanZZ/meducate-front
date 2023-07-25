// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Types
import { CalendarFiltersType, AddEventType, EventType } from 'src/types/apps/calendarTypes'

const categories: CalendarFiltersType[] = [
  'Medical Events',
  'Personal',
  'Business',
  'Social Events',
  'Holiday',
  'Product Release',
  'Webinar'
]
const date = new Date()
const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
const nextMonth =
  date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1)

const prevMonth =
  date.getMonth() === 11 ? new Date(date.getFullYear() - 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() - 1, 1)

const data: { events: EventType[] } = {
  events: [
    {
      id: 1,
      url: '',
      title: 'Medical Conference',
      start: date,
      end: nextDay,
      allDay: false,
      extendedProps: {
        calendar: 'Medical Events'
      }
    },
    {
      id: 2,
      url: '',
      title: 'Consultation with Patient',
      start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
      allDay: true,
      extendedProps: {
        calendar: 'Medical Events'
      }
    },
    {
      id: 3,
      url: '',
      title: 'Medical Seminar',
      allDay: true,
      start: new Date(date.getFullYear(), date.getMonth() + 1, -9),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -7),
      extendedProps: {
        calendar: 'Medical Events'
      }
    },
    {
      id: 4,
      url: '',
      title: "Doctor's Appointment",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
      allDay: true,
      extendedProps: {
        calendar: 'Personal'
      }
    },
    {
      id: 5,
      url: '',
      title: 'Medical Symposium',
      start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
      allDay: true,
      extendedProps: {
        calendar: 'Medical Events'
      }
    },
    {
      id: 6,
      url: '',
      title: 'Medical Workshop',
      start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
      allDay: true,
      extendedProps: {
        calendar: 'Medical Events'
      }
    },
    {
      id: 7,
      url: '',
      title: 'Medical Research Meeting',
      start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
      allDay: true,
      extendedProps: {
        calendar: 'Medical Events'
      }
    },
    {
      id: 8,
      url: '',
      title: 'Monthly Medical Meeting',
      start: nextMonth,
      end: nextMonth,
      allDay: true,
      extendedProps: {
        calendar: 'Medical Events'
      }
    },
    {
      id: 9,
      url: '',
      title: 'Medical Training Program',
      start: prevMonth,
      end: prevMonth,
      allDay: true,
      extendedProps: {
        calendar: 'Medical Events'
      }
    },
    {
      id: 10,
      url: '',
      title: 'CME (Continuing Medical Education) Course',
      start: prevMonth,
      end: prevMonth,
      allDay: true,
      extendedProps: {
        calendar: 'Medical Events'
      }
    },
    {
      id: 11,
      url: '',
      title: 'New Medical Release',
      start: new Date(date.getFullYear(), date.getMonth() + 1, -5),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -4),
      allDay: true,
      extendedProps: {
        calendar: 'Product Release'
      }
    },
    {
      id: 12,
      url: '',
      title: 'Medical Webinar',
      start: new Date(date.getFullYear(), date.getMonth() + 1, -8),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -8, 2, 0), // Ends after 2 hours
      allDay: false,
      extendedProps: {
        calendar: 'Webinar'
      }
    }
  ]
}

// ** Fetch Events
export const fetchEvents = createAsyncThunk('appCalendar/fetchEvents', async (calendars: CalendarFiltersType[]) => {
  // const response = await axios.get('/apps/calendar/events', {
  //   params: {
  //     calendars
  //   }
  // })

  const response = data.events.filter((event: any) => calendars.includes(event.extendedProps.calendar))

  return response
})

// ** Add Event
export const addEvent = createAsyncThunk('appCalendar/addEvent', async (event: AddEventType, { dispatch }) => {
  const response = await axios.post('/apps/calendar/add-event', {
    data: {
      event
    }
  })
  await dispatch(fetchEvents(categories))

  return response.data.event
})

// ** Update Event
export const updateEvent = createAsyncThunk('appCalendar/updateEvent', async (event: EventType, { dispatch }) => {
  const response = await axios.post('/apps/calendar/update-event', {
    data: {
      event
    }
  })
  await dispatch(fetchEvents(categories))

  return response.data.event
})

// ** Delete Event
export const deleteEvent = createAsyncThunk('appCalendar/deleteEvent', async (id: number | string, { dispatch }) => {
  const response = await axios.delete('/apps/calendar/remove-event', {
    params: { id }
  })
  await dispatch(fetchEvents(categories))

  return response.data
})

export const appCalendarSlice = createSlice({
  name: 'appCalendar',
  initialState: {
    events: [],
    selectedEvent: null,
    selectedCalendars: categories
  },
  reducers: {
    handleSelectEvent: (state, action) => {
      state.selectedEvent = action.payload
    },
    handleCalendarsUpdate: (state, action) => {
      const filterIndex = state.selectedCalendars.findIndex(i => i === action.payload)
      if (state.selectedCalendars.includes(action.payload)) {
        state.selectedCalendars.splice(filterIndex, 1)
      } else {
        state.selectedCalendars.push(action.payload)
      }
      if (state.selectedCalendars.length === 0) {
        state.events.length = 0
      }
    },
    handleAllCalendars: (state, action) => {
      const value = action.payload
      if (value === true) {
        state.selectedCalendars = categories
      } else {
        state.selectedCalendars = []
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchEvents.fulfilled, (state: any, action) => {
      state.events = action.payload
    })
  }
})
export const { handleSelectEvent, handleCalendarsUpdate, handleAllCalendars } = appCalendarSlice.actions

export default appCalendarSlice.reducer
