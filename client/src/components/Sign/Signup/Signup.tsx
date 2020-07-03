import React from 'react'
import userFormReducer , { UserFormDispatch, } from '../../../reducers/userFormReducer'
import { customerInitialState, ICustomer,  } from '../../../model/user'


export interface UserFormProps {
    userForm: ICustomer,
    userFormDispatch: ({type, payload}: UserFormDispatch) => ICustomer 
}

const Signup: React.FC<{ render: any }> = ({ render, }) => {

    const [userForm, userFormDispatch,] = React.useReducer(userFormReducer, customerInitialState)

    return (
        <>
            {
                render({
                    userForm,
                    userFormDispatch,
                })
            }
        </>
    )
}

export default Signup