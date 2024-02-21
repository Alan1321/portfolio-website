import React from 'react'
import './about.css'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const InfoBox = ({ title, mini_info }) => {
  return (
    <div className='mini_info_class'>
        {(title === 'Experience') && <WorkspacePremiumIcon className="info_box_component"/>}
        {(title === 'School') && <SchoolIcon className="info_box_component"/>}
        {(title === 'Availability') && <EventAvailableIcon className="info_box_component"/>}
        <h3 className="box_title info_box_component">{title}</h3>
        <h5 className="box_mini_info info_box_component">{mini_info}</h5>
    </div>
  )
}

export default InfoBox