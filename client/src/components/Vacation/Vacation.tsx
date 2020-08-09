import React from 'react';
import classes from './Vacation.module.css';
import Card, { VacationProps } from '../Card/Card';
import { Requested, RequestState } from '../../Fetch/Fetch';
import CardView from '../Card/CardView';

const vacationCard: (role: 'customer' | 'admin') => any = role => (
    <Card key={role}
        render={({ vacationState, setVacationState }: VacationProps) => (
            <Requested render={({ sendRequest, setSendRequest }: RequestState) => (
                <CardView
                    role={role}
                    vacationState={vacationState}
                    setVacationState={setVacationState}
                    sendRequest={sendRequest}
                    setSendRequest={setSendRequest}
                />
            )}
            />
        )}
    />
)

const Vacations: React.FC = () => {

    const { Vcontainer, } = classes;

    return (
        <div className={Vcontainer}>
            {vacationCard('admin')}
        </div>
    )
};

export default Vacations;