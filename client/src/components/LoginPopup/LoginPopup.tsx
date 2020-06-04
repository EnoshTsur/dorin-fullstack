import React from 'react'
import Dialog from '../Dialog/Dialog'
import { tokenStorage, } from '../../dataSources/localStorage'

const style: { [key: string]: string | number } = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '20rem',
    transform: 'translate(-50%, -50%)',
    borderRadius: '7px',
    backgroundColor: 'white',
    padding: '1rem',
    zIndex: 2,
}

interface Props {
    accessToken: string  | null,
    setAccessToken: (token: string) => void
}

const LoginPopup: React.FC<Props> = (props) => {


    const [isOpen, setOpen, ] = React.useState<boolean>(true)
    
    return (
        <Dialog show={isOpen}>

            <div style={style} >
                <h1> hi!!! </h1>
            </div>

        </Dialog>
    )

}

export default LoginPopup
