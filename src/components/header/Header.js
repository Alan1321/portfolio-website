import React, {useState} from 'react'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {

    const [Toggle, setToggle] = useState(false)

  return (
    <header className={Toggle ? "header activeee" : "header"}>
        <div className="logo">
            <a href="">Smith</a>
            <div className="menu_bar" onClick={()=>setToggle(!Toggle)}>
                <MenuIcon />
            </div>
        </div>
        <div className="nav_menu">
            <ul className={Toggle ? "nav_list_web activee" : "nav_list_web"}>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Services</a>
                </li>
                <li>
                    <a href="">Portfolio</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header