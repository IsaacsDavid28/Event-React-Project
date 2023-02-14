import { ReactNode, useState } from 'react';
import { Events, Affair } from '../models/Events';
import EventContext from './EventContext';

export interface IEventContextProviderProps {
    children: ReactNode
}

const EventContextProvider = ({children}: IEventContextProviderProps) => {
    const [event, setEvent] = useState<Affair[]>([]);
  
    
    return (<EventContext.Provider value={{
        event: event

    }}>{children}</EventContext.Provider>);
};



export default EventContextProvider
