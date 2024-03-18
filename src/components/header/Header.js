import React, {useState} from 'react'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const Header = ({ nav_menu }) => {

    const [Toggle, setToggle] = useState(false)

  return (
    <header className={Toggle ? "header activeee" : "header"}>
        <div className="logo">
            <a href="">MyPortfolio</a>
            <div className="menu_bar" onClick={()=>setToggle(!Toggle)}>
                <MenuIcon />
            </div>
        </div>
        <div className="nav_menu">
            <ul className={Toggle ? "nav_list_web activee" : "nav_list_web"}>
                <li>
                    <Link activeClass="active" smooth spy to={nav_menu[0]}>
                        {nav_menu[0]}
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to={nav_menu[1]}>
                        {nav_menu[1]}
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to={nav_menu[2]}>
                        {nav_menu[2]}
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to={nav_menu[3]}>
                            {nav_menu[3]}
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to={nav_menu[4]}>
                            {nav_menu[4]}
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to={nav_menu[5]}>
                            {nav_menu[5]}
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header