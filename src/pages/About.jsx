import React from "react";
import { NavLink } from "react-router-dom";

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
        in people's lives. Check out some of the{" "}
        <NavLink to="/projects">projects</NavLink> that I've created and worked
        on! In the future, I hope to work as a Software Engineer on projects
        that have a meaningful impact on the world.
      </p>
      <p>
        Over the past summer, I intered at{" "}
        <a href="https://nask.world/" target="_blank" rel="noopener noreferrer">
          NASK Incorporated
        </a>{" "}
        as part of the{" "}
        <a
          href="https://brewlytics.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          brewlytics
        </a>{" "}
        team. I built regression tests for the CI/CD pipeline, a CLI that
        interacts with the MongoDB backend in Go, and a functional block that
        parses a mathemetical expression to perform complex arithmetic on a
        PostgreSQL table.
      </p>
      <p>
        At UVA, I work as a developer for{" "}
        <a
          href="https://thecourseforum.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          theCourseForum.com
        </a>
        , a place for students to share reviews for courses. I'm also working
        with a team of professors and students to build a office hours queue
        that implements AI to group students. At the same time, I'm developing a
        Q&A bot that uses natural language processing to answer student
        questions. Outside of writing code, I'm working with a team to write a
        research paper on CS Education through{" "}
        <a
          href="https://engineering.virginia.edu/departments/computer-science/computer-science-research"
          target="_blank"
          rel="noopener noreferrer"
        >
          UVA's Computer Science Department
        </a>{" "}
        to analyze student engagement in courses.
      </p>
      <p id="end">
        Outside of work, I enjoy listening to a variety of{" "}
        <a
          href="https://open.spotify.com/user/lam.tommy?si=c740f4e06b1b4e25"
          target="_blank"
          rel="noopener noreferrer"
        >
          music
        </a>
        . Some of my favorite genres include pop, rap, and indie. I also love
        snowboarding and have had the opportunity to visit some amazing resorts
        like Snowbird, Breckenridge, and Park City. At some point in the future,
        I hope to fulfill my dreams of visiting a resort amidst the peaks of the
        European Alps.
      </p>
    </div>
  );
}

export default About;
