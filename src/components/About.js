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
            <h3 className="SkillsHeading">TECHNOLOGIES</h3>
            <div className="SkillsLogoContainer">
                <img className="SkillsLogo" src="https://i.imgur.com/VXfU8X6.png" alt="html"/>
                <img className="SkillsLogo" src="https://i.imgur.com/0S92Td7.png" alt="css"/>
                <img className="SkillsLogo" src="https://i.imgur.com/v7wGFls.png" alt="js"/>
                <img className="SkillsLogo" src="https://i.imgur.com/eKTRzmh.png" alt="bootstrap"/>
                <img className="SkillsLogo" src="https://i.imgur.com/t7tD2GQ.png" alt="python"/>
                <img className="SkillsLogo" src="https://i.imgur.com/1uKFDkI.png" alt="psql"/>
                <img className="SkillsLogo" src="https://user-images.githubusercontent.com/102068506/175063942-f99be1be-a8b8-4509-bd19-faa13bfebc5e.png" alt="mongodb"/>
                <img className="SkillsLogo" src="https://i.imgur.com/9hbw0pb.png" alt="node"/>
                <img className="SkillsLogo" src="https://i.imgur.com/HJQwz8j.png" alt="react"/>
                <img className="SkillsLogo" src="https://user-images.githubusercontent.com/102068506/175064231-85d30200-9ea2-4fae-85f1-c10082b66bb7.png" alt="graphql"/>
            </div>
        </div>
        <div className="AboutMisc">
            <h3 className="MiscHeading">FUN FACTS</h3>
            <p className="facts">I get paid to travel and take photos 📸</p>
            <p className="facts">Not much of a weight lifter, but I exercise daily in a number of sports: Soccer, Hockey, Muay Thai, Brazilian Jiu Jitsu, etc 💪</p>
            <p className="facts">Music is my love language 🎵</p>
        </div>
        
    </div>
  )
}

export default About