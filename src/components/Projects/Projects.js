import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bitsOfCode from "../../Assets/Projects/blog.png";
import IMDB from "../../Assets/Projects/imdb_img.png";
import portfolio from "../../Assets/Projects/portfolio_img.jpg";
import quiz from "../../Assets/Projects/quiz-background.png";
import admin from "../../Assets/Projects/admin-dashboard.png";
import realEstate from "../../Assets/Projects/real-estate-image.jpg";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

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
              imgPath={IMDB}
              isBlog={false}
              title="IMDB clone"
              description="Immersive IMDB clone application using React.js, CSS, React-Bootstrap, and React-PDF. This feature-rich app offers users an engaging and intuitive interface reminiscent of the popular IMDB platform. With a seamless blend of design and functionality"
              ghLink="https://github.com/AmolPounikar/imdb-clone"
              demoLink="https://imdb-clone-amolpounikars-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ToDo Project"
              description="Crafted a streamlined Todo project with React.js, Bootstrap, CSS, and Redux for efficient task management. Seamlessly track and organize your tasks with an intuitive user interface, complete with state management for a smooth and responsive user experience."
              ghLink="https://github.com/AmolPounikar/todo"
              demoLink="https://melodious-dieffenbachia-a549cc.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realEstate}
              isBlog={false}
              title="Real-Estate Website"
              description="Designed a modern Real Estate platform using React.js, CSS, React-Bootstrap, React-Toolkit, and Tailwind CSS for a sleek user interface. Backed by Node.js, Express.js, and MongoDB, it offers efficient property management and seamless user experiences."
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Crafted my portfolio with React.js, enhancing it with React-Bootstrap for a responsive layout and React-tsparticles for interactive visuals. Custom CSS adds a personal touch, creating a unique showcase of my skills and projects."
              ghLink="https://github.com/AmolPounikar"
              demoLink="https://react-portfolio-basic-black.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz-App"
              description="Developed a dynamic quiz app using React.js, JavaScript, ReactBootstrap, and Mui CSS for the frontend, coupled with a robust backend powered by Node.js, MongoDB, and Express. Seamlessly create, manage, and participate in quizzes, enhancing user engagement and interaction."
              ghLink="https://github.com/AmolPounikar"
              demoLink="https://quiz-app-client-ruby.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin}
              isBlog={false}
              title="Quiz-App"
              description="Developed a dynamic Admin-Dashboard app using React.js, JavaScript, Mui CSS for the frontend, coupled with a robust backend powered. Seamlessly create, manage, and participate in admin panel, enhancing user engagement and interaction."
              ghLink="https://github.com/AmolPounika"
              demoLink="https://admin-dashboard1-six.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
