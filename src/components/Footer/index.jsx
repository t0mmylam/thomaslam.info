import React from "react";
import { Link } from "react-router-dom";
import { FaRandom } from "react-icons/fa";
import "./index.css";

function Footer({switchColor}) {
  return (
    <footer>
      <div className="footer-icons">
        <p id="footer-p">
          Send me an email at{" "}
          <Link to="mailto:bqs7kc@virginia.edu">bqs7kc@virginia.edu</Link>
        </p>
        <button onClick={switchColor} className="footer-button">
          <FaRandom />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
