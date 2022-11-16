import React from 'react';
import { Container, Button, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';
import '../App.css'

export default function Menu() {
  return (

    <>
      <Navbar fixed='top' key='md' bg="dark" variant="dark" expand="md" className="">
        <Container fluid>
          <Navbar.Brand >Psyc Chek</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <LinkContainer to="/">
                  <Nav.Link>  Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/showappt">
                  <Nav.Link >Check Appointment</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link>  About us</Nav.Link>
                </LinkContainer>
              </Nav>

              <Link to="/signup" ><Button variant="outline-success">Sign Up</Button></Link>
              <Link to="/login" ><Button variant="outline-success">Login</Button></Link>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}
