import React from 'react'

import "./Projects.css"

const Projects = ({ id }) => {
  return (
    <div id={id} className="projects">
        <div className="projects_title">
            <h1 className="projects_main_title">Projects</h1>
            <p className="projects_subtitle"></p>
        </div>
    </div>
  )
}

export default Projects