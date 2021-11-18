import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function header() {
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">ECommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link>
                                <i class="fas fa-shopping-cart"></i> Cart
                            </Nav.Link>
                            <Nav.Link>
                                <i class="fas fa-user"></i> Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default header
