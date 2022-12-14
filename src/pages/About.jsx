import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-wrapper">
      <h1>About Thomas Lam</h1>
      <p>
        I'm currently a first-year at the{" "}
        <a
          href="https://www.virginia.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Virginia
        </a>{" "}
        studying Computer Science. I am passionate about programming because it
        gives me the ability to tackle intricate problems that make a difference
        in people's lives. In the future, I hope to as a Software Engineer on
        projects that have a meaningful impact on the world.
      </p>
    </div>
  );
}

export default Home;
