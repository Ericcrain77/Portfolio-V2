import React from "react";
import './header.css';
import EC_icon_1024x1024 from '../../assets/icons/EC_icon_1024x1024.png';

function Header() {
    return (
        <header className='header-container'>
            <div>
                <img src={EC_icon_1024x1024} alt='EC-Logo-Header' />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
      </header>
    )
};

export default Header;