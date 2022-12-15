import React from "react";
import Logo from "../components/Logo";
import {
  FaGithub,
  FaLinkedin,
  FaInfoCircle,
  FaBriefcase,
  FaProjectDiagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-wrapper" style={{ "--logo": "8px" }}>
      <Logo />
      <h1 id="title">Thomas Lam</h1>
      <span className="sub">Student Developer</span>
      <div className="home-buttons">
        <Link to='/about' className='button'><span id='button-content'>About</span></Link>
        <Link to='/projects' className='button'><span id='button-content'>Projects</span></Link>
      </div>
    </div>
  );
}

export default Home;
