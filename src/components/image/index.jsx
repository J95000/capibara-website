import React from 'react';
import PropTypes from 'prop-types';
import { Image as SemanticImage } from 'semantic-ui-react';
import './index.css';

/**
 * Generic component for Image
 * @param {*} props  The Properties this Semantic Image needs
 * @returns A Generic Image
 */
function Image(props) {
    const { imageClassName, imageHeight, imageSrc, imageAlt } = props;
    return (
        <SemanticImage className={"image " + imageClassName} height={imageHeight} src={imageSrc} alt={imageAlt}/>
    );
}

export default Image;

Image.propTypes = {
    imageClassName: PropTypes.string,
    imageHeight: PropTypes.string,
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string
};

Image.defaultProps = {
    imageClassName: "",
    imageHeight: "240px",
    imageSrc: "",
    imageAlt: "Capybara"
};
