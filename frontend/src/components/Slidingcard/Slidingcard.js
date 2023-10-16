import React from 'react';
import "./Slidingcard.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles
import { Carousel } from 'react-responsive-carousel';

export default function Slidingcard() {
    const items = [
        {
            image: '/images/2.png',
            alt: 'Image1'
        },
        {
            image: '/images/3.png',
            alt: 'Image2'
        },
        {
            image: '/images/4.png',
            alt: 'Image3'
        }
    ];

    return (
        <div className='carousel-container'>
            <h1>XYZ</h1>
            <Carousel className='main-carousel' autoPlay infiniteLoop vertical={true} interval={3000} showThumbs={false} fade={true} 
            centerSlidePercentage={50}
            centerMode
            transitionTime={2000}
            showStatus={false}>
                {items.map(item => 
                    <img
                    src={process.env.PUBLIC_URL + item.image}
                    alt={item.alt}
                />
                )}
            </Carousel>
        </div>
    );
}
