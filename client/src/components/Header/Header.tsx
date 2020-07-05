import React from 'react'
import classes from './Header.module.css'


interface Props {
    title: string
}

export default function Header({ title, }: Props) {

    const { Header } = classes

    return (
        <div className={Header}>
            <h1>
                {title}
            </h1>
        </div>
    )
}
