import React from "react";
import { Carousel } from "react-responsive-carousel";
import EricCat from '../../assets/images/EricCat.jpg';
import EricMando from '../../assets/images/EricMando.jpg';
import Ericbw from '../../assets/images/Ericbw.jpg';
import EricCat2 from '../../assets/images/EricCat2.jpg';

export default () => (
    <Carousel>
        <div className="photo">
            <img src={Ericbw} alt="Black and White Eric" />
        </div>
        <div className="photo">
            <img src={EricCat} alt="Eric and Catherine" />
        </div>
        <div className="photo">
            <img src={EricMando} alt="Eric and Mando" />
        </div>
        <div className="photo">
            <img src={EricCat2} alt="Eric and Catherine 2" />
        </div>
    </Carousel>
);