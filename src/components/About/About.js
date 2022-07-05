import React from "react";
import './about.css';
import { IconContext } from 'react-icons';
import { FaHtml5, FaCss3, FaNode } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiReact } from 'react-icons/si';

function About() {
    return (
        <div className="about-section">
            <h2>A Little About Me</h2>
            <p>
                I am a Junior Web Developer near Chattanooga, Tennessee currently looking for a great fit to kickstart my career. I have worked in healthcare as well as the agriculture industry, so I bring a unique perspective and attitude to working on web applications. I am fueled by my passion for creating. Writing code to make functional components or applications, while also utilizing imaginitive design, gives me an incredible sense of fulfillment. 
            </p>
            <p>
                I consider myself a 'forever student.' I am always willing and wanting to learn new technologies/frameworks/ways of doing things that I may not already know. I am dilligent, hard-working, and motivated to getting better each and every day.
            </p>
            <p>
                A little about my personality: I am a husband, dog owner, video game nerd, sports fan, and enjoyer of trading card games, board games, and table-top role-playing games. I am a huge fan of Star Wars, we named my dog 'Mando' after The Mandalorian's nickname. I love kicking back and watching my favorite sports teams play. The teams I follow: University of Arkansas, Dallas Cowboys, Pittsburgh Penguins, Memphis Grizzlies, and Atlanta Braves. Some of my favorite video games are the From Software franchise games (Dark Souls 1, 2, and 3, Bloodbourne, Elden Ring, etc.) and the Mario Bros. franchise. I love playing Magic: The Gathering with my friends, and running Dungeons & Dragons campaigns.
            </p>
            <p>
                I have base skills in the following languages/frameworks, with a goal of becoming an expert in Front-End Development. 
            </p>
            <div className="about-icons">
                <div className="reveal">
                    <IconContext.Provider value={{ size: 72, className: 'html-icon' }}><FaHtml5 /></IconContext.Provider>
                    <div className="content html-text">
                        <div>HTML5</div>
                    </div>
                </div>
                <div className="reveal">
                    <IconContext.Provider value={{ size: 72, className: 'css-icon' }}><FaCss3 /></IconContext.Provider>
                    <div className="content css-text">
                        <div>CSS3</div>
                    </div>
                </div>
                <div className="reveal">
                    <IconContext.Provider value={{ size: 72, className: 'js-icon' }}><SiJavascript /></IconContext.Provider>
                    <div className="content js-text">
                        <div>JavaScript</div>
                    </div>
                </div>
                <div className="reveal">
                    <IconContext.Provider value={{ size: 72, className: 'mongo-icon' }}><SiMongodb /></IconContext.Provider>
                    <div className="content mongo-text">
                        <div>MongoDB</div>
                    </div>
                </div>
                <div className="reveal">
                    <IconContext.Provider value={{ size: 72, className: 'express-icon' }}><SiExpress /></IconContext.Provider>
                    <div className="content express-text">
                        <div>express.js</div>
                    </div>
                </div>
                <div className="reveal">
                    <IconContext.Provider value={{ size: 72, className: 'react-icon' }}><SiReact /></IconContext.Provider>
                    <div className="content react-text">
                        <div>React.js</div>
                    </div>
                </div>
                <div className="reveal">
                    <IconContext.Provider value={{ size: 72, className: 'node-icon' }}><FaNode /></IconContext.Provider>
                    <div className="content node-text">
                        <div>node.js</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;