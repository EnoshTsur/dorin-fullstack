import React from 'react'
import LoginState from '../../../model/loginState'

export interface LoginProps {
    loginState: LoginState,
    setLoginState: (state: LoginState) => void,
}

const Login: React.FC<{ render: any }> = ({ render, }) => {

    const [loginState, setLoginState] = React.useState<LoginState>(
        { username: '', password: '' }
    )

    return (
        <>
            {render({
                loginState,
                setLoginState,
            })}
        </>
    )
}

export default Login
