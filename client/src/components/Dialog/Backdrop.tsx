import React from 'react'

const style: { [key: string]: string, } = {
    width: '100%',
    height: '100%',
    position: 'fixed',
    zIndex: '1',
    left: '0',
    top: '0',
    background: 'rgba(65, 65, 65, 0.5)',
}

interface Props {
    show: boolean,
    onClick?: () => void
}

const Backdrop: React.FC<Props> = ({ show, onClick, }) => 
    show && <div style={style} onClick={onClick}></div>

export default Backdrop
