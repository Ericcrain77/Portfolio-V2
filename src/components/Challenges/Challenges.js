import React from "react";
import './challenges.css';
import { Card } from 'react-bootstrap';

function Challenges() {
    return (
        <div className="challenges-section">
            <h2>Coding Challenges</h2>
            <div className="challenges-section-cards">
                <Card>
                    <Card.Img variant="top" src={require('../../assets/images/Budget-Tracker-Homepage.png')} className='card-image' />
                    <Card.Body>
                        <Card.Title>Title</Card.Title>
                        <Card.Text>
                            Description
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
};

export default Challenges;