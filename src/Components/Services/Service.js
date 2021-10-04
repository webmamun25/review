import React from 'react';

//import react-bootstrap
import {
  Card,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

import Common from '../../hooks/Common';

const Service = () => {
  //using custom hooks
  const [service] = Common();
  return (
    <div className="row">
      {service.map((item) => (
        <div className="col-md-3 p-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.serviceName}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Procedure:{item.Procedure}</ListGroupItem>
              <ListGroupItem>
                Seat Remaining:{item.number_of_seats}
              </ListGroupItem>
              <ListGroupItem>Price:{item.price}tk</ListGroupItem>
            </ListGroup>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Service;
