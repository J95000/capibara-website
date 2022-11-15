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
	const { labelContent, size, labelTextColorHex, labelBackgroundColor} = props;
	return (
		<SemanticLabel content={labelContent} className={`ui ${size} label`} style={{color: labelTextColorHex}} color={labelBackgroundColor} />
	);
}

export default Label;

Label.propTypes = {
	labelContent: PropTypes.string,
	size: PropTypes.string,
	labelTextColorHex: PropTypes.string,
	labelBackgroundColor: PropTypes.string
};

Label.defaultProps = {    
    labelContent: "Hello World",
	size: "large",
	labelTextColorHex: "#000000"
};
