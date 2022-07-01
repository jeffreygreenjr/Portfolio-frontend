import "../styles/Contact.css";
import React from 'react';
import { ImGithub } from 'react-icons/im';
import { SiLinkedin } from 'react-icons/si';
import { MdOutlineMail } from 'react-icons/md';

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
            <a className="ContactLinks" href="mailto:jeffreygreen.dev@gmail.com"><MdOutlineMail size={35}/></a>
            <a className="ContactLinks" href="https://www.linkedin.com/in/jeffreygreenjr/"><SiLinkedin size={26}/></a>
            <a className="ContactLinks" href="https://github.com/jeffreygreenjr"><ImGithub size={28}/></a>
        </div>
        <div class="PageBreak">
            _______________________________________
        </div>
        <div className="ContactClosing">
            Happy Hacking!
        </div>
    </div>
  )
}

export default Contact