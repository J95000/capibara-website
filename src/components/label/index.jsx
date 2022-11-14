import React from 'react';
import PropTypes from 'prop-types';
import { Label as SemanticLabel } from 'semantic-ui-react';
import './index.css';

/**
 * Generic component for label
 *
 * @param {*} props Properties as semantic need
 * @returns {*} Generic Label
 */
function Label(props) {
	const { labelContent, size} = props;
	return (
		<SemanticLabel content={labelContent} className={`ui ${size} label`} />
	);
}

export default Label;

Label.propTypes = {
	labelContent: PropTypes.string,
	size: PropTypes.string
};

Label.defaultProps = {    
    labelContent: "Hello World",
	size: "large"
};
