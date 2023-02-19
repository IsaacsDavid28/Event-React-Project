import { useContext } from "react";
import EventContext from "../context/EventContext";
import EventContextProvider from "../context/EventContextProvider";
import { EventContextModel } from "../context/EventContextModel";
import { Affair } from "../models/Events";
import { EventItem } from "./EventItem";

export function BucketListRoute() {
  const { event } = useContext(EventContext);
  const { removeEvent } = useContext(EventContext);

  return (
    <div className="BucketListRoute">
      <ol>
        {event.map((event) => (
          <>
            <li key={event.name}>
              {event.name} {event.dates.start.localDate}
              <button
                className="RemoveEvent"
                onClick={() => removeEvent(event.id)}
              >
                Remove from BucketList
              </button>
            </li>
          </>
        ))}
      </ol>
    </div>
  );
}
