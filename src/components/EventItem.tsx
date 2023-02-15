import * as React from 'react';
import { Affair } from '../models/Events';

export interface IEventItemProps {
    affair: Affair
}

export function EventItem (props: IEventItemProps) {
    let {affair} = props

    const venue = affair._embedded.venues[0]

  return (
    <div className='EventItem'>
        <ul>
            <li>{affair.images[0] && <img src={affair.images[0].url} alt="Event" />}</li>
            <li>{affair.name}</li>
            <li>{affair.dates.start.localDate}</li>
            <li>{affair.url}</li>
            <li>{venue && venue.name}</li>
        </ul>
    </div>
  );
}
