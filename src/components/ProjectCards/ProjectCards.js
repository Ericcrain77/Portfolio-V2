import React from "react";
import './projects.css';
import work from './work.json';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

function ProjectCards() {
    return (
        <div className="project-section">
            <h1>Projects</h1>
            <Card className="project-card">
                <Card.Img variant="top" src={'../../assets/images/' + work[0].image + '.png'} />
                <Card.Body>
                    <Card.Title>{work[0].title}</Card.Title>
                    <Card.Text>
                        {work[0].description}
                    </Card.Text>
                    <i><a href={work[0].githubLink} target="_blank" rel="noopener noreferrer"><FaGithub /></a></i>
                    <i><a href={work[0].appLink} target="_blank" rel="noopener noreferrer"><FaLink /></a></i>
                </Card.Body>
            </Card>
        </div>
    )
};

export default ProjectCards;