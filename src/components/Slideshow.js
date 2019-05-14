import React from 'react';
import { Carousel } from 'react-bootstrap';
const image1 = require('../images/slide2.jpg');
const image2 = require('../images/slide3.jpg');
const image3 = require('../images/slide1.jpg');

const Slideshow = () => {
    return (

        <Carousel interval="1000">
            <Carousel.Item >
                <img
                    style={{ height: '350px', width: '100%' }}
                    src={image1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item >
                <img
                    style={{ height: '350px', width: '100%' }}
                    src={image2}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '350px', width: '100%' }}
                    src={image3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}


export default Slideshow;