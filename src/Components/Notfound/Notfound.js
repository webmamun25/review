import React from 'react';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import error from '../../images/error.jpg';

const Notfound = () => {
  return (
    <div className="w-50 mx-auto">
      <div>
        <img src={error} alt="" />
      </div>
      <div className="text-center">
        <Link to="/">
          <Button variant="primary mt-3 ">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
