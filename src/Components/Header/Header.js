import './Header.css';

import React from 'react';

import {
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    //Menubar create here
    <div className="header-content">
      <div className="menubar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">IT CARE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <NavLink
                    to="/home"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#0dcaf0",
                    }}
                  >
                    HOME
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    to="/about"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#0dcaf0",
                    }}
                  >
                    ABOUT
                  </NavLink>
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link>
                  {" "}
                  <NavLink
                    to="/services"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    SERVICES
                  </NavLink>{" "}
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <NavLink
                    to="/statics"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "yellow",
                    }}
                  >
                    Statics
                  </NavLink>{" "}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
