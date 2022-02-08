import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';
import Home from '../Home';
import RestaurantsDetails from './RestaurantsDetails';


function header() {
    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg" stickey="top" collapseOnSelect>
        <Container>
        <Navbar.Brand href="#home">RESTAURANTS</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      </>
    )
}

export default header