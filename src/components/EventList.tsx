import * as React from 'react';
import { Affair, Events } from '../models/Events';
import { useState, useEffect } from 'react';
import { EventItem } from './EventItem';
import { GetEventData } from '../services/EventService';

export interface IEventListProps {
}

export function EventList (props: IEventListProps) {
    const [events, setEvents] = useState<Affair[]>();

  return (
    <div className='Events'>
      {events?.map((affair) => <EventItem key ={affair.id} affair={affair} />)}
    </div>
  );
}
