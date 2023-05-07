import Button from '../button';
import Clock from './clock';
import style from './stopwatch.module.scss'

export function Stopwatch(){
    return(
        <div className={style.stopwatch}>
            <p className={style.title}> Choose a card and start the timer </p>
            <div className={style.watchWrapper}>
                <Clock />
            </div>
            <Button>
                Start!
            </Button>
        </div>
    )
}