import React from 'react';
import PropTypes from 'prop-types';
import { Icon as SemanticIcon } from 'semantic-ui-react';
import './index.css';

function Icon(props) {
	const { iconName, iconColor, iconBackgroundColor, iconSize, iconBordered } = props;
	return (
		<>
        	<SemanticIcon className={"icon " + iconColor + " " + iconBackgroundColor} name={iconName} size={iconSize} bordered={iconBordered}/>
		</>
	);
}

export default Icon;

Icon.propTypes = {
	iconName: PropTypes.string,
	iconColor: PropTypes.string,
	iconBackgroundColor: PropTypes.string,
	iconSize: PropTypes.string,
	iconBordered: PropTypes.bool
};

Icon.defaultProps = {
	iconName: "home",
	iconColor: "white",
	iconBackgroundColor: "dark-green",
	iconSize: "medium",
	iconBordered: true,
};
