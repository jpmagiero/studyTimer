import React, { useState } from "react";
import Button from "../button";
import style from './form.module.scss';
import { ITask } from "../../types/task";
import { v4 as uuidv4} from 'uuid';

interface Props{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({ setTasks }: Props) {
    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00");

    function saveTask(evt: React.FormEvent<HTMLFormElement>){
        evt.preventDefault();
        setTasks(oldTasks => 
            [
                ...oldTasks, 
                {
                    task,
                    time,
                    select: false,
                    concluded: false,
                    id: uuidv4()
                }
            ]);
            setTask("");
            setTime("00:00");
    }
    return(
        <form className={style.newTask} onSubmit={saveTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Add a new study
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        value={task}
                        onChange={evt => setTask(evt.target.value)}
                        placeholder="What do you want to study?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label>
                        Time
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="time"
                        value={time}
                        onChange={evt => setTime(evt.target.value)}
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button type="submit">
                    Adicionar
                </Button>
            </form>
    )
}

export default Form;