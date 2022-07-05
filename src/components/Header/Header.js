import React, { useState, useEffect } from "react";
import './header.css';
import { HashLink as Link } from 'react-router-hash-link';
import EC_icon_1024x1024 from '../../assets/icons/EC_icon_1024x1024.png';
import resume from '../../assets/resume/resume.pdf';
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
                <Link to='#intro' smooth>
                    <img src={EC_icon_1024x1024} alt='EC-Logo-Header' />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='#about' smooth>
                            <i><IconContext.Provider value={{ size: 16, color: 'white' }}><FaUser /></IconContext.Provider></i>
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link to='#projects' smooth>
                            <i><IconContext.Provider value={{ size: 16, color: 'white' }}><FaFolderOpen /></IconContext.Provider></i>
                            <a>Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link to='#coding-challenges' smooth>
                            <i><IconContext.Provider value={{ size: 16, color: 'white' }}><GoCode /></IconContext.Provider></i>
                            <a>Coding Challenges</a>
                        </Link>
                    </li>
                    <li>
                        <Link to='#contact' smooth>
                            <i><IconContext.Provider value={{ size: 16, color: 'white' }}><MdEmail /></IconContext.Provider></i>
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
                <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-btn">Resume</a>
            </nav>
      </header>
    )
};

export default Header;