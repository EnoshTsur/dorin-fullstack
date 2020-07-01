import React from 'react'
import userFormReducer from '../../../reducers/userFormReducer'
import { customerInitialState, } from '../../../model/user'


const Signup: React.FC<{ render: any }> = ({ render, }) => {

    const [userForm, userFormDispatch,] = React.useReducer(userFormReducer, customerInitialState)

    return (
        <>
            {
                render(
                    userForm,
                    userFormDispatch,
                )
            }
        </>
    )
}

export default Signup