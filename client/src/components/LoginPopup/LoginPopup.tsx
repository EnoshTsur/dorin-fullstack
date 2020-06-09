import React from 'react'
import Dialog from '../Dialog/Dialog'
import { tokenStorage, } from '../../dataSources/localStorage'
import classes from './LoginPopup.module.css'
import TabView from '../Tab/TabView'
import { SignUp, } from '../Sign/Sign'

interface Props {
    accessToken: string  | null,
    setAccessToken: (token: string) => void
}

const LoginPopup: React.FC<Props> = (props) => {


    const [isOpen, setOpen, ] = React.useState<boolean>(true)
    
    const { LoginContainer, } = classes

    const A: React.FC<{header: string}> = ({ header }) => (
        <div>{header}</div>
    )

    return (
        <Dialog show={isOpen}>

            <div className={LoginContainer} >
                <TabView 
                    data={[ 
                        {title: 'Sign up', component: (<SignUp />)},
                        {title: 'Sign in', component: (<SignUp />)}
                    ]}
                />
            </div>

        </Dialog>
    )

  

}

export default LoginPopup
