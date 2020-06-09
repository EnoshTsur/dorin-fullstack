import React from 'react'
import classes from './Tab.module.css'

interface Props {
    title: string,
    miscStyles?: {[key: string]: any},
    isActive: boolean,
    onClick: () => void
    index: number,
}

const Tab: React.FC<Props> = ({ title, miscStyles, isActive, onClick, index, }) => {
   
    const { Tab, } = classes

    return (
        <div 
            onClick={onClick}
            className={Tab}
            style={{
                backgroundColor: isActive && 'white',
                borderTopLeftRadius: index === 0 && '7px',
                borderBottomRightRadius: index === 0 && '7px',   
                ...miscStyles
            }}
        >
            {title}
        </div>
    );
}

export default Tab
