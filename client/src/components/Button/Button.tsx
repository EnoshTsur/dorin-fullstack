import React from 'react'
import classes from './Button.module.css'
import { mode, } from '../../types/types'
import { generateStyle, } from '../../utils/styleUtils'


interface Props {
    mode?: mode, 
    onClick: any,
    title:  string,
    isDisabled?: boolean,
    miscStyles?: {[key: string]: any}
}


const Button: React.FC<Props> = ({ mode = 'default', onClick, title, isDisabled, }) => {

    const { Btn, BtnSuccess, BtnInfo, BtnWarning, BtnError } = classes
    const style = generateStyle(Btn)

    return (
        <button
            className={mode === 'success' ? 
                        style(BtnSuccess): mode === 'error' ? 
                        style(BtnError): mode === 'warning' ? 
                        style(BtnWarning): mode === 'info' ?
                        style(BtnInfo): style() 
            }
            onClick={onClick}
            disabled={isDisabled || false}
        >
            { title }
        </button>
    );
}

export default Button
