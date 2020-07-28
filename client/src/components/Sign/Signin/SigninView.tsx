import React from 'react'
import { createBrowserHistory, } from 'history'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import { isEmptyStringIn, } from '../../../utils/validation'
import classes from '../Sign.module.css'
import { ADMIN_LOGIN_URL, USER_LOGIN_URL, } from '../../../configuration/urls'
import { Post, Request, } from '../../../Fetch/Fetch'
import LoginState from '../../../model/loginState'
import UserContext from '../../../context/UserContext'
import Loading from '../../Loading/Loading'
import Label from '../../Label/Label'

const { FormContainer, InputContainer, } = classes


interface Props {
    role: 'customer' | 'admin',
    loginState: LoginState,
    setLoginState: (loginState: LoginState) => void,
    sendRequest: boolean,
    setSendRequest: (sendRequest: boolean) => void,
}

const SigninView: React.FC<Props> = ({ role, loginState, setLoginState, sendRequest, setSendRequest }) => {

    const url = role === 'admin' ? ADMIN_LOGIN_URL : USER_LOGIN_URL

    const { username, password, } = loginState
    const { setAccessToken, } = React.useContext(UserContext)
    const [errorMessage, setErrorMessage,] = React.useState('')

    const history = createBrowserHistory();

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
                mode="success"
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
                                    history.push('/vacations')
                                }
                            }

                            return !!loading && (
                                <Loading />
                            )
                        }}
                    </Post>
                )
            }
            {
                errorMessage !== '' && <Label text={errorMessage} mode="error" />
            }
        </div>
    )
}


export default SigninView
