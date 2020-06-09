import React from 'react'
import classes from './Input.module.css'

interface Props {
        handleChange: (value: string) => void,
        placeholder?: string,      
        miscStyles?: {[key: string]: any }
        type?: string
}

const Input: React.FC<Props>  = ({ handleChange, miscStyles, placeholder, type, }) => {

    const { Input, } = classes

    return (
             <input 
                 className={Input}
                 placeholder={placeholder || ''} 
                 type={type || 'text'}
                 style={{ ...miscStyles, }}
                 onChange={e => handleChange(e.target.value)}
             />
    );
}

export default Input
