import "../styles/Home.css"
import React from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';

// IMPORT COMPONENTS
import About from '../components/About';

// IMPORT PAGES
// import About from "./About";
import Projects from "./Projects";

function Home(props) {


  return (
    <div clasName="HomePage">

      <div className="HomePageContainer" id="home">
        <h1 className="Heading">Hello World, I'm Jeffrey!</h1>
        <h2 className="SubHeading">
        <span className="noun">I am a {""}
        <Typewriter
          words={['Software Engineer.', 'Web Developer.', 'Student.']}
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
  
    </div>
  )
}

export default Home;