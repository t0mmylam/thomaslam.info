import React from "react";
import { NavLink, Link } from "react-router-dom";

function About() {
  return (
    <div className="page-wrapper">
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
        in people's lives. In the future, I hope to work as a Software Engineer
        on projects that have a meaningful impact on the world.
      </p>
      <p>
        Check out some of the <NavLink to="/projects">projects</NavLink> that
        I've created and worked on!
      </p>
      <p>
        Outside of work, I enjoy listening to a variety of{" "}
        <a
          href="https://open.spotify.com/user/lam.tommy?si=c740f4e06b1b4e25"
          target="_blank"
          rel="noopener noreferrer"
        >
          music
        </a>
        . Some of my favorite genres include pop, rock, and indie. I also love
        snowboarding and have had the opportunity to visit some amazing resorts
        like Snowbird, Breckenridge, and Park City. At some point in the future,
        I hope to fulfill my dreams of visiting a resort amidst the peaks
        of the European Alps.
      </p>
    </div>
  );
}

export default About;
