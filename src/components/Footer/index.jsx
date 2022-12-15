import React from "react";
import { Link } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";
import "./index.css";

function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <p id='footer-p'>Send me an email at <a href='mailto:bqs7kc@virginia.edu'>bqs7kc@virginia.edu</a></p>
        <Link className="footer-icon underline-hover-effect" to="/">
          <FaRegEnvelope />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
