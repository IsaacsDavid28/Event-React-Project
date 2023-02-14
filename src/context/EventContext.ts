import { EventContextModel } from './EventContextModel';
import { createContext } from 'react';


const defaultValue:EventContextModel = {
    event: []
}

const EventContext = createContext(defaultValue)

export default EventContext