import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import './index.css';

/**
 * Generic component for Carousel
 * @param {*} props  The Properties this Bootstrap Carousel needs
 * @returns A Generic Carousel
 */
function Carousel(props) {
    let buffer = [];
    const { carouselMessages } = props;
    const carouselMessagesJSON = JSON.parse(JSON.stringify(carouselMessages.carouselMessages));
    (carouselMessagesJSON).forEach(element => {
        buffer.push(
            <BootstrapCarousel.Item>
                <div dangerouslySetInnerHTML={{__html: element.image}} />
                <BootstrapCarousel.Caption>
                    <h3>{element.message}</h3>
                    <p>{element.description}</p>
                </BootstrapCarousel.Caption>
            </BootstrapCarousel.Item>
        )
    });
    return (
        <BootstrapCarousel className={"carousel"}>{buffer}</BootstrapCarousel>
    );
}

export default Carousel;

Carousel.propTypes = {
    carouselMessages: PropTypes.any
};

Carousel.defaultProps = {
    carouselMessages: ""
};
