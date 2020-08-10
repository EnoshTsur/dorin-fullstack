import React from 'react';
import { Vacation, } from '../../model/vacation';

export interface VacationProps {
    vacationState: Vacation,
    setVacationState: (state: Vacation) => void,
};

const Card: React.FC<{ render: any }> = ({ render, }) => {

    const [vacationState, setVacationState] = React.useState<Vacation>(
        { description: '', destination: '', image: '', startDate: '', endDate: '', price: '', followersAmount: '', _id: '' },
    );

    return (
        <>
            {render({
                vacationState,
                setVacationState,
            })}
        </>
    )
}

export default Card; 
