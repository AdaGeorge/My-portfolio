import React from "react";
import './styles/myProjects.css'
import rick from '../../assets/img/projects/rickandmorty.png'
import weather from '../../assets/img/projects/weatherapp.png'
import ecommerce from '../../assets/img/projects/ecommerce.png'

const MyProjects = () => {
  return (
    <section id="section2" className="my-portfolio">
      <div className="linea"></div>
      <div className="container-projects">
        <h2 className="title-projects">Projects</h2>
        <div className="myworks">
          <div className="project">
            <img className="img-poyect" src={rick} alt="proyecto" />
            <p className="project-info">-Responsive site where you can search for any location in the serie "Rick and Morty" and see all its residents </p>
            <a className="btn" href="https://rickandmortyapplocationfinder.netlify.app" target="_blank">
              Ver proyecto
            </a>
          </div>
          <div className="project">
            <img className="img-poyect" src={ecommerce} alt="projecto" />
            <p className="project-info">-Responsive electronic commerce site for electronic devices with a Neon design. Using Redux y React-router-dom</p>
            <a className="btn" href="https://ecommerce-neon.netlify.app" target="_blank">
              Ver proyecto
            </a>
          </div>
          <div className="project">
            <img className="img-poyect" src={weather} alt="projecto" />
            <p className="project-info">-Weather app where you can see your location temperature using geolocation</p>
            <a className="btn" href="https://weather-app-ada.netlify.app" target="_blank">
              Ver proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
