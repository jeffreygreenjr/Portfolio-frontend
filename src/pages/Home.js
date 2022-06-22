import "../styles/Home.css"
import React from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';

function Home(props) {
  return (
    <div clasName="HomePageContainer">
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
  )
}

export default Home;