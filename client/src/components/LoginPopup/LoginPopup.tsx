import React from 'react'
import Dialog from '../Dialog/Dialog'
import classes from './LoginPopup.module.css'
import TabView from '../Tab/TabView'
import SignIn from '../Sign/Signin'
import SignUp from '../Sign/Signup'
import Login, { LoginProps, } from '../Sign/Login'


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
                            component: (
                                <Login 
                                    key="customer" 
                                    render={({ loginState, setLoginState, sendRequest, setSendRequest }: LoginProps) => (
                                    <SignIn
                                        role="customer"
                                        loginState={loginState}
                                        setLoginState={setLoginState}
                                        sendRequest={sendRequest}
                                        setSendRequest={setSendRequest}
                                    />
                                )}
                                />
                            )
                        },
                        {
                            title: 'Admin',
                            component: (
                                <Login 
                                    key="admin"
                                    render={({ loginState, setLoginState, sendRequest, setSendRequest }: LoginProps) => (
                                    <SignIn
                                        role="admin"
                                        loginState={loginState}
                                        setLoginState={setLoginState}
                                        sendRequest={sendRequest}
                                        setSendRequest={setSendRequest}
                                    />
                                )}
                                />
                            )
                        }
                    ]}
                />
            </div>

        </Dialog>
    )


}

export default LoginPopup
