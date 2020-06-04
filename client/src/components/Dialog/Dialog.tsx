import React from 'react'
import Backdrop from './Backdrop'

interface Props {
    show: boolean,
    onClick?: () => void,
    children: any
}

const Dialog: React.FC<Props> = ({ show, onClick, children, }) =>
    <>
        <Backdrop show={show} onClick={onClick} />
        { children }
    </>

export default Dialog
