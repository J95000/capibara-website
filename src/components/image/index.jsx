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
    const { imageHeight, imageSrc } = props;
    return (
        <SemanticImage className={"image"} height={imageHeight} src={imageSrc}/>
    );
}

export default Image;

Image.propTypes = {
    imageHeight: PropTypes.string,
    imageSrc: PropTypes.string
};

Image.defaultProps = {
    imageHeight: "240px",
    imageSrc: ""
};
