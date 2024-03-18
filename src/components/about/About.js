import React from 'react'
import './about.css'
import InfoBox from './InfoBox'
import Button from '@mui/material/Button';

const About = ({ id }) => {

    const clickHandler = (filename) =>{
        const resumeUrl = process.env.PUBLIC_URL + filename;
        const downloadLink = document.createElement('a');
        downloadLink.href = resumeUrl;
        downloadLink.download = filename;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

  return (
    <div id={id} className="about">
        <div className="about_heading">
            <h1 className="title">About Me</h1>
            <p className="subtitle">My introduction</p>
        </div>
        <div className="about_main_container">
            <div className="image_container">
                <img src={process.env.PUBLIC_URL + "/pic1.png"} alt="" className="profile_picture" />
            </div>
            <div className="about_right_sub_container">
                <div className="mini_infos about_infoo">
                    <InfoBox title="Experience" mini_info="2+ years" />
                    <InfoBox title="School" mini_info="UAH" />
                    <InfoBox title="Availability" mini_info="Anytime" />
                </div>
                <p className="main_info about_infoo">
                Welcome to my portfolio! I'm a full-stack developer with a strong focus on frontend development, currently pursuing a Bachelor's in Computer Science at The University of Alabama in Huntsville. Graduating in May 2024.
                <br></br>Let's connect and explore the possibilities of collaboration and innovation in web development.
                </p>
                <div className="download_buttons">
                    <Button color="success" variant="contained" className="download_cv about_infoo" onClick={()=>clickHandler('resume.pdf')}>
                        Download CV
                    </Button>
                    <Button color="success" variant="contained" className="download_cv about_infoo" onClick={()=>clickHandler('transcript.pdf')}>
                        Download Transcript
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About