import React from 'react';
import Carousel from "react-elastic-carousel";
import "./Slidingcard.css";

export default function Slidingcard() {
    const breakpoints = [
        { width: 7000, itemsToShow: 1 },
        { width: 7000, itemsToShow: 2 },
        { width: 9000, itemsToShow: 3 },
    ];


    return (
        <div>
            <Carousel breakPoints={breakpoints}>
                <card-slider number="1" >
                    <img className='sliding-image1' src={process.env.PUBLIC_URL + "/images/2.png"} alt="img" />
                </card-slider>
                <card-slider number="2">
                    <img className='sliding-image1' src={process.env.PUBLIC_URL + "/images/3.png"} alt="img" />
                </card-slider>
                <card-slider number="3">
                    <img className='sliding-image1' src={process.env.PUBLIC_URL + "/images/4.png"} alt="img" />
                </card-slider>
            </Carousel>
        </div>
    )
}
