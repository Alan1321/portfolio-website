import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import "./Projects.css"

const ProjectBox = ({ imgname, title, titlelink, githublink, techUsed }) => {
  return (
    <div className="project_box">
        <img src={imgname} alt="Girl in a jacket" />
        <div className="project_box_titles">
            <a className="project_box_title" href={titlelink} target="_blank">{title}   <FaExternalLinkAlt /></a>
            <a className="github" href={githublink} target="_blank">
                <FaGithub />
            </a>
        </div>
        <div className="project_box_tech_used">
            {techUsed.map((element)=>(
                <div>{element}</div>
            ))}
        </div>
    </div>
  )
}

export default ProjectBox