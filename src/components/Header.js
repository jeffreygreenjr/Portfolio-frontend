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
      <h1>My Portfolio Page</h1>
      <nav className="NavBar">
        <Link className="NavLink" to="/">
          <div>HOME</div>
        </Link>
        <Link className="NavLink" to="/about">
          <div>ABOUT</div>
        </Link>
        <Link className="NavLink" to="/projects">
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;