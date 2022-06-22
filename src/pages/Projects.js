import "../styles/Projects.css"
import { useState, useEffect } from "react";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "projects");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {getProjectsData()}, [props.URL]);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (
      <div className="Projects" key={project.name}>
        <h1>{project.name}</h1>
        <a className="LiveSiteButton" href={project.live}>
        <img className="ProjectImage" src={project.image} alt={"fotos"}/>
        </a>
        <a className="GithubButton" href={project.git}>
          <button>Github</button>
        </a>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;