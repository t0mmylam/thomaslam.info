import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInfoCircle,
  FaBriefcase,
  FaProjectDiagram,
} from "react-icons/fa";
import Logo from "../Logo";
import "./index.css";

function Navbar() {
  return (
    <header>
      <div className="menu" style={{'--logo': '4px'}}>
        <Logo />
        <div className="nav">
          <div className="nav-words">
            <NavLink className="nav-links underline-hover-effect" to="/about">
              About
            </NavLink>
            <NavLink
              className="nav-links underline-hover-effect"
              to="/experience"
            >
              Experience
            </NavLink>
            <NavLink
              className="nav-links underline-hover-effect"
              to="/projects"
            >
              Projects
            </NavLink>
          </div>
          <div className="nav-icons">
            <NavLink className="nav-links underline-hover-effect" to="/about">
              <FaInfoCircle />
            </NavLink>
            <NavLink className="nav-links underline-hover-effect" to="/">
              <FaBriefcase />
            </NavLink>
            <NavLink className="nav-links underline-hover-effect" to="/">
              <FaProjectDiagram />
            </NavLink>
          </div>
          <a
            className="icons underline-hover-effect nav-links"
            href="https://github.com/t0mmylam/"
          >
            <FaGithub />
          </a>
          <a
            className="icons underline-hover-effect nav-links"
            href="https://Navlinkedin.com/in/thslam/"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
