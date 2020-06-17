import React from 'react'
import Dialog from '../Dialog/Dialog'
import classes from './LoginPopup.module.css'
import TabView from '../Tab/TabView'
import SignIn from '../Sign/Signin'
import SignUp from '../Sign/Signup'

const LoginPopup: React.FC = () => {

    const [isOpen, setOpen, ] = React.useState<boolean>(true)
    
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
                                <SignIn />
                            )
                        }
                    ]}
                />
            </div>

        </Dialog>
    )


}

export default LoginPopup
