import React from "react";

function About() {
  return (
    <div className="page-wrapper">
      <h1>About Thomas Lam</h1>
      <p>
        I'm currently a sophomore transfer student at{" "}
        <a
          href="https://www.columbia.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Columbia University
        </a>{" "}
        studying Computer Science. I am passionate about programming because it
        gives me the ability to tackle challenging problems that make a
        difference in people's lives.
      </p>

      <p>
        At UVA, I worked as a developer for{" "}
        <a
          href="https://thecourseforum.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          theCourseForum.com
        </a>
        , a place for students to share reviews for courses. At the same time, I
        also participated in CS research projects. I worked with a team of
        professors and students to build a office hours queue that implements AI
        to group students. I also developed a Q&A bot that uses natural language
        processing to answer commonly asked student questions. Outside of
        writing code, I'm working with a team to write a research paper on CS
        Education through{" "}
        <a
          href="https://engineering.virginia.edu/departments/computer-science/computer-science-research"
          target="_blank"
          rel="noopener noreferrer"
        >
          UVA's Computer Science Department
        </a>{" "}
        to analyze student engagement in courses.
      </p>

      <p>
        This summer, I am interning at{" "}
        <a
          href="https://www.nutanix.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nutanix
        </a>{" "}
        as part of the MSP (Microservices Platform) team. In the past I have
        interned at{" "}
        <a href="https://nask.world/" target="_blank" rel="noopener noreferrer">
          NASK Incorporated
        </a>{" "}
        and worked as a Customer Service Representative at{" "}
        <a
          href="https://www.dominos.com/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dominos
        </a>
        . Read more about my experiences{" "}
        <a href="/experience" rel="noopener noreferrer">
          here
        </a>
        .
      </p>

      <p>
        Outside of coding, I enjoy listening to a variety of{" "}
        <a
          href="https://open.spotify.com/user/lam.tommy?si=c740f4e06b1b4e25"
          target="_blank"
          rel="noopener noreferrer"
        >
          music
        </a>
        . Some of my favorite genres include pop, rap, and indie. I also love
        snowboarding and have had the opportunity to visit some amazing resorts
        like Snowbird, Breckenridge, and Park City. Visitng the Alps or Japan
        for a ski trip are on my bucket list.
      </p>

      <p id="end">Feel free to reach out to me to get in touch!</p>
    </div>
  );
}

export default About;
