import React from 'react'
import "./skills.css"
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const SkillsBox = ({ title, subtitle }) => {
  return (
    <div className="skill_box">
        <div className="check_box_icon">
            <CheckBoxIcon />
        </div>
        <div className="skill_box_titles">
            <h3 className="skill_box_title">{title}</h3>
            <p className="skill_box_subtitle">{subtitle}</p>
        </div>
    </div>
  )
}

export default SkillsBox