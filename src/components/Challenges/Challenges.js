import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import './challenges.css';

Modal.setAppElement('#root');

const MODAL_STYLES = {
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
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
    
    const count = 1;

    useEffect(() => {
        if (toggleModal === true) {
          document.body.style.overflow = 'hidden'
        }
        if (toggleModal === false) {
            document.body.style.overflow = 'visible'
        }
    }, [toggleModal]);

    const handleDecrement = () => {
        if (count > 1) {
            this.setState(
                (prevState) => ({count: prevState.count - 1})
            )
        }
    };

    const handleIncrement = () => {
        this.setState(
            (prevState) => ({count: prevState.count + 1})
        )
    };

    return (
        <div className="challenges-section" id="coding-challenges">
            <h2>Coding Challenges</h2>
            <h3>Clicking on a challenge will open a modal displaying the associated challenge</h3>
            <div className="challenges-section-cards">
                <div className="modal-card">
                    <h4>FizzBuzz</h4>
                    <p>Enter two numbers. Any number between 1 and 100 that is divisible by your numbers will be replaced with either 'Fizz' or 'Buzz.' If the number from 1-100 is divisible by both given numbers, it will be replaced with 'FizzBuzz.'</p>
                    <button className='modal-btn' onClick={() => setToggleModal(true)}>Open</button>
                    <Modal 
                        style={MODAL_STYLES} 
                        isOpen={toggleModal} 
                        onRequestClose={() => setToggleModal(false)}
                    >
                        <div className="challenge-modal-inside">
                            <h1>React FizzBuzz</h1>
                            <form>
                                <input></input>
                                <input></input>
                            </form>
                            <h2>
                                {
                                    (count % 15 === 0) ? "FizzBuzz" :
                                    (count % 3 === 0)  ? "Fizz"     : 
                                    (count % 5 === 0)  ? "Buzz"     : 
                                    count
                                }
                            </h2>
                            <button onClick={handleDecrement}>-</button>
                            <button onClick={handleIncrement}>+</button>
                            <div>
                                <button className='modal-btn' onClick={() => setToggleModal(false)}>Close</button>
                            </div> 
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
};

export default Challenges;