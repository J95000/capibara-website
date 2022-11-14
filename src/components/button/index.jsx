import React from 'react';
import PropTypes from 'prop-types';
import {Button as SemanticButton} from 'semantic-ui-react';
import './index.css';


/**
 * 
 */


function Button(props) {
    const { className, content} = props;

    return(
        <SemanticButton className={`${className} custom-button`} content={content}/>
    )
}

export default Button;

Button.propTypes = {
    className: PropTypes.any,
	content: PropTypes.any,
};
