import React from 'react'
import './home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = ({ id }) => {

  return (
    <div id={id} className="home_main">
        <div className="social">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/alan1321/" target="_blank"><LinkedInIcon /></a>
                </li>
                <li>
                    <a href="https://www.github.com/Alan1321" target="_blank"><GitHubIcon /></a>
                </li>
                <li>
                    <a href="https://www.twitter.com/" target="_blank"><TwitterIcon /></a>
                </li>
            </ul>
        </div>
        <div className="main_container">
            <div className="profile_info">
                <div className="main_info">
                    <h1 className="each_profile_info profile_name">Alan Subedi</h1>
                    <h4 className="each_profile_info profile_title"> Full Stack Developer</h4>
                    <p className="each_profile_info profile_description">I'm a developer based in Huntsville, Alabama. I'm very passionate and dedicated to my work.</p>
                </div>
                <button className="say_hello"></button>
            </div>
            <div className="picture_container">
                <img src={process.env.PUBLIC_URL + "/pic1.png"} alt="" className="profile_picture" />
            </div>
        </div>
    </div>
  )
}

export default Home