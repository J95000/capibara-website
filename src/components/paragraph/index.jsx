import React from 'react';
import PropTypes from 'prop-types';
import { Container as SemanticParagraph } from 'semantic-ui-react';
import './index.css';

/**
 * Generic component for Container/Paragraph
 * @param {*} props The Properties this Semantic Container/Paragraph needs
 * @returns {*} Generic Container/Paragraph
 */
function Container(props) {
	const { paragraphTextAlign, paragraphContent } = props;
	return (
		<SemanticParagraph className={"paragraph"} textAlign={paragraphTextAlign} content={paragraphContent}/>
	);
}

export default Container;

Container.propTypes = {
	paragraphTextAlign: PropTypes.string,
	paragraphContent: PropTypes.string
};

Container.defaultProps = {
	paragraphTextAlign: "justified",
	paragraphContent: "Hello World"
};
