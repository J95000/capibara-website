import React from 'react';
import PropTypes from 'prop-types';
import { Icon as SemanticIcon } from 'semantic-ui-react';
import './index.css';

/**
 * Generic component for Icon
 * @param {*} props  The Properties this Semantic Icon needs
 * @returns A Generic Icon
 */
function Icon(props) {
	const { iconName, iconColor, iconBackgroundColor, iconSize, iconBordered, iconHref } = props;
	const handleClick = (href) => {
		if(href.includes("mailto:")) {
			window.location.href = href;
		}
		else {
			window.open(href, '_blank');
		}
	}
	if (iconHref !== undefined) {
		return (
			<SemanticIcon className={"icon social-icon " + iconColor + " " + iconBackgroundColor} name={iconName} size={iconSize} bordered={iconBordered} onClick={() => handleClick(iconHref ? iconHref : "")}/>
		);
	}
	else {
		return (
			<SemanticIcon className={"icon " + iconColor + " " + iconBackgroundColor} name={iconName} size={iconSize} bordered={iconBordered}/>
		);
	}
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
