// IMPORT ASSETS
import HTMLlogo from '../assets/html.png';

import "../styles/About.css"
import React from 'react'

function About() {
  return (
    <div className="AboutContent">
        <div className="AboutBio">
            Full-Stack Engineer with a passion for building and maintaining applications with design and user experience at the forefront.
        </div>
        <div className="SkillsSection">
            <h3>LANGUAGES & FRAMEWORKS</h3>
            <div className="SkillsLogoContainer">
                <img className="SkillsLogo" src="https://i.imgur.com/VXfU8X6.png" alt="html"/>
                <img className="SkillsLogo" src="https://i.imgur.com/0S92Td7.png" alt="css"/>
                <img className="SkillsLogo" src="https://i.imgur.com/v7wGFls.png" alt="js"/>
                <img className="SkillsLogo" src="https://i.imgur.com/eKTRzmh.png" alt="bootstrap"/>
                <img className="SkillsLogo" src="https://i.imgur.com/qnnLds9.png" alt="vscode"/>
                <img className="SkillsLogo" src="https://i.imgur.com/t7tD2GQ.png" alt="python"/>
                <img className="SkillsLogo" src="https://i.imgur.com/1uKFDkI.png" alt="psql"/>
                <img className="SkillsLogo" src="https://i.imgur.com/9hbw0pb.png" alt="node"/>
                <img className="SkillsLogo" src="https://i.imgur.com/HJQwz8j.png" alt="react"/>
            </div>
        </div>
        
    </div>
  )
}

export default About