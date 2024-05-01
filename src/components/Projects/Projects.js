import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import ct from "../../Assets/Projects/CryptoTraders.png";
import pp from "../../Assets/Projects/PrimePicks.png";
import qs from "../../Assets/Projects/QuickSync.png";
import tdb from "../../Assets/Projects/TODOBaller.png";
import wx from "../../Assets/Projects/WordX.png";
import { CgWebsite } from "react-icons/cg";
import Card from "react-bootstrap/Card";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wx}
              isBlog={false}
              title="WordX"
              description="Designed and developed a Real Time Chatting using MERN stack which leverages CRUD Operation with SOCKET for real time events."
               ghLink="https://github.com/Aashirwad-Chauhan/wordx-server"
              demoLink="https://wordx-frontend-m64i.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pp}
              isBlog={false}
              title="Prime Picks"
              description="Developed a website dedicated to shopping entusiast using MERN stack which leverages features like authentication, caching, payment gateway and admin dashboard to handle products and shipment."
              ghLink="https://github.com/Aashirwad-Chauhan/E-commerce-Frontend-MERN-"
              demoLink="https://e-commerce-frontend-mern.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qs}
              isBlog={false}
              title="Quick Sync"
              description="Developed the Real time meeting app which uses and leverages powerful 3rd party tools like CLERK and Stream for auth and real time calling."
              ghLink="https://github.com/Aashirwad-Chauhan/quick-sync"
              demoLink="https://quick-sync.vercel.app/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tdb}
              isBlog={false}
              title="TODO-Baller"
              description="Developed a basic todo app with MERN stack while learning the basics of backend and frontend development and integration across the same."
              ghLink="https://github.com/Aashirwad-Chauhan/TODOBALLER-BACKEND"
              demoLink="https://todo-frontend-opal-seven.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ct}
              isBlog={false}
              title="Cryto Traders"
              description="Developed a simple cryto trading website which utilizes and leverages the Crypto API which shows real time value, market rates and ranks."
              ghLink="https://github.com/Aashirwad-Chauhan/CryptoTraders"
              demoLink="https://crypto-traders-five.vercel.app/"
            />
          </Col>
         
        </Row>
        <Row>
        <h1 className="project-heading">
          My Coding <strong className="purple">Profiles</strong>
        </h1>
        <Col md={4} className="project-card">
          <Card className="project-card-view codingprofile">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        <Card.Title>Leetcode</Card.Title>
        {/* <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text> */}
        <Button
            variant="primary"
            href="https://leetcode.com/u/Aashirwad_Chauhan/"
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Explore"}
          </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        
      </Card.Body>
    </Card>
    </Col>
    <Col md={4} className="project-card">
    <Card className="project-card-view codingprofile">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        <Card.Title>GFG</Card.Title>
        {/* <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text> */}
        <Button
            variant="primary"
            href="https://www.geeksforgeeks.org/user/aashirwadchauhan25/"
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Explore"}
          </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        
      </Card.Body>
    </Card>
    </Col>
    <Col md={4} className="project-card">
    <Card className="project-card-view  codingprofile">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        <Card.Title>Coding Ninjas</Card.Title>
        {/* <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text> */}
        <Button
            variant="primary"
            href="https://www.naukri.com/code360/profile/3aeb6208-cdae-42cf-81aa-d43e6eb0faaf"
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Explore"}
          </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        
      </Card.Body>
    </Card>
 </Col>
    </Row>
      </Container>
    </Container>
  );
}

export default Projects;
