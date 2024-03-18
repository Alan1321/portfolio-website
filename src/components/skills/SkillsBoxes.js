import React from 'react'
import "./skills.css"
import SkillsBox from './SkillsBox'

const SkillsBoxes = ({ mainTitle, box_titles }) => {
  // box_titles = [{"title":"HTML"},{"level":"intermediate"}]
  return (
    <div>
      <h3 className="skillsboxes_mainTitle">{mainTitle}</h3>
      <SkillsBox title={"React"} subtitle={"Intermediate"} />
    </div>
  )
}

export default SkillsBoxes