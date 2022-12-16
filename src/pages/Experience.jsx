import React from "react";
import { ExperienceData } from "../utils/data";

function Experience() {
  return (
    <div className="page-wrapper">
      <h1>Experience</h1>
      <ul className="experience">
        {ExperienceData.map((work) => {
          console.log(work)
          return (
            <li key={work} className='work'>
              <a href={work['link']} target="_blank" rel="noopener noreferrer">
                <img style={{width:work['width']}}src={work['image']} alt="Nask" />
              </a>
              <span className="pos">{work['position']} | {work['date']}</span>
              <p style={{margin:0}}>{work['desc']}</p>
              <ul className="desc">
                {work['sub']?.map((desc) => {
                  return (
                    <li key={desc} className="point">
                      {desc}
                    </li>
                  )
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Experience;
