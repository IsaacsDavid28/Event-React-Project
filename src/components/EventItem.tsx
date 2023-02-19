import * as React from "react";
import { Affair } from "../models/Events";
import EventContext from "../context/EventContext";
import { useContext } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
  CardText,
  Button,
  CardDeck,
} from "reactstrap";
import { Link } from "react-router-dom";
import EventContextProvider from "../context/EventContextProvider";
import { GetEventById } from "../services/EventService";

export interface IEventItemProps {
  affair: Affair;
}

export function EventItem(props: IEventItemProps) {
  let { affair } = props;

  const venue = affair._embedded.venues[0];

  const { addEvent } = useContext(EventContext);

  return (
    <CardDeck>
      <div className="EventItem">
        <Card>
          {affair.images[0] && (
            <img
              src={affair.images[0].url}
              alt="Event"
              style={{ height: "200px" }}
            />
          )}
          <CardBody>
            <CardTitle tag="h5">{affair.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {affair.dates.start.localDate}
            </CardSubtitle>
            <CardLink href={affair.url} target="_blank">
              Buy Tickets
            </CardLink>
            <CardText>{venue && venue.name}</CardText>
            <Link to={`/detailsroute/${props.affair.id}`}>Details</Link>
            <Button className="AddEvent" onClick={() => addEvent(affair)}>
              Add to BucketList
            </Button>
          </CardBody>
        </Card>
      </div>
    </CardDeck>
  );
}
