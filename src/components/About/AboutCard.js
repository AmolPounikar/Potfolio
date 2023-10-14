import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Amol Pounikar </span>
            from <span className="purple">Maharashtra, India.</span>
            <br /> I am a manufacture engineer, graduated in 2021 from GTU
            University.
            <br /> I have a passion for technology, and I kickstarted my
            career as a software developer during my internship at
            Skillhub-IT-Solution in Aurangabad.
            <br /> Currently, I am working as a Software Developer at Peerbits
            Solution.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Thing's
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          {/* 
            <p style={{ color: "rgb(155 126 172)" }}>
              "Strive to build things that make a difference!"{" "}
            </p>
            <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
