import React from 'react'
import Dialog from '../Dialog/Dialog'
import { tokenStorage, } from '../../dataSources/localStorage'
import classes from './LoginPopup.module.css'
import TabView from '../Tab/TabView'
import SignIn from '../Sign/Signin'
import SignUp from '../Sign/Signup'
import { ICustomer, IAdmin, } from '../../model/user'

interface Props {
    user: ICustomer | IAdmin,
    setUser: (user: ICustomer | IAdmin) => void,
    accessToken: string,
    setAccessToken: (accessToken: string) => void,
}

const LoginPopup: React.FC<Props> = ({ user, setUser, accessToken, setAccessToken, }) => {

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
                                <SignUp 
                                    setUser={setUser} 
                                    setAccessToken={setAccessToken} 
                                />
                            )
                        },
                        {
                            title: 'Sign in', 
                            component: (
                                <SignIn 
                                    setUser={setUser} 
                                    setAccessToken={setAccessToken} 
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
