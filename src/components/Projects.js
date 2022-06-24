import "../styles/Projects.css";
import React from 'react';
import { ImGithub } from 'react-icons/im';
import { MdOpenInNew } from 'react-icons/md';

function Projects() {

  return (

    <div className="ProjectPage">
        <div className="ProjectsHeader">
            PROJECTS
        </div>
        <div className="ProjectsSection">
            <div className="Project" id="Project1">
                <img src="https://i.imgur.com/ZkaGo48.png" alt="twitterscreenshot"/>
                <h4>ELON MUSK'S TWITTER</h4>
                <p>Reverse engineered a full-stack web application that utilizes full CRUD operations as well user authorization/authentication in a paired-programming setting with github for version control.</p>
                <div className="ProjectLinks">
                    <a className="ContactLinks" href="https://glacial-basin-38209.herokuapp.com/"><MdOpenInNew /></a>
                    <a className="ContactLinks" href="https://github.com/Arishamays1/Project_2"><ImGithub /></a>
                </div>
            </div>
            <div className="Project" id="Project2">
                <img src="https://user-images.githubusercontent.com/102068506/169447980-fb84a6b1-3195-4e2b-b563-82024645846b.png" alt="marvelscreenshot"/>
                <h4>EXPLORE MARVEL UNIVERSE</h4>
                <p>Developed a modular and modern frontend React application fetching data from a third-party RESTful API requiring public, private, and a MD5 hash key encryption.</p>
                <div className="ProjectLinks">
                    <a className="ContactLinks" href="https://jeffreygreen-cars-collector.herokuapp.com/"><MdOpenInNew /></a>
                    <a className="ContactLinks" href="https://github.com/jeffreygreenjr/Project3-React-Marvel"><ImGithub /></a>
                </div>
            </div>
            <div className="Project" id="Project3">
            <img src="https://user-images.githubusercontent.com/102068506/171906132-bda8a863-841e-40b8-b486-3d3e6e2da295.jpg" alt="carsscreenshot"/>
                <h4>CAR COLLECTOR APP</h4>
                <p>Built a full-stack web application with python servers and PostgreSQL databases with the full-featured framework Django styled with Bulma, a CSS framework.</p>
                <div className="ProjectLinks">
                    <a className="ContactLinks" href="https://jeffreygreen-marvel-react-api.netlify.app"><MdOpenInNew /></a>
                    <a className="ContactLinks" href="https://github.com/jeffreygreenjr/django_cars_collector"><ImGithub /></a>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Projects