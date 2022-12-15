import React, { useState, useEffect } from "react";
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
  const [scroll, setScroll] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <header className={scroll ? "scrolled" : ""}>
      <div className={scroll ? "menu scrolled" : "menu"} style={{'--logo': '4px'}}>
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
