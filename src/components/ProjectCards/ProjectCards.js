import React from "react";
import './projects.css';
import work from './work.json';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

function ProjectCards() {
    return (
        <div className="project-section">
            <h1>Projects</h1>
            <div className="cards">
                {
                    work && work.length > 0 && work.map((work, i) =>
                    <Card key={i} className="project-card">
                        <Card.Img variant="top" src={require('../../assets/images/' + work.image + '.png')} className='card-image' />
                        <Card.Body>
                            <Card.Title>{work.title}</Card.Title>
                            <Card.Text>
                                {work.description}
                            </Card.Text>
                            <i><a href={work.githubLink} target="_blank" rel="noopener noreferrer"><FaGithub /></a></i>
                            <i><a href={work.appLink} target="_blank" rel="noopener noreferrer"><FaLink /></a></i>
                        </Card.Body>
                    </Card>
                    )
                }
            </div>
        </div>
    )
};

export default ProjectCards;