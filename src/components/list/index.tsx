import React from "react";
import style from './list.module.scss'
import Item from "./item";

function List(){
    const tasks = [{
        task: 'React',
        time:'02:00:00'
      }, {
        task: 'JavaScript',
        time:'01:00:00'
    }, {
        task: "Typescrript",
        time: "03:00:00"
    }]
    return(
        <aside className={style.taskList}>
            <h2> Studies of the day </h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item 
                    key={index}
                       {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;