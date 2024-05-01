import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Hey! I'm <span className="purple">Aashirwad Chauhan </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I am currently employed as a Software Engineer Intern at Nokia.
            <br />
            I am pursuing BE in Computer Science from Chandigarh University(2024 Batch).
            <br />
            <br /> */}

I'm <span className="purple">Aashirwad Chauhan </span>, a tech enthusiast on a journey of skill mastery. My transformative internship at Nokia Solutions and Networks opened my eyes to the art of crafting captivating user experiences. With expertise in JavaScript, Node.js, React.js, and MongoDB, I'm not just chasing challenges; I'm sculpting innovative solutions that leave a lasting impact.


            <br />
            <br />

            My Interest!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Adventure
            </li>
            <li className="about-activity">
              <ImPointRight /> Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
