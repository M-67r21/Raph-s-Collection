import React from 'react';
import { Navbar, Nav, Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className=""
        style={{
        fontSize: "1rem",
        fontWeight: "700",
        position: "fixed", 
        top: "0", 
        width: "100%",
        zIndex: "1000",
        backgroundColor:"#FFF",
        color:"#004aad",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}
    >
      <Container>
        <Row className="w-100 align-items-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Col xs={4} md ={4} className="text-start" >
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/men" href="#men" style={{color:"#004aad"}}>Men</Nav.Link>
                        <Nav.Link as={Link} to="/women" href="#women" style={{color:"#004aad"}}>Women</Nav.Link>
                        <Nav.Link as={Link} to="/kids" href="#kids" style={{color:"#004aad"}}>Kids</Nav.Link>
                        <Nav.Link as={Link} to="/new" href="#new" style={{color:"#004aad"}}>New & Featured</Nav.Link>
                    </Nav>
                </Col>

                <Col xs={4} md ={4} className="text-center">
                    <Nav>
                        <Navbar.Brand as={Link} to="/" href="#home" className='ms-auto'
                            style={{
                                fontSize: "2.3rem",
                                fontWeight: "700",
                                color:"#004aad",
                            }}
                        >   
                        Raph's Collection
                        </Navbar.Brand>
                    </Nav>
                </Col>

                <Col xs={4} md ={4} className="text-end">
                    <Nav className="justify-content-end">
                        <Form className="d-flex"
                            style={{
                                width: "6rem"
                            }}
                        >
                            <FormControl type="search" placeholder="Search" className="me-2" />
                        </Form>
                        <Nav.Link as={Link} to="/cart" href="#cart" style={{color:"#004aad"}}>Cart</Nav.Link>
                        <Nav.Link as={Link} to="/login" href="#login" style={{color:"#004aad"}}>Login</Nav.Link>
                    </Nav>
                </Col>
            </Navbar.Collapse>
            
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;
