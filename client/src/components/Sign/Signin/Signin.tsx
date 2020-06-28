import React from 'react'
import LoginState from '../../../model/loginState'

export interface LoginProps {
    loginState: LoginState,
    setLoginState: (state: LoginState) => void,
    sendRequest: boolean,
    setSendRequest: (state: boolean) => void
}

const Login: React.FC<{ render: any }> = ({ render, }) => {

    const [loginState, setLoginState] = React.useState<LoginState>(
        { username: '', password: '' }
    )

    const [sendRequest, setSendRequest,] = React.useState(false)

    return (
        <>
            {render({
                loginState,
                setLoginState,
                sendRequest,
                setSendRequest
            })}
        </>
    )
}

export default Login
