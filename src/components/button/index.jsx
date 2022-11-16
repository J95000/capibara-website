import React from 'react';
import PropTypes from 'prop-types';
import {Button as SemanticButton} from 'semantic-ui-react';
import './index.css';

/**
 * Generic component for button
 *
 * @param {*} props Properties as semantic need
 * @returns {*} Generic Button
 */

function Button(props) {

    const handleClick = (href) => {
        window.location.href = href;
    }

    const { className, content, size, textColor, href} = props;

    return(
        <SemanticButton href={href} className={`${className} custom-button`} content={content} size={size} style={{color: textColor}} onClick={()=>handleClick(href?href:'')}/>
    )
}

export default Button;

Button.propTypes = {
    className: PropTypes.any,
	content: PropTypes.any,
    size: PropTypes.string,
    textColor: PropTypes.string,
    href: PropTypes.string
};

Button.defaultProps = {
    className: "ui button",
    constent: "",
    size: "small",
    textColor: "#000000",
    href: ""
};
