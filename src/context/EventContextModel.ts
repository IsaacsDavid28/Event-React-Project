import { Events, Affair } from '../models/Events';

export interface EventContextModel  {
    event: Affair[],
    addEvent: (event:Affair) => void,
    removeEvent: (id: string) => void
}
