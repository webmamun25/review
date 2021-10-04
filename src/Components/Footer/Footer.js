import './Footer.css';

import React from 'react';

const Footer = () => {
  return (
    // Footer section same for all route
    <div className="Footer">
      {" "}
      <h1 className="text-center">
        IT Care <br />
        Features We Provide Impressive Freatures For your Website. You can
        easily manage Your website. You will love it.
      </h1>
      <h1 className="text-center">
        <i className="bi bi-hand-thumbs-up p-3"></i>
        <i className="bi bi-instagram p-3"></i>
        <i className="bi bi-twitter p-3"></i>
      </h1>
    </div>
  );
};

export default Footer;
