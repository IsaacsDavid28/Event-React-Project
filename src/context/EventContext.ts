import { EventContextModel } from './EventContextModel';
import { createContext } from 'react';


const defaultValue:EventContextModel = {
    event: [],
    addEvent: () => {},
    removeEvent: () => {}
}

const EventContext = createContext(defaultValue)

export default EventContext