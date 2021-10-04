import React from 'react';

import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';

//import banner image
import banner from '../../images/about.jpg';

const About = () => {
  return (
    //Grid for show the contents
    <Container>
      <Row>
        <Col className="p-3">
          <img src={banner} className="w-100" alt="" srcset="" />
        </Col>
        <Col>
          {" "}
          <h5 className="p-3">
            Welcome to IT Care Institute: Where IT Leaders are Created
          </h5>
          IT Care Institute, one of the leading IT training institutes in
          Bangladesh offers the best training opportunities. It has been playing
          a vital role to eradicate the unemployment problem. No matter what is
          your background, we are offering 12 courses for you conducted by
          experienced trainers to advance your skills. ITC has tremendously
          well-decorated two campuses with upgraded equipment. Our students are
          very much happy with our culture, environment and outstanding training
          method. We are passionate about providing good service to our
          students. Thus, the students of this institute turn out to be
          successful marketers and establish their careers in various companies
          as well. We dedicatedly provide flexible training options such as
          online training, 24/7 support, lifetime post-training support, job
          placement and so on. We always maintain the standards of excellence
          which are visible on Facebook Reviews and Google Reviews.
        </Col>
      </Row>
    </Container>
  );
};

export default About;
