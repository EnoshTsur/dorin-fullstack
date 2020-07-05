import React from 'react'
import { mode } from '../../types/types'
import classes from './Label.module.css'
import { generateStyle, } from '../../utils/styleUtils'

interface Props {
    text: string,
    mode: mode,
}

const Label: React.FC<Props> = ({ text, mode, }) => {
    
    const { Lbl, LblError, LblWarning, LblSuccess, LblInfo, } = classes
    
    const style = generateStyle(Lbl)

    return (
        <div className={mode === 'success' ? 
                        style(LblSuccess): mode === 'error' ? 
                        style(LblError): mode === 'warning' ? 
                        style(LblWarning): mode === 'info' ?
                        style(LblInfo): style()}>
            <h4>{text}</h4>
        </div>
    )
}

export default Label;
