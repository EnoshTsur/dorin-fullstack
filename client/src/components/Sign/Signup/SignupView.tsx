import React from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import classes from '../Sign.module.css'
import { USER_REGISTER_URL, } from '../../../configuration/urls'
import { isEmptyStringIn, } from '../../../utils/validation'
import { ICustomer, } from '../../../model/user'
import UserContext from '../../../context/UserContext'
import { userFormActions, } from '../../../reducers/actions'
import { UserFormDispatch, } from '../../../reducers/userFormReducer'
import { Post, Request } from '../../../Fetch/Fetch'
import Loading from '../../Loading/Loading'
import Label from '../../Label/Label'

export interface Props {
    userForm: ICustomer,
    userFormDispatch: ({ type, payload }: UserFormDispatch) => ICustomer
    sendRequest: boolean,
    setSendRequest: (sendRequest: boolean) => void
}

const SignupView: React.FC<Props> = ({ userForm, userFormDispatch, sendRequest, setSendRequest, }) => {

    const { FormContainer, InputContainer, } = classes

    const { setAccessToken } = React.useContext(UserContext)
    const { SET_FIRST_NAME, SET_LAST_NAME, SET_USERNAME, SET_PASSWORD } = userFormActions
    const [ errorMessage, setErrorMessage, ] = React.useState('')

    return (
        <div className={FormContainer} >
            <div className={InputContainer}>
                <Input
                    handleChange={value => userFormDispatch({ type: SET_FIRST_NAME, payload: value })}
                    placeholder="First Name"
                />
                <Input
                    handleChange={value => userFormDispatch({ type: SET_LAST_NAME, payload: value })}
                    placeholder="Last Name"
                />
                <Input
                    handleChange={value => userFormDispatch({ type: SET_USERNAME, payload: value })}
                    placeholder="Username"
                />
                <Input
                    handleChange={value => userFormDispatch({ type: SET_PASSWORD, payload: value })}
                    placeholder="Password"
                    type="password"
                />
            </div>
            <Button
                isDisabled={isEmptyStringIn(...Object.values(userForm))}
                mode="success"
                title="Send"
                onClick={() => setSendRequest(true)}
            />
            {
                sendRequest && (
                    <Post url={USER_REGISTER_URL} body={userForm} >
                        {({ data, loading, error }: Request) => {
                            if (error) {
                                console.error('[Error]: SigninView( fetch: POST) ', error)
                            }

                            if (data) {
                                const { message, success, } = data
                                if (!success) {
                                    setErrorMessage(message)
                                    setSendRequest(false)
                               
                                } else {
                                    setSendRequest(false)
                                    setErrorMessage('')
                                    const { content: accessToken, } = data
                                    setAccessToken(accessToken)
                                }
                    
                            }

                            if(loading) {
                                return <Loading />
                            }
                        }}
                    </Post>
                )
            }
             {
               errorMessage !== '' &&  <Label text={errorMessage} mode="error" />
            }
        </div>
    );
}


export default SignupView
