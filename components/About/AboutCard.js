import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        Hi Everyone, I am <span className="purple">Audrius Ambrazevičius from Lithuania, Kaunas. </span>

                        <br/>I am a FullStack Javascript developer
                        <br/>
                        <br/>
                        Apart from coding, i have other activities!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight/> Spending time with my family
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> CrossFiting
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Playing games
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
