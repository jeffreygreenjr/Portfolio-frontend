import "../styles/Home.css"
import React from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';

// IMPORT COMPONENTS
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

// IMPORT PAGES
// import About from "./About";
// import Projects from "./Projects";

function Home(props) {


  return (
    <div clasName="HomePage">

      <div className="HomePageContainer" id="home">
        <h1 className="Heading">Hello World,<br/>
          My Name's Jeffrey Green!
          </h1>
        <h2 className="SubHeading">
        <span className="noun">I am a {""}
        <Typewriter
          words={['Software Engineer.', 'Web Developer.', 'Learner.']}
          loop={false}
          cursor
          cursorStyle='_'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
        <Cursor/>
        </span>
        </h2>
      </div>

      <div className="AboutContainer" id="about">
        <About />
      </div>

      <div className="ProjectsContainer" id="projects">
        <Projects />
      </div>
  
      <div className="ContactContainer" id="contact">
        <Contact />
      </div>
    </div>
  )
}

export default Home;