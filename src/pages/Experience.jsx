import React from "react";
import { ExperienceData } from "../utils/data";

function Experience() {
  return (
    <div className="page-wrapper">
      <h1>Experience</h1>
      <ul>
        {ExperienceData.map((work) => {
          return (
            <li>
                <img src={work['image']}></img>
                <h2>{work['company']}</h2>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Experience;
