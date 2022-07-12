import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import './challenges.css';
import FizzBuzz from './FizzBuzz';

Modal.setAppElement('#root');

const MODAL_STYLES = {
    content: {
        position: 'absolute',
        top: '5rem',
        right: '5rem',
        bottom: '5rem',
        left: '5rem',
        // transform: 'translate(-5rem, -15rem)',
        backgroundcolor: 'var(--granite-gray)',
        padding: '2rem',
        boxShadow: '1px 1px 25px 5px black'
    },
    overlay: {
        zIndex: 1000
    }
}

function Challenges() {
    const [toggleModal, setToggleModal] = useState(false);

    useEffect(() => {
        if (toggleModal === true) {
          document.body.style.overflow = 'hidden'
        }
        if (toggleModal === false) {
            document.body.style.overflow = 'visible'
        }
    }, [toggleModal]);

    return (
        <div className="challenges-section" id="coding-challenges">
            <h2>Coding Challenges</h2>
            <div className="challenges-section-cards">
                <div className="modal-card">
                    <div>
                        <h4>FizzBuzz</h4>
                        <p>Enter two numbers. Any number between 1 and 100 that is divisible by your numbers will be replaced with either 'Fizz', 'Buzz', or 'FizzBuzz.' If the number from 1-100 is divisible by both given numbers, it will be replaced with 'FizzBuzz.'</p>
                    </div>
                    <button className='modal-btn' onClick={() => setToggleModal(true)}>Open</button>
                    <Modal 
                        style={MODAL_STYLES} 
                        isOpen={toggleModal} 
                        onRequestClose={() => setToggleModal(false)}
                    >
                        <div>
                            <FizzBuzz />
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
};

export default Challenges;