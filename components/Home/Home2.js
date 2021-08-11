import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import {
    AiFillGithub,
 } from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={12} className="home-about-description">
                        <h1 style={{fontSize: "2.6em"}}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I started programming from scratch like 9 months ago and I thought I knew a little about it.
                            And now I understand how much I need to learn and what can I achieve with such technologies.
                            That is why I am eager to learn more.
                            <br/>
                            <br/>I am fluent in classics like
                            <i>
                                <b className="purple"> Javascript, HTML, CSS. </b>
                            </i>
                            <br/>
                            <br/>
                            My field of Interest's are building new &nbsp;
                            <i>
                                <b className="purple">Web Technologies and Products </b> and
                                also in areas related to{" "}
                                <b className="purple">
                                    Deep Learning and Natural Launguage Processing.
                                </b>
                            </i>
                            <br/>
                            <br/>
                            I also apply my passion for developing products with
                            <i>
                                <b className="purple"> Modern Javascript Frameworks</b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> Node.js and React.js</b>
                            </i>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/Audrius33"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub/>
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/audrius-ambrazevicius-3003701a7/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;
