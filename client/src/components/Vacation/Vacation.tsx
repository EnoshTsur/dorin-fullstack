import React from 'react';
import classes from './Vacation.module.css';
import Card from '../Card/Card';

const Vacation = () => {

    const { Vcontainer, } = classes;

    return (
        <div className={Vcontainer}>
            <Card />
        </div>
    )
};

export default Vacation;