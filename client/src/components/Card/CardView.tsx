import React from 'react';
import classes from './Card.module.css';
import Icon from '../Icon/Icon';
import { Get, Request, } from '../../Fetch/Fetch';
import { GET_ALL_VACATIONS_URL, } from '../../configuration/urls';
import { Vacation } from '../../model/vacation';
import Loading from '../Loading/Loading';
import Label from '../Label/Label';

interface Props {
    vacationState: Vacation,
    setVacationState: (vacationState: Vacation) => void,
    sendRequest: boolean,
    setSendRequest: (sendRequest: boolean) => void,
};

const CardView: React.FC<Props> = ({ vacationState, setVacationState, sendRequest, setSendRequest, }) => {

    const { CardItem, CardItemImage, CardItemContent, CardItemTopContent, CardItemBottomContent, BoxDate, BoxPrice, DealBox, } = classes;

    const url = GET_ALL_VACATIONS_URL;
    const { description, destination, image, startDate, endDate, price, followersAmount, _id } = vacationState;
    const [errorMessage, setErrorMessage,] = React.useState('');

    return (
        <>
            <button onClick={() => setSendRequest(true)}>test</button>
            {sendRequest && (<Get url={url}>
                {
                    ({ data, loading, error }: Request) => {
                        if (error) {
                            console.error('[Error]: Card (fetch: GET)', error)
                        }

                        if (data) {
                            const { message, success, } = data;
                            if (!success) {
                                setErrorMessage(message);
                                setSendRequest(false);
                            } else {
                                setSendRequest(false);
                                setErrorMessage('');
                                setVacationState(data);
                                console.log(data);
                            }
                        }

                        return !!loading && (
                            <Loading />
                        )
                    }
                }
            </Get>)}
            {
                errorMessage !== '' && <Label text={errorMessage} mode="error" />
            }

            <div className={CardItem} key={_id}>
                <div className={CardItemImage}>
                    <img alt={image} src='https://www.issta.co.il/resources/deals/images/Israel_Hotels/Eilat/Isrotel_Laguna/190X190/1.jpg' />
                </div>
                <div className={CardItemContent}>
                    <div className={CardItemTopContent}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Icon mode='edit' onClick={() => console.log('icon')} />
                            <Icon mode='delete' onClick={() => console.log('icon')} />
                        </div>
                        <h6>
                            {destination}
                            {description}
                            {followersAmount}
                            <span>Description</span>
                        </h6>
                    </div>
                    <div className={CardItemBottomContent}>
                        <div className={BoxDate}>
                            <ul>
                                <li><span>Starts at: {startDate}</span></li>
                                <li><span>Ends at: {endDate}</span></li>
                            </ul>
                        </div>
                        <div className={BoxPrice}>
                            <p className={DealBox}>
                                <span>Price:</span>
                                <strong>
                                    <sub>{price}</sub>
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CardView;