import React from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import classes from '../Sign.module.css'
import { USER_REGISTER_URL, USER_LOGIN_URL, } from '../../../configuration/urls'
import { isEmptyStringIn, } from '../../../utils/validation'
import { ICustomer, } from '../../../model/user'
import { withCustomer, } from '../../../utils/transformUtil'
import { tokenStorage } from '../../../dataSources/localStorage'
import UserContext from '../../../context/UserContext'
import { userFormActions, } from '../../../reducers/actions'
import { UserFormDispatch, } from '../../../reducers/userFormReducer'

export interface Props {
    userForm: ICustomer,
    userFormDispatch: ({type, payload}: UserFormDispatch) => ICustomer 
    sendRequest: boolean,
    setSendRequest: (sendRequest: boolean) => void
}

const SignupView: React.FC<Props> = ({ userForm, userFormDispatch, sendRequest, setSendRequest, }) => {

    const { FormContainer, InputContainer, } = classes
    const { user, setUser, accessToken, setAccessToken, } = React.useContext(UserContext)
    const { SET_FIRST_NAME, SET_LAST_NAME, SET_USERNAME, SET_PASSWORD} = userFormActions

   return (
        <div className={FormContainer} >
            <div className={InputContainer}>
                <Input
                    handleChange={value => userFormDispatch({ type: SET_FIRST_NAME, payload: value})}
                    placeholder="First Name"
                />
                <Input
                    handleChange={value => userFormDispatch({ type: SET_LAST_NAME, payload: value})}
                    placeholder="Last Name"
                />
                <Input
                    handleChange={value => userFormDispatch({ type: SET_USERNAME, payload: value})}
                    placeholder="Username"
                />
                <Input
                    handleChange={value => userFormDispatch({ type: SET_PASSWORD, payload: value})}
                    placeholder="Password"
                    type="password"
                />
            </div>
            <Button
                type="success"
                title="Send"
                onClick={() => console.log('')}
            />
            <h1>{accessToken}</h1>
            <h1></h1>
        </div>
    );
}


export default SignupView
