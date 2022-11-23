import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Label from '../label';
import Paragraph from '../paragraph';
import './index.css';

function VerticalCard(props) {
	const { iconComponent, labelComponent, paragraphComponent } = props;
    const iconComponentJSON = JSON.parse(JSON.stringify(iconComponent));
    const labelComponentJSON = JSON.parse(JSON.stringify(labelComponent));
    const paragraphComponentJSON = JSON.parse(JSON.stringify(paragraphComponent));
    return (
        <div className={"vertical-card ui card"}>
            <div className={"center aligned"}>
                <Icon iconName={iconComponentJSON.iconName} iconColor={iconComponentJSON.iconColor} iconSize={iconComponentJSON.iconSize}
                    iconBackgroundColor={iconComponentJSON.iconBackgroundColor} iconBordered={iconComponentJSON.iconBordered}/>
            </div>
            <div className={"center aligned"}>
                <Label labelContent={labelComponentJSON.labelContent}/>
            </div>
            <div className={"center aligned"}>
                <Paragraph paragraphTextAlign={paragraphComponentJSON.paragraphTextAlign} paragraphContent={paragraphComponentJSON.paragraphContent}/>
            </div>
        </div>
    );
}

export default VerticalCard;

VerticalCard.propTypes = {
    iconComponent: PropTypes.any,
    labelComponent: PropTypes.any,
    paragraphComponent: PropTypes.any
};

VerticalCard.defaultProps = {
    iconComponent: "",
    labelComponent: "",
    paragraphComponent: ""
};
