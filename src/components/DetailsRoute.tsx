import { Affair } from '../models/Events';
import EventContext from '../context/EventContext';
import { useContext, useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardLink, CardText, Button } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';

export function DetailsRoute () {

  //after get id, call function to service and provide id. 

  //this component will need a state to keep track of event.
  const {id} = useParams();

  const [detailsRoute, setDetailsRoute] = useState<Affair>();

 

  return (
    <div className="DetailsRoute">
      
    </div>
  );
}
