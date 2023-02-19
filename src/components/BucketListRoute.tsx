import { useContext } from "react";
import EventContext from "../context/EventContext";
import EventContextProvider from "../context/EventContextProvider";
import { EventContextModel } from "../context/EventContextModel";
import { Affair } from "../models/Events";
import { EventItem } from "./EventItem";
import { Button, Card, CardBody, CardDeck, CardLink, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

export function BucketListRoute() {
  const { event } = useContext(EventContext);
  const { removeEvent } = useContext(EventContext);

  const venue = event[0]._embedded.venues[0];

  return (
    <div className="BucketListRoute">
      <Row>
        {event.map((event) => (
          <Col lg="4">
            <CardDeck>
      <div className="EventItem">
        <Card>
          {event.images[0] && (
            <img
              src={event.images[0].url}
              alt="Event"
              style={{ height: "200px" }}
            />
          )}
          <CardBody>
            <CardTitle tag="h5">{event.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {event.dates.start.localDate}
            </CardSubtitle>
            <CardLink href={event.url} target="_blank">
              Buy Tickets
            </CardLink>
            <CardText>{venue && venue.name}</CardText>
            <Link to={`/detailsroute/${event.id}`}>Details</Link>
            <Button className="AddEvent" onClick={() => removeEvent(event.id)}>
              Remove From BucketList
            </Button>
          </CardBody>
        </Card>
      </div>
    </CardDeck>
          </Col>
        ))}
        </Row>
    </div>
  );
}
