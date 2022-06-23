import "../styles/Header.css"
import { Link } from "react-router-dom";
import { getSuggestedQuery } from "@testing-library/react";
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header(props) {


  return (
    <header>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="myColor" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home" className="justify-content-center fs-4">JEFFREY GREEN</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end fs-4">
            <Nav>
              <Nav.Link id="NavLink" href="#about">
                ABOUT
              </Nav.Link>
              <Nav.Link id="NavLink" href="#projects">
                PROJECTS
              </Nav.Link>
              <Nav.Link id="NavLink" href="#resume">
                RESUME
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>

      {/* <nav className="NavBar">
        <div className="LeftNav">
          <Link className="NavLinks" to="/">
            JEFFREY GREEN
          </Link>
        </div>
        <div className="RightNav">
          <Link className="NavLinks" to="/about">
            ABOUT
          </Link>
          <Link className="NavLinks" to="/about">
            SKILLS
          </Link>
          <Link className="NavLinks" to="/projects">
            PROJECTS
          </Link>
          <Link className="NavLinks" to="/projects">
            RESUME
          </Link>
          </div>
      </nav> */}
    </header>
  );
}

export default Header;