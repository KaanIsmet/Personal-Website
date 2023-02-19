import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Col, Row} from "react-bootstrap"
function FooterComponent() {
    return (
        <footer className="bg-primary text-light fixed-bottom">
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        &copy; {new Date().getFullYear()} Kaan Okul. All rights reserved
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterComponent