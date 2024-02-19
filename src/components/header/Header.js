import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className="header">
        <div className="logo">
            <a href="">Smith</a>
        </div>
        <ul>
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
    </header>
  )
}

export default Header