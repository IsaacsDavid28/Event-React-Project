import * as React from 'react';
import { Affair, Events } from '../models/Events';
import { useState, useEffect } from 'react';
import { EventItem } from './EventItem';
import { GetEventData } from '../services/EventService';
import { SearchForm } from './SearchForm';
import { Col, Row } from 'reactstrap';

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

    function filterEvents(events:Events){
      setEvents(events)
    }

  return (
    <div className='Events'>
      <SearchForm filterEvents={filterEvents}/>
      <Row>
         { events !== undefined && events._embedded.events.map((affair, index) => (
    <Col lg="4" key={index}>
      <EventItem key={affair.id} affair={affair} />
    </Col>
    ))}
      </Row>
    </div>
  );
}
