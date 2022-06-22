import "../components/styles/Header.css"
import { Link } from "react-router-dom";
import { getSuggestedQuery } from "@testing-library/react";

function Header(props) {
  //inline style for the nav tag
//   const navStyle = {
//     display: "flex",
//     justifyContent: "space-around",
//     backgroundColor: "grey",
//     border: "3px solid black",
//     padding: "8px",
//     width: "90%",
//     margin: "auto",
//   };

  return (
    <header>
      <nav className="NavBar">
        <div className="LeftNav">
          <Link className="NavLinks" to="/">
            JEFFREY GREEN
          </Link>
        </div>
        <div className="RightNav">
          <Link className="NavLinks" to="/about">
            ABOUT
          </Link>
          <Link className="NavLinks" to="/about">
            SKILLS
          </Link>
          <Link className="NavLinks" to="/projects">
            PROJECTS
          </Link>
          <Link className="NavLinks" to="/projects">
            RESUME
          </Link>
          </div>
      </nav>
    </header>
  );
}

export default Header;