import React, { useState, useEffect } from "react";
import './header.css';
import { HashLink as Link } from 'react-router-hash-link';
import { useMediaQuery } from 'react-responsive';
import EC_icon_1024x1024 from '../../assets/icons/EC_icon_1024x1024.png';
import resume from '../../assets/resume/resume.pdf';
import { IconContext } from 'react-icons';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { GoCode } from 'react-icons/go';
import { MdEmail } from 'react-icons/md';

function Header() {
    const [sticky, setSticky] = useState("");
    const [toggleHamburger, setToggleHamburger] = useState(false);

    const handleToggle = () => {
        setToggleHamburger(!toggleHamburger)
    }

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

    const desktopIcon = {size: 16};
    const phoneIcon = {size: 20};

    const isDesktopIcon = useMediaQuery({ maxWidth: 768 });
    const iconSize = isDesktopIcon ? phoneIcon : desktopIcon

    return (
        <header className={classes}>
            <div>
                <Link to='#intro' smooth>
                    <img src={EC_icon_1024x1024} alt='EC-Logo-Header' />
                </Link>
            </div>
            <a href="javascript:void(0)" className="menu-btn" onClick={handleToggle}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <nav className={`navbar-links ${toggleHamburger && "active"}`}>
                <ul>
                    <Link to='#about' style={{textDecoration: "none"}} onClick={() => setToggleHamburger(false)} smooth>
                        <li>
                            <i><IconContext.Provider value={{ size: iconSize.size, color: 'white' }}><FaUser /></IconContext.Provider></i>
                            <a>About</a>
                        </li>
                    </Link>
                    <Link to='#projects' style={{textDecoration: "none"}} onClick={() => setToggleHamburger(false)} smooth>
                        <li>
                            <i><IconContext.Provider value={{ size: iconSize.size, color: 'white' }}><FaFolderOpen /></IconContext.Provider></i>
                            <a>Projects</a>
                        </li>
                    </Link>
                    <Link to='#coding-challenges' style={{textDecoration: "none"}} onClick={() => setToggleHamburger(false)} smooth>
                        <li>
                            <i><IconContext.Provider value={{ size: iconSize.size, color: 'white' }}><GoCode /></IconContext.Provider></i>
                            <a>Coding Challenges</a>
                        </li>
                    </Link>
                    <Link to='#contact' style={{textDecoration: "none"}} onClick={() => setToggleHamburger(false)} smooth>
                        <li>
                            <i><IconContext.Provider value={{ size: iconSize.size, color: 'white' }}><MdEmail /></IconContext.Provider></i>
                            <a>Contact</a>
                        </li>
                    </Link>
                </ul>
                <a href={resume} target="_blank" rel="noopener noreferrer" onClick={() => setToggleHamburger(false)} className="resume-btn">Resume</a>
            </nav>
      </header>
    )
};

export default Header;