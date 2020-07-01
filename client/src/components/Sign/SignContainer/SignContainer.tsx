import React from 'react'
import Dialog from '../../Dialog/Dialog'
import classes from './SignContainer.module.css'
import TabView from '../../Tab/TabView'
import SignIn from '../Signin/SigninView'
import SignUp from '../Signup/SignupView'
import Signin, { LoginProps, } from '../Signin/Signin'

const signIn: (role: 'customer' | 'admin') => any = role => (
    <Signin
        key={role}
        render={({ loginState, setLoginState, sendRequest, setSendRequest }: LoginProps) => (
            <SignIn
                role={role}
                loginState={loginState}
                setLoginState={setLoginState}
                sendRequest={sendRequest}
                setSendRequest={setSendRequest}
            />
        )}
    />
)

const LoginPopup: React.FC = () => {

    const [isOpen, setOpen,] = React.useState<boolean>(true)

    const { LoginContainer, } = classes

    return (
        <Dialog show={isOpen}>

            <div className={LoginContainer} >
                <TabView
                    data={[
                        {
                            title: 'Sign up',
                            component: (
                                <SignUp />
                            )
                        },
                        {
                            title: 'Sign in',
                            component: signIn("customer")
                        },
                        {
                            title: 'Admin',
                            component: signIn("admin")
                        }
                    ]}
                />
            </div>

        </Dialog>
    )


}

export default LoginPopup
