import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/RPGsThings.jpg";
import emotion from "../../Assets/Projects/rain-umbrella-vancouver-weather.jpg";
import editor from "../../Assets/Projects/rain-umbrella-vancouver-weather.jpg";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";


function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatify}
                            isBlog={false}
                            title="Chatcord"
                            description="Personal Chat Room or Workspace to share resources and hangout with friends build with Js, Socket.IO. The application has features which allows user for realtime messaging."
                            link="https://github.com/Audrius33/ChatCord"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={leaf}
                            isBlog={false}
                            title="Player vs Monsters game"
                            description="This game is created with React UI framework. The app's purpose is to fight monsters, buy weapons with special abilities. Each attack you will earn some gold and each weapon has special abilities. There is a leaderboard to see your gold as winner points. Register account for login. After login you will get 100 gold and 100 health."
                            link="https://github.com/Audrius33/monstersVsPlayer_CA"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={editor}
                            isBlog={false}
                            title="Weather app"
                            description="Realtime weather app. Data fetch: https://api.openweathermap.org/data/2.5/"
                            link="https://github.com/Audrius33/appWeather"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={suicide}
                            isBlog={false}
                            title="Quiz"
                            description="Quiz build created with JS and react framework."
                            link="https://github.com/Audrius33/Quiz"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={emotion}
                            isBlog={false}
                            title="User Api"
                            description="App created using Js and React framework. App`s purpose to create, read, update, delete User list."
                            link="https://github.com/Audrius33/UserList_ra"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
