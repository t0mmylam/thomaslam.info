import React from "react";
import { ExperienceData } from "../utils/data";

function Experience() {
  return (
    <div className="page-wrapper">
      <h1>Experience</h1>
      <ul>
        {ExperienceData.map((work) => {
          return (
            <li key={work} className='work'>
              <a href={work['link']} target="_blank" rel="noopener noreferrer">
                <img src={"/images/Nask.svg"} alt="Nask" />
              </a>
              <span className="pos">{work['position']} | {work['date']}</span>
              <p>{work['desc']}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Experience;
