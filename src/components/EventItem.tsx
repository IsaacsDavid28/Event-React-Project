import * as React from 'react';
import { Affair } from '../models/Events';
import { text } from 'stream/consumers';

export interface IEventItemProps {
    affair: Affair
}

export function EventItem (props: IEventItemProps) {
    let {affair} = props

    const venue = affair._embedded.venues[0]

  return (
    <div className='EventItem'>
        <ul>
            <li>{affair.images[0] && <img src={affair.images[0].url} alt="Event" style={{width:"150px", height:"150px"}}/>}</li>
            <li>{affair.name}</li>
            <li>{affair.dates.start.localDate}</li>
            <li><a href={affair.url} target="_blank">Buy Tickets</a></li>
            <li>{venue && venue.name}</li>
            <button>Details</button>
            <button>Add to BucketList</button>
        </ul>
    </div>
  );
}
