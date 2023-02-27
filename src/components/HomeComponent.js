import React from "react";
import {useState} from "react";
import {Nav, Navbar, Button, Container, Row, Col} from "react-bootstrap";
function HomeComponent() {
    const [isDarkmode, setIsDarkmode] = useState(false)

    const handleDarkMode = () => {
        if (isDarkmode === false) {
            setIsDarkmode(true)
            document.body.style.backgroundColor = 'black'
        }
        else {
            setIsDarkmode(false)
            document.body.style.backgroundColor = 'white'
        }
    }

    return (
        <div className={`HomeComponent ${isDarkmode ? 'text-light' : ''}`}>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="">Kaan Okul</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Skills</Nav.Link>
                    <Nav.Link href="">Projects</Nav.Link>
                    <Button onClick={handleDarkMode}>DarkMode </Button>
                </Nav>
            </Navbar>
            <Container>
                <br/>
                <h2>Kaan Okul</h2><br/>
                <p className={"mb-5"}>Undergraduate at New Jersey Institute of Technology</p>
                <a href={"mailto:kaanismet7@gmail.com"}>Kaanismet7@gmail.com</a>
                <div className={"border-top border-2"}>
                    <h2>Relevant Courses</h2>
                    <p>
                        Database Systems Design & Management, Project Management, Web Application, Computer Networks, and Data Structures and Algorithms
                    </p>
                    <h2>Projects</h2>
                    <li>Employee management App</li>
                    <li>Photo Upload App</li>
                    <li>Video Store Website</li>
                </div>
            </Container>
            <footer className="border-top fixed-bottom">
                <Container>
                    <Row>
                        <Col className="text-center py-3">
                            &copy; {new Date().getFullYear()} Kaan Okul. All rights reserved
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default HomeComponent