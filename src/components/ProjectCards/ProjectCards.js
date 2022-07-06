import React from "react";
import './projects.css';
import work from './work.json';
import { useMediaQuery } from 'react-responsive';
import { IconContext } from 'react-icons';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

function ProjectCards() {
    const desktopIcon = {size: 34};
    const phoneIcon = {size: 24};

    const isDesktopIcon = useMediaQuery({ maxWidth: 768 });
    const iconSize = isDesktopIcon ? phoneIcon : desktopIcon

    return (
        <div className="project-section" id='projects'>
            <h2>Projects</h2>
            <div className="cards">
                {
                    work && work.length > 0 && work.map((work, i) =>
                    <Card key={i} className="project-card">
                        <Card.Img variant="top" src={require('../../assets/images/' + work.image + '.png')} className='card-image' />
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">{work.title}</Card.Title>
                            <Card.Text className="card-description">
                                {work.description}
                            </Card.Text>
                        </Card.Body>
                        <div className="card-links">
                            <i><a href={work.githubLink} target="_blank" rel="noopener noreferrer"><IconContext.Provider value={{className: 'card-icons', size: iconSize.size}}><FaGithub /></IconContext.Provider></a></i>
                            <i><a href={work.appLink} target="_blank" rel="noopener noreferrer"><IconContext.Provider value={{className: 'card-icons', size: iconSize.size}}><FaLink /></IconContext.Provider></a></i>
                        </div>
                    </Card>
                    )
                }
            </div>
        </div>
    )
};

export default ProjectCards;