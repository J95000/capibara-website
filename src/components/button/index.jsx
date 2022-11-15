import React from 'react';
import PropTypes from 'prop-types';
import {Button as SemanticButton} from 'semantic-ui-react';
import './index.css';


/**
 * 
 */


function Button(props) {
    const { className, content, size, textColor} = props;

    return(
        <SemanticButton className={`${className} custom-button`} content={content} size={size} style={{color: textColor}}/>
    )
}

export default Button;

Button.propTypes = {
    className: PropTypes.any,
	content: PropTypes.any,
    size: PropTypes.string,
    textColor: PropTypes.string
};

Button.defaultProps = {
    size: "small",
    textColor: "#000000"
};
