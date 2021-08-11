import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Developed by Audrius Ambrazevičius</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year} </h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/Audrius33"
                                style={{color: "white"}}
                            >
                                <AiFillGithub/>
                            </a>
                        </li>

                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/audrius-ambrazevicius-3003701a7/"
                                style={{color: "white"}}
                            >
                                <FaLinkedinIn/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
