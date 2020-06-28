import React from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import { isEmptyStringIn, } from '../../../utils/validation'
import classes from '../Sign.module.css'
import { ADMIN_LOGIN_URL, USER_LOGIN_URL, } from '../../../configuration/urls'
import { Post, Request, } from '../../../Fetch/Fetch'
import LoginState from '../../../model/loginState'
const { FormContainer, InputContainer, } = classes

interface Props {
    role: 'customer' | 'admin',
    loginState: LoginState,
    setLoginState: (loginState: LoginState) => void,
    sendRequest: boolean,
    setSendRequest: (sendRequest: boolean) => void
}

const SignIn: React.FC<Props> = ({ role, loginState, setLoginState, sendRequest, setSendRequest}) => {

    const url = role === 'admin' ? ADMIN_LOGIN_URL : USER_LOGIN_URL
    const { username, password, } = loginState

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
                            
                        }}
                    </Post>
                )
            }
        </div>
    )
}


export default SignIn
