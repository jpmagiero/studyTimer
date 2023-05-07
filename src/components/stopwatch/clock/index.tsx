import React from 'react';
import style from './clock.module.scss'

export default function Clock() {
    return (
        <React.Fragment>
            <span className={style.clockNumber}>0</span>
            <span className={style.clockNumber}>0</span>
            <span className={style.divisionWatch}>:</span>
            <span className={style.clockNumber}>0</span>
            <span className={style.clockNumber}>0</span>
        </React.Fragment>
    )
}