import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiNpm,
    DiHtml5,
    DiCss3,
    DiBootstrap,
    DiDocker,
    DiGithubFull

} from "react-icons/di";


function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>

            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNpm/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiHtml5/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiBootstrap/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiDocker/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGithubFull/>
            </Col>
        </Row>
    );
}

export default Techstack;
