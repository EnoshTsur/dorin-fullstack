import React from 'react'
import Dialog from '../../Dialog/Dialog'
import classes from './SignContainer.module.css'
import TabView from '../../Tab/TabView'
import SigninView from '../Signin/SigninView'
import SignupView from '../Signup/SignupView'
import Signin, { LoginProps, } from '../Signin/Signin'
import Signup, { UserFormProps, } from '../Signup/Signup'
import { Requested, RequestState } from '../../../Fetch/Fetch'

const signIn: (role: 'customer' | 'admin') => any = role => (
    <Signin
        key={role}
        render={({ loginState, setLoginState, }: LoginProps) => (
            <Requested render={({ sendRequest, setSendRequest }: RequestState) => (
                <SigninView
                    role={role}
                    loginState={loginState}
                    setLoginState={setLoginState}
                    sendRequest={sendRequest}
                    setSendRequest={setSendRequest}
                />
            )}
            />
        )}
    />
)
const signUp: () => any = () => (
    <Requested render={({ sendRequest, setSendRequest }: RequestState) => (
        <Signup render={({ userForm, userFormDispatch }: UserFormProps) => (
            <SignupView
                userForm={userForm}
                userFormDispatch={userFormDispatch}
                sendRequest={sendRequest}
                setSendRequest={setSendRequest}
            />
        )} />
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
                            component: signUp()
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
