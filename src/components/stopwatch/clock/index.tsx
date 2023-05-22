import React from 'react';
import style from './clock.module.scss'

interface Props{
    time: number | undefined
}

export default function Clock({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteTen, minuteUnit] = String(minutes).padStart(2, '0');
    const [secondTen, secondUnit] = String(seconds).padStart(2, '0');
    return (
        <React.Fragment>
            <span className={style.clockNumber}>{minuteTen}</span>
            <span className={style.clockNumber}>{minuteUnit}</span>
            <span className={style.divisionWatch}>:</span>
            <span className={style.clockNumber}>{secondTen}</span>
            <span className={style.clockNumber}>{secondUnit}</span>
        </React.Fragment>
    )
}