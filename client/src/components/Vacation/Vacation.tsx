import React from 'react';
import Label from '../Label/Label';
import classes from './Vacation.module.css';

export default function Vacation() {

    const { Card, } = classes;

    return (
        <div className={Card}>
            <div>
                <div>Icon - Follow/Unfollow     in the left top corner</div>
                <div>Avatar - Followers Amount in the left top corner</div>
                Card Header - Destination
                <div>Vacation dates</div>
            </div>
            <div>Card media - Card image</div>
            <div>Card Content - Description</div>
            {/* <Label text='Destination' mode='default' />
            <Label text='Description' mode='default' />
            <Label text='Price' mode='default' />
            <Label text='Dates' mode='default' /> */}
        </div>
    )
}
