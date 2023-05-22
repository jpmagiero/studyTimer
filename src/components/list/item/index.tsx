import { ITask } from '../../../types/task'
import style from './item.module.scss'

interface Props extends ITask {
    selectTask: (taskSelected: ITask) => void
}

export default function Item(
    {
        task,
        time,
        select,
        concluded,
        id,
        selectTask
    }: Props) {
    return (
        <li className={`${style.item} ${select ? style.selectedItem : ''} ${concluded ? style.completedItem : ''}`} 
        onClick={() => !concluded && selectTask(
            {
            task,
            time,
            select,
            concluded,
            id
        })}>
            <h3>{task}</h3>
            <span>{time}</span>
            {concluded && <span className={style.concluded} aria-label='Task Concluded'></span>}
        </li>
    )
}