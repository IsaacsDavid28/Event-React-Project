import { useContext } from "react";
import EventContext from "../context/EventContext";
import { EventContextModel } from "../context/EventContextModel";
import { Affair } from "../models/Events";
import { EventItem } from "./EventItem";

export function BucketListRoute() {
  const { event } = useContext(EventContext);
  return (
    <div className="BucketListRoute">
      <ol>
        {event.map((event) => (
          <li key={event.name}>
            {event.name} {event.dates.start.localDate}
          </li>
        ))}
      </ol>
    </div>
  );
}
