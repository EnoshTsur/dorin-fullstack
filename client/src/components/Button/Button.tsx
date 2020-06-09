import React from 'react'
import Radium from 'radium'


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

const baseStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '7px',
    fontFamily: 'Quicksand, sans-serif',
    color: 'white',
    ':focus': {
        outline: 'none',
    }
}

const successStyle = {
    ...baseStyle,
    backgroundColor: '#2ebc4f',
    border: '2px solid #5bd778',
    ':hover': {
        backgroundColor: '#23903c',
        cursor: 'pointer',
    },
    ':active': {
        backgroundColor: '#19672b'
    }
}


const warningStyle = {
    ...baseStyle,
    backgroundColor: '#ffc21a',
    border: '2px solid #ffd666',
    ':hover': {
        backgroundColor: '#e6a800',
        cursor: 'pointer',
        
    },
    ':active': {
        backgroundColor: '#cc9600'
    }

}

const infoStyle = {
    ...baseStyle,
    backgroundColor: '#66b3ff',
    border: '2px solid #b3d4ff',
    ':hover': {
        cursor: 'pointer',
        backgroundColor: '#3399ff'
    },
    ':active': {
        backgroundColor: '#0080ff'
    }
    
}

const defaultStyle = {
    ...baseStyle,
    backgroundColor: '#d9d9d9',
    border: '2px solid #f0f0f0',
    ':hover': {
        cursor: 'pointer',
        backgroundColor: '#ccc'
    },
    ':active': {
        backgroundColor: '#b3b3b3',
    }

}

const errorStyle = {
    ...baseStyle,
    backgroundColor: '#ff5c33',
    border: '2px solid #ff704d',
    ':hover': {
        cursor: 'pointer',
        backgroundColor: '#e62e00'
    },
    ':active': {
        backgroundColor: '#b32400'
    }
}

const Button: React.FC<Props> = ({ type = defaultType, onClick, title, isDisabled, }) => {
    return (
        <button
            style={type === success ? 
                        successStyle : type === error ? 
                        errorStyle : type === warning ? 
                        warningStyle : type === info ?
                        infoStyle : defaultStyle
            }
            onClick={onClick}
            disabled={isDisabled || false}
        >
            { title }
        </button>
    );
}

export default Radium(Button)
