import { ReactNode, useState } from 'react';
import { Events, Affair } from '../models/Events';
import EventContext from './EventContext';

export interface IEventContextProviderProps {
    children: ReactNode
}

const EventContextProvider = ({children}: IEventContextProviderProps) => {
    const [events, setEvents] = useState<Affair[]>([]);

    const addEvent = (event:Affair) => {
        setEvents([...events, event]);
    }

    const removeEvent = (id: string) => {
        setEvents(events.filter((x) => x.id !== id));
    }
  
    
    return (<EventContext.Provider value={{
        event: events,
        addEvent: addEvent,
        removeEvent: removeEvent
    }}>{children}</EventContext.Provider>);
};



export default EventContextProvider
