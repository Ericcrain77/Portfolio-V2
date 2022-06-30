import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './intro.css';
import Carousel from "./carousel";

function Intro() {
    return (
        <div className='intro-container'>
            <div className="carousel">
                <Carousel />
            </div>
            <div className="intro-words">
                <h3>Hello, my name is</h3>
                <h1>Eric Crain!</h1>
                <h2>Creative. Professional. Motivated.</h2>
                <h4>I am a Junior Web Developer who specializes in building or contributing to exceptional web applications.</h4>
            </div>
        </div>
    )
};

export default Intro;