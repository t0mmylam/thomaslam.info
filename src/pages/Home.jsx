import React from "react";
import Logo from "../components/Logo";
import {
  FaInfoCircle,
  FaProjectDiagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-wrapper">
      <h1 id="title">Thomas Lam</h1>
      <span className="sub">Student Developer</span>
      <div className="home-buttons">
        <Link to='/about' className='button'><FaInfoCircle />About</Link>
        {/*<Link to='/projects' className='button'><FaProjectDiagram />Projects</Link>*/}
      </div>
    </div>
  );
}

export default Home;
