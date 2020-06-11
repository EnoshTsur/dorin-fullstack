import React from 'react'
import classes from './Button.module.css'


const success = 'success'
const info = 'info'
const warning = 'warning'
const error= 'error'
const defaultType = 'default'

type buttonType = 'success' | 'info' | 'warning' | 'error' | 'default'


interface Props {
    type?: buttonType, 
    onClick: any,
    title:  string,
    isDisabled?: boolean,
    miscStyles?: {[key: string]: any}
}


const Button: React.FC<Props> = ({ type = defaultType, onClick, title, isDisabled, }) => {

    const { Btn, BtnSuccess, BtnInfo, BtnWarning, BtnError } = classes
    const style = (className?: any) => `${Btn} ${!!className && className}`

    return (
        <button
            className={type === success ? 
                        style(BtnSuccess): type === error ? 
                        style(BtnError): type === warning ? 
                        style(BtnWarning): type === info ?
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
