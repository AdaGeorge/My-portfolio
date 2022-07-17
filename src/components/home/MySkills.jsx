import React from "react";
import './styles/mySkills.css'
// import {FaHtml5, FaReact, FaNpm, FaGit, FaGithub, FaCss3} from 'react-icons/fa'
// import { SiNetlify, SiJavascript } from 'react-icons/si'

const MySkills = () => {
  return (
    <>
    <div className="linea"></div>

      <h2 className="title-skills">My Skills</h2>

    <div className="all-skills">

      <div className="my-skills">
        <div className="skills-info">
          <h2 className="card-name-skills">My Tech Skills</h2>
          <div className="skills-item">
            <h4 className="skills-tech">HTML</h4>
            <p>1 año</p>
          </div>
          <div className="skills-item">
            <h4 className="skills-tech">CSS</h4>
            <p>6 meses</p>
          </div>
          <div className="skills-item">
            <h4 className="skills-tech">JavaScript</h4>
            <p>15 meses</p>
          </div>
        </div>
        <div className="cuandro-skills"></div>
        <div className="cuadro-skills-2"></div>
      </div>

      <div className="my-skills">
        <div className="skills-info">
          <h2 className="card-name-skills">My Soft Skills</h2>
          <div className="skills-item">
            <h4 className="skills-tech">Creativity</h4>
          </div>
          <div className="skills-item">
            <h4 className="skills-tech">Flexibility</h4>
          </div>
          <div className="skills-item">
            <h4 className="skills-tech">Integrity</h4>
          </div>
          <div className="skills-item">
            <h4 className="skills-tech">Collaboration</h4>
          </div>
          <div className="skills-item">
            <h4 className="skills-tech">Responsibility</h4>
          </div>
        </div>
        <div className="cuandro-skills"></div>
        <div className="cuadro-skills-2"></div>
      </div>

    </div>
   
    </>
  );
};

export default MySkills;
