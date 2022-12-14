import React from "react";
import { Link } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";
import "./index.css";

function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <Link className="nav-links underline-hover-effect" to="/">
          <FaRegEnvelope />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
