import React from "react";
import "./styles/homeScreen.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";


const HomeScreen = () => {
  return (
    <>
      <header className="header">
        <div className="home">
          <div className="home-text">
            <h1 className="hi">Welcome!</h1>
            <p className="iam">I am </p>
            <div className="contenedor-animacion">
              <ul className="animation-text">
                <li>Ada George</li>
                <li>a Web Developer</li>
                <li>a Front-End Dev</li>
              </ul>
            </div>
          </div>
          <div className="home-social-links">
            <a href='https://github.com/AdaGeorge' target='_blank'><FaGithub/></a>
            <a href="https://api.whatsapp.com/send?phone=00522211066608" target='_blank'><FaWhatsapp/></a>
            <a href='https://www.linkedin.com/in/adashi-george-987a04231/' target='_blank'><FaLinkedin/></a>
            
            
          </div>
        </div>
      </header>
      <main>
        <AboutMe/>
        <MyProjects/>
        <ContactMe/>
      </main>
    </>
  );
};

export default HomeScreen;
