import React from 'react';
import PropTypes from 'prop-types';
import {Card as SemanticCard} from 'semantic-ui-react';
import './index.css'

/**
 * Generic component for Card
 *
 * @param {*} props Properties as Semantic Card need
 * @returns {*} Generic Card
 */

function Card(props) {
    const {content, image} = props;

    return(
        <SemanticCard className='ui card'>
            <div className='divCardContainer'>
                <div className='divLabel'>
                    {content}
                </div>
                <div className='divImage'>
                    {image}
                </div>
            </div>                    
        </SemanticCard>
    )
}

export default Card;

Card.propTypes = {
	content: PropTypes.string,
    image: PropTypes.any
};

Card.defaultProps = {
	content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    image: ""
};
