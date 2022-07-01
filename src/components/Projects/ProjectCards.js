import React from "react";
import './projects.css';
import { FaGithub, FaLink } from 'react-icons/fa';
import work from './work.json';

function ProjectCards() {
    return (
        <section className="projects row justify-content-center">
            {
                work && work.length > 0 && work.map((work) =>
                <div className="work col-lg-5 col-md-11">
                    <img src={require('../../assets/images/' + work.image + '.png')} alt={work.title} />
                    <div className="work-info">
                        <h3>{work.title}</h3>
                        <p>{work.description}</p>
                        <div className="icons">
                            <i><a href={work.githubLink} target="_blank" rel="noopener noreferrer"><FaGithub /></a></i>
                            <i><a href={work.appLink} target="_blank" rel="noopener noreferrer"><FaLink /></a></i>
                        </div>
                    </div>
                </div>)
            }
        </section>
    )
}

export default ProjectCards;