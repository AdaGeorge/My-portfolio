import React from "react";
import { Link } from "react-router-dom";
import imgAboutMe from "../../assets/img/IMG_0665.jpg";
import MySkills from "./MySkills";
import "./styles/aboutMe.css";

const AboutMe = () => {
  return (
    <>
        <div className="linea"></div>
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
            I'm a Front-End Developer born in Venezuela and currently living in Mexico. 
            Engaged on the programming world since 2021. 
            I enjoy turning complex problems into simple, 
            combining the worlds of logic and creative 
            design to make beautiful, accesible, and user-friendly 
            websites and applications. 
            </p>
          </div>

          <div className="about-me-buttons">
            <Link to="/contact" className="btn">
              Hire Me!
            </Link>
            <a href="https://drive.google.com/file/d/1F-GsmpZvpI-gPRALDb6xPQFKwN_9Ru4B/view?usp=sharing" className="btn" target='_blank'>
              Download CV
            </a>
          </div>
        </div>
      </section>

      <MySkills />
    </>
  );
};

export default AboutMe;
