import React from 'react';
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
        <div>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
            >
                {items.map((item, index) => (
                    <div key={index}>
                        <img
                            src={process.env.PUBLIC_URL + item.image}
                            alt={item.alt}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
