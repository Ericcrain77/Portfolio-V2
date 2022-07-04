import React, { useState, useEffect } from "react";
import './header.css';
import EC_icon_1024x1024 from '../../assets/icons/EC_icon_1024x1024.png';
import { IconContext } from 'react-icons';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { GoCode } from 'react-icons/go';
import { MdEmail } from 'react-icons/md';

function Header() {
    const [sticky, setSticky] = useState("");

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
        setSticky(stickyClass);
        console.log(stickyClass);
    };

    const classes = `header-container ${sticky}`

    return (
        <header className={classes}>
            <div>
                <img src={EC_icon_1024x1024} alt='EC-Logo-Header' />
            </div>
            <nav>
                <ul>
                    <li>
                        <i><IconContext.Provider value={{ size: 16, color: 'white' }}><FaUser /></IconContext.Provider></i>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <i><IconContext.Provider value={{ size: 16, color: 'white' }}><FaFolderOpen /></IconContext.Provider></i>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <i><IconContext.Provider value={{ size: 16, color: 'white' }}><GoCode /></IconContext.Provider></i>
                        <a href="#challenges">Coding Challenges</a>
                    </li>
                    <li>
                        <i><IconContext.Provider value={{ size: 16, color: 'white' }}><MdEmail /></IconContext.Provider></i>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
      </header>
    )
};

export default Header;