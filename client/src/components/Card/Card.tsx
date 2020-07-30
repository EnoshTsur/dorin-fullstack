import React from 'react';
import classes from './Card.module.css';
import Icon from '../Icon/Icon';

const Card = () => {

    const { CardItem, CardItemImage, CardItemContent, CardItemTopContent, CardItemBottomContent, BoxDate, BoxPrice, DealBox, } = classes;

    return (
        <div className={CardItem}>
            <div className={CardItemImage}>
                <img src='https://www.issta.co.il/resources/deals/images/Israel_Hotels/Eilat/Isrotel_Laguna/190X190/1.jpg' />
            </div>
            <div className={CardItemContent}>
                <div className={CardItemTopContent}>
                    <Icon mode='edit' onClick={() => console.log('icon')} />
                    <Icon mode='delete' miscStyles={{ float: 'right', marginTop: '-7px' }} onClick={() => console.log('icon')} />
                    <h6>
                        Destination
                        <span>Description</span>
                    </h6>
                </div>
                <div className={CardItemBottomContent}>
                    <div className={BoxDate}>
                        <ul>
                            <li><span>Starts at:</span></li>
                            <li><span>Ends at:</span></li>
                        </ul>
                    </div>
                    <div className={BoxPrice}>
                        <p className={DealBox}>
                            <span>Price:</span>
                            <strong>
                                <sub>1000 $</sub>
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;