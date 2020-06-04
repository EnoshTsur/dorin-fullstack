import React from 'react'
import Dialog from '../Dialog/Dialog'

const LoginPopup: React.FC = () => {

    const [isOpen, setOpen, ] = React.useState<boolean>(true)
    
    return (
        <Dialog show={isOpen}>

            <div style={{ 
                position: 'fixed',
                top: '50%',
                left: '50%',
                width: '20rem',
                transform: 'translate(-50%, -50%)',
                borderRadius: '7px',
                backgroundColor: 'white', 
                padding: '1rem', 
                zIndex: 999
                }}>
                <h1> hi!!! </h1>
            </div>

        </Dialog>
    )

}

export default LoginPopup
