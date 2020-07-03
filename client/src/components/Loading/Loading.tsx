import React from 'react'
import classes from './Loading.module.css'

export default function Loading() {
    return (
        <div className={classes.Container}>
            <div className={classes.LdsRipple}>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
