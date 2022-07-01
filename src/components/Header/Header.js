import React, { useState, useEffect } from "react";
import './header.css';
import EC_icon_1024x1024 from '../../assets/icons/EC_icon_1024x1024.png';

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