import React from 'react'
import ProjectBox from './ProjectBox'

import "./Projects.css"

const Projects = ({ id }) => {
  return (
    <div id={id} className="projects">
        <div className="projects_title">
            <h1 className="projects_main_title">Projects</h1>
            <p className="projects_subtitle">My Projects</p>
        </div>
        <div className="projects_outercontainer">
            <div className="projects_innercontainer">
                <ProjectBox imgname={"ld.jpeg"} title={"Lightning Dashboard"} titlelink={"http://lightning-dashboard.s3-website-us-west-2.amazonaws.com/"} githublink={"https://github.com/ghrcdaac/lightning-dashboard"} techUsed={['React', 'Redux','Mapbox', 'Lambda', 'EC2', 'API Gateway', 'Python', 'Node', 'Docker', 'D3.js', 'SQL']}/>
                <ProjectBox imgname={"fcx-flight.png"} title={"FCX"} titlelink={"https://ghrc.earthdata.nasa.gov/fcx/index.html"} githublink={"https://github.com/ghrcdaac/lightning-dashboard"} techUsed={['React', 'Redux', 'HTML', 'CSS', 'JavaScript', 'Cesium.js','Mapbox']}/>
                <ProjectBox imgname={"fullStack_springboot.png"} title={"Record Your Quote"} titlelink={"https://github.com/Alan1321/record_quote_springBoot_react_fullStack"} githublink={"https://github.com/Alan1321/record_quote_springBoot_react_fullStack"} techUsed={['Java', 'Spring Boot', 'MySQL','React', 'HTML', 'CSS', 'JavaScript']}/>
                <ProjectBox imgname={"portfolio.png"} title={"Modifiable Portfolio"} titlelink={"https://github.com/Alan1321/portfolio-website"} githublink={"https://github.com/Alan1321/portfolio-website"} techUsed={['React', 'HTML', 'CSS', 'JavaScript']}/>
            </div>
        </div>
    </div>
  )
}

export default Projects