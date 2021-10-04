import './Home.css';

import React from 'react';

import {
  Card,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

import Common from '../../hooks/Common';
import Banner from '../Banner/Banner';

const Home = () => {
  //using custom hooks
  const [service] = Common();
  let b = service.slice(1, 5);
  return (
    <div>
      <Banner></Banner>
      <div className="row">
        {b.map((item) => (
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
    </div>
  );
};

export default Home;
