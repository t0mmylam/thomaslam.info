import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaProjectDiagram,
} from "react-icons/fa";
import Logo from "../Logo";
import "./index.css";

function Navbar() {
  return (
    <header>
      <Logo />
      <div className="nav">
        <div className="nav-words">
          <Link className="nav-links underline-hover-effect" to="/">
            Home
          </Link>
          <Link className="nav-links underline-hover-effect" to="/about">
            About
          </Link>
          <Link className="nav-links underline-hover-effect" to="/experience">
            Experience
          </Link>
          <Link className="nav-links underline-hover-effect" to="/projects">
            Projects
          </Link>
        </div>
        <div className="nav-icons">
          <Link className="nav-links underline-hover-effect" to="/">
            <FaHome />
          </Link>
          <Link className="nav-links underline-hover-effect" to="/">
            <FaInfoCircle />
          </Link>
          <Link className="nav-links underline-hover-effect" to="/">
            <FaBriefcase />
          </Link>
          <Link className="nav-links underline-hover-effect" to="/">
            <FaProjectDiagram />
          </Link>
        </div>
        <a
          className="icons underline-hover-effect nav-links"
          href="https://github.com/t0mmylam/"
        >
          <FaGithub />
        </a>
        <a
          className="icons underline-hover-effect nav-links"
          href="https://linkedin.com/in/thslam/"
        >
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
