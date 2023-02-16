import * as React from 'react';
import { Affair, Events } from '../models/Events';
import { useState, useEffect } from 'react';
import { EventItem } from './EventItem';
import { GetEventData } from '../services/EventService';
import { SearchForm } from './SearchForm';

// export interface IEventListProps {
   // name:            string;
   // type:            string;
   // id:              string;
   // test:            boolean;
   // url:             string;
   // locale:          string;

// }

export function EventList () {
    
  const [events, setEvents] = useState<Events>();

    useEffect(() => {
      GetEventData().then(data => setEvents(data));
     
    }, []);

    useEffect(() => {
      console.log(events)
    }, [events])

    function filterEvents(){

    }

  return (
    <div className='Events'>
      <SearchForm filterEvents={filterEvents}/>
      { events !== undefined && events._embedded.events[0].name }
      { events !== undefined && events._embedded.events.map((affair) => <EventItem key ={affair.id} affair={affair} />) }
    </div>
  );
}
