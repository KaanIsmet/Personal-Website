import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
function HeaderComponent() {

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">My Blue Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default HeaderComponent