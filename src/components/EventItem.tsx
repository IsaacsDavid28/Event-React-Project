import * as React from 'react';
import { Affair } from '../models/Events';

export interface IEventItemProps {
    affair: Affair
}

export function EventItem (props: IEventItemProps) {
    let {affair} = props


  return (
    <div className='EventItem'>
        <ul>
            <li>{affair.name}</li>
            <li>{affair.url}</li>
            <li>{affair.dates.start.dateTBA}</li>
        </ul>
      
    </div>
  );
}
