import "../styles/Contact.css";
import React from 'react';
import { ImGithub } from 'react-icons/im';
import { SiLinkedin } from 'react-icons/si';

function Contact() {
  return (
    <div className="ContactPage">
        <div className="ContactHeading">
            LET'S COLLABORATE!
        </div>
        <div className="ContactSubHeading">
            I'd love to hear from you. Shoot me an email or follow me on LinkedIn and GitHub.
        </div>
        <div className="ContactForm">
            <a className="ContactLinks" href="https://www.linkedin.com/in/jeffreygreenjr/"><SiLinkedin /></a>
            <a className="ContactLinks" href="https://github.com/jeffreygreenjr"><ImGithub /></a>
        </div>
        <div className="ContactClosing">
            Happy Hacking!
        </div>
    </div>
  )
}

export default Contact