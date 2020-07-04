import React from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import { isEmptyStringIn, } from '../../../utils/validation'
import classes from '../Sign.module.css'
import { ADMIN_LOGIN_URL, USER_LOGIN_URL, } from '../../../configuration/urls'
import { Post, Request, } from '../../../Fetch/Fetch'
import LoginState from '../../../model/loginState'
import UserContext from '../../../context/UserContext'
import { userActions, } from '../../../reducers/actions'
import Loading from '../../Loading/Loading'
import { tokenStorage } from '../../../dataSources/localStorage'

const { FormContainer, InputContainer, } = classes


interface Props {
    role: 'customer' | 'admin',
    loginState: LoginState,
    setLoginState: (loginState: LoginState) => void,
    sendRequest: boolean,
    setSendRequest: (sendRequest: boolean) => void
}

const SigninView: React.FC<Props> = ({ role, loginState, setLoginState, sendRequest, setSendRequest }) => {

    const { USER_LOGIN, ADMIN_LOGIN } = userActions

    const url = role === 'admin' ? ADMIN_LOGIN_URL : USER_LOGIN_URL
    const actionType = role === 'admin' ? ADMIN_LOGIN : USER_LOGIN


    const { username, password, } = loginState
    const { setAccessToken, } = React.useContext(UserContext)
    const [ errorMessage, setErrorMessage, ] = React.useState('')


    return (
        <div className={FormContainer}>
            <div className={InputContainer}>
                <Input
                    handleChange={value => setLoginState({ ...loginState, username: value })}
                    placeholder="Username"
                />
                <Input
                    handleChange={value => setLoginState({ ...loginState, password: value })}
                    placeholder="Password"
                    type="password"
                />
            </div>
            <Button
                isDisabled={isEmptyStringIn(username, password)}
                type="success"
                title="Login"
                onClick={() => setSendRequest(true)}
            />
            {
                sendRequest && (
                    <Post url={url} body={loginState} >
                        {({ data, loading, error, }: Request) => {

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
                                    tokenStorage.setItem(accessToken)
                                }
                            }

                            return !!loading && (
                                <Loading />
                            )
                        }}
                    </Post>
                )
            }
            <h3>{errorMessage}</h3>
        </div>
    )
}


export default SigninView
