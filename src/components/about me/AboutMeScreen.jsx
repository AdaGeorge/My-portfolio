import React from "react";
import { Link } from "react-router-dom";
import imgAboutMe from "../../assets/img/IMG_0665.jpg";
import "../home/styles/aboutMe.css";
import "./styles/aboutMeScreen.css";

const AboutMe = () => {
  return (
    <div className="about-me-screen">
      <section id="section1" className="about-me">
        <div className="profile-image">
          <img src={imgAboutMe} alt="" />
        </div>

        <div className="about-me-letters">
          <h4>Who am I</h4>

          <h2 className="about-me-name">ADA GEORGE</h2>

          <div className="about-me-info">
            <h2>Front-End Developer</h2>
            <p>
              I'm a Front-End Developer born in Venezuela and currently living
              in Mexico. Engaged on the programming world since 2021. I enjoy
              turning complex problems into simple, combining the worlds of
              logic and creative design to make eye-catching, accesible, and
              user-friendly websites and applications.
            </p>
            <br />
            <p>
              I'm a fast learner, hard worker and a team player. I enjoy
              spending my time learning and improving my skills. often dreaming
              on working in a place where I grow my abilities among other
              developers and the company crew. When I'm not coding you'll find
              me reading or tattooing.
            </p>
          </div>

          <div className="about-me-buttons">
            <Link to="/contact" className="btn">
              Hire Me!
            </Link>
            <a
              href="https://drive.google.com/file/d/1F-GsmpZvpI-gPRALDb6xPQFKwN_9Ru4B/view?usp=sharing"
              className="btn"
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="linea"></div>
      </section>
    </div>
  );
};

export default AboutMe;
