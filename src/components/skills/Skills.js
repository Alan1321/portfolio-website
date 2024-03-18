import React from 'react'
import "./skills.css"
import SkillsBox from './SkillsBox'

const Skills = ({ id }) => {
  return (
    <div id={id} className="Skills">
        <div className="skills_title">
            <h1 className="skills_main_title">Skills</h1>
            <p className="skills_subtitle">My techical level</p>
        </div>
        <div className="skills_body">
          <div className="skills_frontend">
            <h3 className="skills_title1">Frontend</h3>
            <div className="skills_skill">
              <SkillsBox title={"HTML"} subtitle={"Intermediate ++"} />
              <SkillsBox title={"CSS"} subtitle={"Intermediate ++"} />
              <SkillsBox title={"JavaScript"} subtitle={"Intermediate"} />
              <SkillsBox title={"React"} subtitle={"Intermediate"} />
              <SkillsBox title={"Redux"} subtitle={"Intermediate"} />
              {/* <SkillsBox title={"Styled Components"} subtitle={"Intermediate"} /> */}
            </div>
          </div>
          <div className="skills_frontend">
            <h3 className="skills_title1">Backend</h3>
            <div className="skills_skill">
              <SkillsBox title={"AWS"} subtitle={"Intermediate"} />
              <SkillsBox title={"Python"} subtitle={"Intermediate"} />
              <SkillsBox title={"Node"} subtitle={"Intermediate"} />
              <SkillsBox title={"Java"} subtitle={"Basic ++"} />
              <SkillsBox title={"Spring Boot"} subtitle={"Basic ++"} />
              <SkillsBox title={"MySQL"} subtitle={"Basic ++"} />
            </div>
          </div>
        </div>
    </div>
  )
}
export default Skills