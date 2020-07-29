import React from 'react';
import classes from './Card.module.css';
import Icon from '../Icon/Icon';

const Card = () => {

    const { Card, } = classes;

    return (
        <div className={Card}>
            <Icon mode='edit' onClick={() => console.log('icon')} />
            <Icon mode='delete' miscStyles={{ float: 'right', marginTop: '-7px' }} onClick={() => console.log('icon')} />
            <div style={{ marginTop: '20px' }}>Destination</div>
            <div>Dates</div>
            <div>Image</div>
            <div>Description</div>
        </div>
    )
};

export default Card;